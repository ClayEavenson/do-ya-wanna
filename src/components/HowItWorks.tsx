// Server component
const STEPS = [
  {
    num: "1",
    label: "ASK",
    desc: "Send one Wanna — to one person or a named group.",
  },
  {
    num: "2",
    label: "NOTIFY",
    desc: "Deliver it now, schedule it for later, or set it to repeat.",
  },
  {
    num: "3",
    label: "ANSWER",
    desc: "Yes, No, Maybe, Let\u2019s Talk About It — plus one optional response the sender adds.",
  },
  {
    num: "4",
    label: "DECIDE",
    desc: "See the result without chasing the group chat.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D9DDD5",
        borderBottom: "1px solid #D9DDD5",
        scrollMarginTop: "70px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "clamp(56px,10vw,88px) clamp(20px,4.5vw,32px)",
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
          HOW IT WORKS
        </p>
        <h2
          style={{
            margin: "0 0 clamp(28px,6vw,42px)",
            fontSize: "clamp(26px,6.4vw,34px)",
            fontWeight: 900,
            letterSpacing: "-0.5px",
          }}
        >
          One question becomes an answer.
        </h2>

        {/* Steps — stacks vertically on mobile, 4-col on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: "clamp(20px,4vw,28px)",
          }}
        >
          {STEPS.map((step) => (
            <div
              key={step.num}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <span
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
                {step.num}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  letterSpacing: "0.8px",
                  color: "#171B1E",
                }}
              >
                {step.label}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "#697278",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
