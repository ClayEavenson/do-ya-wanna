// Server component
export default function Problem() {
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
      {/* ── Left: problem framing ── */}
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
          THE PROBLEM
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
          Simple questions get lost. Repeated questions become chores.
        </h2>
        <p
          style={{
            margin: "0 0 26px",
            fontSize: "clamp(15px,4vw,17px)",
            lineHeight: 1.55,
            color: "#697278",
            maxWidth: "46ch",
          }}
        >
          Whether you&apos;re asking one person, the whole family, or the same
          group every Thursday, Do Ya Wanna? keeps the question—and
          everyone&apos;s answer—clear.
        </p>

        {/* Chat bubbles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "400px",
          }}
        >
          {[
            { text: "Anybody want to play Saturday?", sent: false },
            { text: "Maybe. What time are you thinking?", sent: true },
            { text: "wait who\u2019s in so far?", sent: false },
            { text: "So\u2026 are we doing this?", sent: true },
          ].map(({ text, sent }) => (
            <span
              key={text}
              style={{
                alignSelf: sent ? "flex-end" : "flex-start",
                background: sent ? "#171B1E" : "#FFFFFF",
                color: sent ? "#F7F8F4" : "#171B1E",
                border: sent ? "none" : "1px solid #D9DDD5",
                borderRadius: sent
                  ? "16px 16px 4px 16px"
                  : "16px 16px 16px 4px",
                padding: "10px 15px",
                fontSize: "14.5px",
                maxWidth: "80%",
              }}
            >
              {text}
            </span>
          ))}
          <p
            style={{
              margin: "10px 0 0",
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#697278",
            }}
          >
            14 messages later, nobody knows the answer.
          </p>
        </div>
      </div>

      {/* ── Right: the Wanna solution ── */}
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.8px",
            color: "#697278",
          }}
        >
          THE SAME ASK AS A WANNA
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9DDD5",
            borderRadius: "20px",
            padding: "clamp(16px,4vw,22px)",
            maxWidth: "440px",
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "1.4px",
              color: "#697278",
            }}
          >
            FROM YOU · TO SATURDAY CREW
          </p>
          <p
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(19px,5vw,22px)",
              fontWeight: 800,
              letterSpacing: "-0.2px",
            }}
          >
            Do ya wanna play golf Saturday?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { name: "Marcus", answer: "YES", lime: true },
              { name: "Jess", answer: "YES", lime: true },
              { name: "Sam", answer: "MAYBE", lime: false },
            ].map(({ name, answer, lime }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F7F8F4",
                  border: "1px solid #D9DDD5",
                  borderRadius: "12px",
                  padding: "10px 14px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600, flex: 1 }}>
                  {name}
                </span>
                <span
                  style={{
                    background: lime ? "#B8FF3D" : "transparent",
                    border: lime ? "none" : "1px solid #D9DDD5",
                    color: lime ? "#171B1E" : "#697278",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    padding: "4px 9px",
                    borderRadius: "999px",
                  }}
                >
                  {answer}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: "13.5px",
              fontWeight: 700,
            }}
          >
            2 YES · 1 MAYBE — answered in 4 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
