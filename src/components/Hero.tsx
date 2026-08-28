"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneDemo from "./PhoneDemo";

// ── Apple & Android SVG paths (platform-neutral, shown equally) ──────────────
const AppleSVG = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.8 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.15-2.52.99-1.45 1.4-2.85 1.42-2.92-.03-.01-2.72-1.04-2.75-4.13zM14.46 4.9c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.33-.58 3.04-1.45z" />
  </svg>
);

const AndroidSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M6.38 7.53l-1.5-2.6a.5.5 0 01.86-.5l1.52 2.63A9.4 9.4 0 0112 6.2c1.68 0 3.26.31 4.74.86l1.52-2.63a.5.5 0 01.86.5l-1.5 2.6C20.06 8.98 21.5 11.32 21.5 14H2.5c0-2.68 1.44-5.02 3.88-6.47zM7.25 12.1a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1zm9.5 0a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z" />
  </svg>
);

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot field — hidden from real users
  const [submitted, setSubmitted] = useState(false);
  const [successName, setSuccessName] = useState("");
  const [successEmail, setSuccessEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Client-side honeypot check
    if (hp) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), _hp: hp }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        setSuccessName(name.trim() || "friend");
        setSuccessEmail(email.trim());
        setSubmitted(true);
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Connection error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    padding: "14px 15px",
    border: "1px solid #D9DDD5",
    borderRadius: "12px",
    background: "#F7F8F4",
    font: "500 15px var(--font-archivo), sans-serif",
    color: "#171B1E",
    minWidth: 0,
    minHeight: "44px", // touch target
  };

  return (
    <section
      style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding:
          "clamp(44px,8vw,64px) clamp(20px,4.5vw,32px) clamp(56px,9vw,88px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
        gap: "clamp(36px,6vw,56px)",
        alignItems: "center",
      }}
    >
      {/* ── Left column ── */}
      <div>
        {/* Brand row: wordmark-words-only + app-icon as punctuation
            NEVER the bare lime ? on a light background (brand rule #2) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px,2.6vw,16px)",
          }}
        >
          {/* Wordmark wrapper controls flex behaviour */}
          <div style={{ flex: "1 1 auto", minWidth: 0, maxWidth: "450px" }}>
            <Image
              src="/brand/wordmark-words-only.png"
              alt="Do Ya Wanna"
              width={900}
              height={300}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          {/* App icon as the question-mark punctuation — dark icon on light bg ✓ */}
          <Image
            src="/brand/app-icon-512.png"
            alt="?"
            width={62}
            height={62}
            priority
            style={{
              flexShrink: 0,
              width: "clamp(42px,11.5vw,62px)",
              height: "clamp(42px,11.5vw,62px)",
            }}
          />
        </div>

        <h1
          style={{
            margin: "clamp(22px,5vw,30px) 0 14px",
            fontSize: "clamp(29px,7.2vw,38px)",
            lineHeight: 1.12,
            fontWeight: 800,
            letterSpacing: "-0.5px",
          }}
        >
          One question. One tap. A real answer.
        </h1>

        <p
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(16px,4.2vw,18px)",
            lineHeight: 1.55,
            color: "#697278",
            maxWidth: "46ch",
          }}
        >
          A private, notification-first decision app for the people you already
          know. Ask one person or a whole group — once, or on repeat. Free to
          answer. No ads.
        </p>

        {/* ── Form card ── */}
        <div
          id="invite"
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9DDD5",
            borderRadius: "20px",
            padding: "clamp(18px,4vw,22px)",
            maxWidth: "560px",
            scrollMarginTop: "90px",
          }}
        >
          {submitted ? (
            /* Success state */
            <div
              style={{
                background: "#B8FF3D",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: "21px",
                  fontWeight: 800,
                  color: "#171B1E",
                }}
              >
                You&apos;re on the list.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#171B1E",
                }}
              >
                Thanks {successName} — your beta invite will land at{" "}
                {successEmail}.
              </p>
            </div>
          ) : (
            /* Default form state */
            <div>
              {/* Kicker */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "#B8FF3D",
                    borderRadius: "3px",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "1.6px",
                  }}
                >
                  BETA INVITES
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
              >
                {/* Honeypot — visually hidden, real users never fill this */}
                <input
                  type="text"
                  name="_hp"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                />

                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ ...inputStyle, flex: "1 1 150px" }}
                />
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ ...inputStyle, flex: "1.4 1 190px" }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-lime"
                  style={{
                    flex: "1 1 200px",
                    padding: "14px 22px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#B8FF3D",
                    color: "#171B1E",
                    font: "800 15px var(--font-archivo), sans-serif",
                    cursor: loading ? "wait" : "pointer",
                    minHeight: "44px",
                  }}
                >
                  {loading ? "Sending…" : "Get a Beta Invite"}
                </button>
              </form>

              {/* Inline error — no alert() */}
              {error && (
                <p
                  role="alert"
                  style={{
                    margin: "10px 0 0",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    color: "#dc2626",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Platform line — Apple + Android equally, no store badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "13px",
                  color: "#697278",
                }}
              >
                <AppleSVG />
                <AndroidSVG />
                <span style={{ fontSize: "13px" }}>
                  Beta invitations are coming soon for iPhone and Android.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Right column: phone demo ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        <PhoneDemo />
      </div>
    </section>
  );
}
