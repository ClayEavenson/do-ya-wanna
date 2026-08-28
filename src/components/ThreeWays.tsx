// Server component — no interactivity needed
export default function ThreeWays() {
  const cards = [
    {
      tag: "INDIVIDUAL",
      q: "\u201cDo ya wanna grab coffee tomorrow?\u201d",
      extra: null,
      desc: "Send one clear question to one person you already know.",
    },
    {
      tag: "GROUP",
      q: "\u201cDo ya wanna play golf Saturday?\u201d",
      extra: null,
      desc: "Send one question to a named group. Each person receives and answers the Wanna independently.",
    },
    {
      tag: "SCHEDULED\u00a0& RECURRING",
      q: "\u201cDo ya wanna work out tomorrow?\u201d",
      extra: "Repeats Monday, Wednesday, and Friday at 7:00\u00a0AM",
      desc: "Schedule a Wanna for later or make it repeat automatically.",
    },
  ];

  return (
    <section
      id="types"
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
          THREE WAYS TO ASK
        </p>
        <h2
          style={{
            margin: "0 0 clamp(28px,6vw,42px)",
            fontSize: "clamp(26px,6.4vw,34px)",
            lineHeight: 1.15,
            fontWeight: 900,
            letterSpacing: "-0.5px",
          }}
        >
          One person. A whole group. Once—or on repeat.
        </h2>

        {/* Cards grid: single column ≤430px, 3-col on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(14px,3vw,24px)",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.tag}
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
                {card.tag}
              </span>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "20px",
                  fontWeight: 800,
                  letterSpacing: "-0.2px",
                  color: "#171B1E",
                }}
              >
                {card.q}
              </p>
              {card.extra && (
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#171B1E",
                  }}
                >
                  {card.extra}
                </p>
              )}
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "#697278",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            margin: "clamp(18px,4vw,26px) 0 0",
            fontSize: "15.5px",
            fontWeight: 700,
            color: "#171B1E",
          }}
        >
          Any Wanna — to one person or a whole group — can be one-time,
          scheduled, or recurring.
        </p>
      </div>
    </section>
  );
}
