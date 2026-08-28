// BetaProcess — white band
// Kicker: PRIVATE BETA
// H2: Be there when the question changes.
// 4 numbered steps (36px lime squares) stacked vertically on mobile.

const STEPS = [
  {
    n: 1,
    label: "JOIN",
    body: "Put your name on the private beta list.",
  },
  {
    n: 2,
    label: "STAY CLOSE",
    body: "We'll share selected previews as launch approaches.",
  },
  {
    n: 3,
    label: "GET INVITED",
    body: "Early members will receive access before the public release.",
  },
  {
    n: 4,
    label: "KNOW FIRST",
    body: 'See what "Do Ya Wanna?" becomes before everyone else.',
  },
];

export default function BetaProcess() {
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
          PRIVATE BETA
        </p>
        <h2
          style={{
            margin: "0 0 clamp(28px,6vw,42px)",
            fontSize: "clamp(26px,6.4vw,34px)",
            fontWeight: 900,
            letterSpacing: "-0.5px",
            textWrap: "pretty",
          } as React.CSSProperties}
        >
          Be there when the question changes.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: "clamp(20px,4vw,28px)",
          }}
        >
          {STEPS.map(({ n, label, body }) => (
            <div
              key={n}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#B8FF3D",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "16px",
                  color: "#171B1E",
                  flexShrink: 0,
                }}
              >
                {n}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  letterSpacing: "0.8px",
                }}
              >
                {label}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
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
