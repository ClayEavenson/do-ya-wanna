// FourWords — white band (alternating section)
// Kicker: FOUR WORDS. ENDLESS POSSIBILITIES.
// No specific activities, use cases, or product mechanics.

const CARDS = [
  {
    tag: "YOU'VE SAID IT",
    body: "Probably more times than you realize.",
  },
  {
    tag: "YOU'VE HEARD IT",
    body: "And you already know exactly what it means.",
  },
  {
    tag: "NOW WATCH WHAT HAPPENS",
    body: "We're making simple questions part of something new.",
  },
];

export default function FourWords() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D9DDD5",
        borderBottom: "1px solid #D9DDD5",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding:
            "clamp(56px,10vw,88px) clamp(20px,4.5vw,32px)",
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
          FOUR WORDS. ENDLESS POSSIBILITIES.
        </p>
        <h2
          style={{
            margin: "0 0 14px",
            fontSize: "clamp(26px,6.4vw,34px)",
            lineHeight: 1.15,
            fontWeight: 900,
            letterSpacing: "-0.5px",
          }}
        >
          Simple questions, every day.
        </h2>
        <p
          style={{
            margin: "0 0 clamp(28px,6vw,42px)",
            fontSize: "clamp(15px,4vw,17px)",
            lineHeight: 1.55,
            color: "#697278",
            maxWidth: "56ch",
          }}
        >
          You&apos;ve asked them. You&apos;ve answered them. You ask simple
          questions every single day. Get ready for simple replies—and
          something completely new.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(14px,3vw,24px)",
          }}
        >
          {CARDS.map(({ tag, body }) => (
            <div
              key={tag}
              style={{
                background: "#F7F8F4",
                border: "1px solid #D9DDD5",
                borderRadius: "20px",
                padding: "clamp(18px,4vw,24px)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "max-content",
                  background: "#B8FF3D",
                  color: "#171B1E",
                  fontSize: "10.5px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  padding: "5px 10px",
                  borderRadius: "999px",
                }}
              >
                {tag}
              </span>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  color: "#697278",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
