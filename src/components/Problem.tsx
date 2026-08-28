// WhyThis — soft-white band (default bg)
// Kicker: WHY THIS?
// Right col: minimal white teaser card — lock icon + "DO YA WANNA?" + "You'll know soon."
// No functionality shown.

export default function WhyThis() {
  return (
    <section
      style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding:
          "clamp(56px,10vw,88px) clamp(20px,4.5vw,32px)",
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
        gap: "clamp(36px,6vw,56px)",
        alignItems: "center",
      }}
    >
      {/* ── Left: copy ── */}
      <div>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.8px",
            color: "#697278",
          }}
        >
          WHY THIS?
        </p>
        <h2
          style={{
            margin: "0 0 14px",
            fontSize: "clamp(26px,6.4vw,34px)",
            lineHeight: 1.15,
            fontWeight: 900,
            letterSpacing: "-0.5px",
            textWrap: "pretty",
          } as React.CSSProperties}
        >
          Some ideas are hiding in plain sight.
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(15px,4vw,17px)",
            lineHeight: 1.55,
            color: "#697278",
            maxWidth: "46ch",
          }}
        >
          We noticed something about a question nearly everyone asks. It was
          simple, familiar, and far more powerful than it looked. So we started
          building.
        </p>
      </div>

      {/* ── Right: minimal teaser card ── */}
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9DDD5",
            borderRadius: "20px",
            padding: "clamp(28px,6vw,40px)",
            maxWidth: "440px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          {/* Lucide-style lock — outline, 2px stroke, no fill */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#171B1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <p
            style={{
              margin: 0,
              fontSize: "clamp(22px,5.5vw,28px)",
              fontWeight: 900,
              letterSpacing: "-0.4px",
            }}
          >
            DO YA WANNA?
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "15.5px",
              fontWeight: 600,
              color: "#697278",
            }}
          >
            You&apos;ll know soon.
          </p>
        </div>
      </div>
    </section>
  );
}
