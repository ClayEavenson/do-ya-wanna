import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────────────────────
// Beta invite handler — sends notification email via Resend.
//
// Required Vercel environment variables (set in Project → Settings → Env Vars):
//
//   RESEND_API_KEY        your Resend API key (re_...)
//   BETA_NOTIFY_TO        wanna@steamworks.io
//   RESEND_FROM_EMAIL     Do Ya Wanna <noreply@yourdomain.com>
//                         ↑ must be a Resend-verified sender domain
//
// Local development:
//   If RESEND_API_KEY is absent, the route simulates a successful submission
//   and logs to the console. Real emails are NOT sent locally.
//
// Production (NODE_ENV === 'production'):
//   A missing RESEND_API_KEY returns HTTP 503 so that beta leads are never
//   silently dropped.
//
// The API key is read from process.env server-side only — it is never
// prefixed with NEXT_PUBLIC_ and is never sent to the browser.
// ─────────────────────────────────────────────────────────────────────────────

// Simple in-memory rate limit (resets on cold-start — swap for Vercel KV in prod)
const submissions = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_MAX) return true;
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return false;
}

/** Mask email for safe logging: clay@example.com → cl***@example.com */
function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***@***";
  return `${local.slice(0, Math.min(2, local.length))}***@${domain}`;
}

function notificationHtml(name: string, email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:32px;font-family:system-ui,sans-serif;background:#F7F8F4;color:#171B1E">
  <div style="max-width:480px;margin:0 auto;background:#FFFFFF;border:1px solid #D9DDD5;border-radius:16px;padding:28px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
      <span style="background:#B8FF3D;color:#171B1E;font-weight:800;font-size:12px;letter-spacing:1.4px;padding:5px 10px;border-radius:999px">NEW BETA LEAD</span>
    </div>
    <p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:1px;color:#697278">NAME</p>
    <p style="margin:0 0 20px;font-size:18px;font-weight:700">${escHtml(name)}</p>
    <p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:1px;color:#697278">EMAIL</p>
    <p style="margin:0 0 20px;font-size:16px"><a href="mailto:${escHtml(email)}" style="color:#171B1E">${escHtml(email)}</a></p>
    <hr style="border:none;border-top:1px solid #D9DDD5;margin:20px 0">
    <p style="margin:0;font-size:13px;color:#697278">Do Ya Wanna? · Beta signup notification</p>
  </div>
</body>
</html>`.trim();
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const { name, email, _hp } = body as {
    name?: string;
    email?: string;
    _hp?: string;
  };

  // ── Honeypot — silently succeed to confuse bots ───────────────────────────
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // ── Server-side validation ─────────────────────────────────────────────────
  const cleanName = (name ?? "").trim();
  const cleanEmail = (email ?? "").trim().toLowerCase();

  if (!cleanName || cleanName.length > 100) {
    return NextResponse.json(
      { ok: false, error: "First name is required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }

  // ── Environment check ──────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const isProd = process.env.NODE_ENV === "production";

  if (!apiKey) {
    if (isProd) {
      // Never silently drop leads in production
      console.error(
        "[subscribe] RESEND_API_KEY is not set — submission not delivered."
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            "Signup is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    // Local dev without key → simulate success
    console.log(
      `[subscribe][DEV SIMULATION] name="${cleanName}", email="${maskEmail(cleanEmail)}" — set RESEND_API_KEY to send real emails`
    );
    return NextResponse.json({ ok: true });
  }

  // ── Send via Resend ────────────────────────────────────────────────────────
  const to = process.env.BETA_NOTIFY_TO ?? "wanna@steamworks.io";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Do Ya Wanna <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const { error: sendError } = await resend.emails.send({
    from,
    to,
    replyTo: cleanEmail, // clicking Reply in email client goes to the submitter
    subject: `New beta invite: ${cleanName}`,
    html: notificationHtml(cleanName, cleanEmail),
  });

  if (sendError) {
    console.error("[subscribe] Resend error:", sendError.message);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not save your signup. Please try again.",
      },
      { status: 500 }
    );
  }

  // Safe dev logging — masked email only, never the full address
  if (!isProd) {
    console.log(
      `[subscribe] Email sent — name="${cleanName}", email="${maskEmail(cleanEmail)}"`
    );
  }

  return NextResponse.json({ ok: true });
}
