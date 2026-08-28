import Image from "next/image";

/**
 * TeaserPhone — device frame containing ONLY the teaser screen.
 * Near-black (#0B0D0E) background. Centered brand column.
 *
 * SECRECY RULE: No buttons, no questions, no answers, no interface elements.
 * Only: icon + name, lime question mark, two lines of teaser copy.
 *
 * The bare lime ? (question-mark-lime.png) IS allowed here — dark background. ✓
 */
export default function TeaserPhone() {
  return (
    // Outer device shell — white frame with shadow, matching reference screenshot
    <div
      aria-label="App teaser: Do Ya Wanna? — Something new is coming."
      role="img"
      style={{
        width: "min(100%, 400px)",
        background: "#FFFFFF",
        borderRadius: "44px",
        border: "1px solid #D9DDD5",
        overflow: "hidden",
        boxShadow: "0 12px 48px rgba(11,13,14,0.16), 0 2px 8px rgba(11,13,14,0.08)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Status bar (minimal — just visual chrome) ── */}
      <div
        aria-hidden="true"
        style={{
          background: "#0B0D0E",
          padding: "12px 22px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "11px",
          fontWeight: 600,
          color: "#F7F8F4",
        }}
      >
        <span>9:30</span>
        {/* Signal / wifi / battery */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* Signal */}
          <svg width="16" height="11" viewBox="0 0 16 11" fill="#F7F8F4" aria-hidden="true">
            <rect x="0" y="7" width="3" height="4" rx="0.5" />
            <rect x="4.5" y="4.5" width="3" height="6.5" rx="0.5" />
            <rect x="9" y="2" width="3" height="9" rx="0.5" />
            <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" opacity="0.3" />
          </svg>
          {/* WiFi */}
          <svg width="14" height="11" viewBox="0 0 24 18" fill="#F7F8F4" aria-hidden="true">
            <path d="M12 14a2 2 0 110 4 2 2 0 010-4zm0-5c2.4 0 4.6.9 6.2 2.4l1.8-1.8A11.9 11.9 0 0012 7C9.1 7 6.4 8.1 4 9.6l1.8 1.8C7.4 9.9 9.6 9 12 9zm0-6c3.9 0 7.4 1.5 10 4l1.8-1.8C20.9 2.4 16.8.5 12 .5S3.1 2.4.2 5.2L2 7c2.6-2.5 6.1-4 10-4z" />
          </svg>
          {/* Battery */}
          <svg width="20" height="11" viewBox="0 0 20 11" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="17" height="10" rx="2.5" stroke="#F7F8F4" strokeWidth="1" />
            <rect x="2" y="2" width="12" height="7" rx="1.5" fill="#F7F8F4" />
            <path d="M18.5 3.5v4a1.5 1.5 0 000-4z" fill="#F7F8F4" />
          </svg>
        </div>
      </div>

      {/* ── Teaser screen — near-black, centred column ── */}
      <div
        style={{
          background: "#0B0D0E",
          minHeight: "480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "22px",
          padding: "clamp(28px,6vw,40px) 28px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/brand/app-icon-512.png"
            alt=""
            aria-hidden="true"
            width={30}
            height={30}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "-0.2px",
              color: "#F7F8F4",
            }}
          >
            Do Ya Wanna?
          </span>
        </div>

        {/* Bare lime ? — ALLOWED on this dark background ✓ */}
        <Image
          src="/brand/question-mark-lime.png"
          alt="?"
          width={119}
          height={150}
          style={{ height: "190px", width: "auto" }}
        />

        {/* Teaser copy — NO interface, NO mechanics */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "-0.2px",
              color: "#F7F8F4",
            }}
          >
            Something new is coming.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 500,
              color: "#9AA29F",
            }}
          >
            Private beta access opens soon.
          </p>
        </div>
      </div>

      {/* ── Home indicator ── */}
      <div
        aria-hidden="true"
        style={{
          background: "#0B0D0E",
          padding: "10px 0 16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "4px",
            background: "#F7F8F4",
            borderRadius: "999px",
            opacity: 0.25,
          }}
        />
      </div>
    </div>
  );
}
