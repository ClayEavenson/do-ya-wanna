// Trust — white band (BUILT WITH INTENTION)
// Kicker: BUILT WITH INTENTION
// H2: Quiet for now. Worth the wait.
// Bullets: 4 lime-square items — no privacy toggle, no notification preview

const BULLETS = [
  "Limited early access",
  "Updates only when they matter",
  "No spam or unnecessary noise",
  "Built for iPhone and Android",
];

export default function Trust() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D9DDD5",
      }}
    >
      <div
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
            BUILT WITH INTENTION
          </p>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(26px,6.4vw,34px)",
              fontWeight: 900,
              letterSpacing: "-0.5px",
            }}
          >
            Quiet for now. Worth the wait.
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
            We&apos;re keeping the details close while we build something
            remarkably simple. Private beta members will be the first to see
            what&apos;s coming.
          </p>
        </div>

        {/* ── Right: bullet list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {BULLETS.map((text) => (
            <div
              key={text}
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "9px",
                  height: "9px",
                  background: "#B8FF3D",
                  borderRadius: "3px",
                  marginTop: "6px",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span style={{ fontSize: "15.5px", fontWeight: 500 }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
