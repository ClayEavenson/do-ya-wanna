// ComingSoonMarquee — teaser chip content
// NO specific activities (no golf, dates, workouts, etc.)
// Only abstract temporal/relational references

const ROW_1 = [
  "The next time someone asks",
  "That thing you're planning",
  "This weekend",
  "Later tonight",
];

const ROW_2 = [
  "That person you're thinking about",
  "When the moment is right",
  "You'll see",
  "Soon",
];

function Pill({ text }: { text: string }) {
  return (
    <span
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

export default function ComingSoonMarquee() {
  const row1 = [...ROW_1, ...ROW_1];
  const row2 = [...ROW_2, ...ROW_2];

  return (
    <section style={{ padding: "clamp(48px,9vw,72px) 0", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding:
            "0 clamp(20px,4.5vw,32px) clamp(24px,5vw,36px)",
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
          COMING SOON
        </p>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(26px,6.4vw,34px)",
            fontWeight: 900,
            letterSpacing: "-0.5px",
            textWrap: "pretty",
          } as React.CSSProperties}
        >
          You&apos;re going to use it more than you think.
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
          {row1.map((t, i) => (
            <Pill text={t} key={i} />
          ))}
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
          {row2.map((t, i) => (
            <Pill text={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
