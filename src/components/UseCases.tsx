// Server component — CSS-only marquee, no JS needed
// overflow:hidden on the section prevents horizontal scrollbars

const ROW_1 = [
  "Do ya wanna play golf Saturday?",
  "Do ya wanna grab pizza tonight?",
  "Do ya wanna plan a date night?",
  "Do ya wanna meet at the lake this weekend?",
];

const ROW_2 = [
  "Do ya wanna work out tomorrow?",
  "Do ya wanna watch the game?",
  "Do ya wanna make this a weekly thing?",
  "Do ya wanna go out Friday night?",
];

function pill(text: string, key: string | number) {
  return (
    <span
      key={key}
      style={{
        background: "#FFFFFF",
        border: "1px solid #D9DDD5",
        borderRadius: "999px",
        padding: "13px 22px",
        fontSize: "16px",
        fontWeight: 600,
        whiteSpace: "nowrap",
        color: "#171B1E",
        flexShrink: 0,
      }}
    >
      {text}
    </span>
  );
}

export default function UseCases() {
  // Duplicate each row once for seamless CSS loop
  const row1 = [...ROW_1, ...ROW_1];
  const row2 = [...ROW_2, ...ROW_2];

  return (
    <section style={{ padding: "clamp(48px,9vw,72px) 0", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 clamp(20px,4.5vw,32px) clamp(24px,5vw,36px)",
        }}
      >
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.8px",
            color: "#697278",
          }}
        >
          USE CASES
        </p>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(26px,6.4vw,34px)",
            fontWeight: 900,
            letterSpacing: "-0.5px",
          }}
        >
          One behavior. Dozens of everyday moments.
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "clamp(28px,5vw,40px)",
        }}
      >
        {/* Row 1 — scrolls left */}
        <div
          className="marquee-row"
          style={{
            display: "flex",
            gap: "14px",
            width: "max-content",
            animation: "dyw-marq 42s linear infinite",
          }}
        >
          {row1.map((t, i) => pill(t, i))}
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className="marquee-row"
          style={{
            display: "flex",
            gap: "14px",
            width: "max-content",
            animation: "dyw-marq2 48s linear infinite",
          }}
        >
          {row2.map((t, i) => pill(t, i))}
        </div>
      </div>
    </section>
  );
}
