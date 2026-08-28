import Image from "next/image";

/**
 * HTML/CSS phone demo — Android-style device frame built in React.
 * Shows: branded app bar, individual Wanna card (FROM PAIGE),
 * group row, recurring row, and lime FAB.
 *
 * Brand rules:
 * - App bar uses app-icon-512.png (dark icon on light bg) ✓
 * - No bare lime ? here (light background) ✓
 * - "Do Ya Wanna?" spelled correctly ✓
 */
export default function PhoneDemo() {
  return (
    <div
      aria-label="App preview"
      style={{
        width: "min(100%, 380px)",
        background: "#FFFFFF",
        borderRadius: "36px",
        border: "2px solid #D9DDD5",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(11,13,14,0.10)",
      }}
    >
      {/* ── App bar ── */}
      <div
        style={{
          background: "#F7F8F4",
          borderBottom: "1px solid #D9DDD5",
          padding: "16px 16px 14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Image
          src="/brand/app-icon-512.png"
          alt=""
          width={26}
          height={26}
          aria-hidden="true"
        />
        <span
          style={{ fontSize: "15px", fontWeight: 800, letterSpacing: "-0.2px" }}
        >
          Do Ya Wanna?
        </span>
        <span
          style={{
            marginLeft: "auto",
            background: "#B8FF3D",
            color: "#171B1E",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.8px",
            padding: "4px 9px",
            borderRadius: "999px",
          }}
        >
          1 NEW
        </span>
      </div>

      {/* ── Feed ── */}
      <div
        style={{
          background: "#F7F8F4",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
          minHeight: "440px",
        }}
      >
        {/* Individual Wanna card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9DDD5",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: 800,
                letterSpacing: "1.2px",
                color: "#697278",
              }}
            >
              FROM PAIGE
            </span>
            <span
              style={{
                marginLeft: "auto",
                border: "1px solid #D9DDD5",
                fontSize: "9px",
                fontWeight: 800,
                letterSpacing: "0.6px",
                padding: "3px 7px",
                borderRadius: "999px",
                color: "#697278",
              }}
            >
              PERSON
            </span>
            <span
              style={{
                border: "1px solid #D9DDD5",
                fontSize: "9px",
                fontWeight: 800,
                letterSpacing: "0.6px",
                padding: "3px 7px",
                borderRadius: "999px",
                color: "#697278",
              }}
            >
              ONE TIME
            </span>
          </div>

          {/* Question */}
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "20px",
              lineHeight: 1.25,
              fontWeight: 800,
              letterSpacing: "-0.2px",
            }}
          >
            Do ya wanna go out Friday night?
          </p>

          {/* Answer grid: 4 preset options, sender-defined only */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            <span
              style={{
                textAlign: "center",
                padding: "12px 4px",
                borderRadius: "12px",
                background: "#B8FF3D",
                fontSize: "13.5px",
                fontWeight: 800,
                color: "#171B1E",
              }}
            >
              YES
            </span>
            <span
              style={{
                textAlign: "center",
                padding: "12px 4px",
                borderRadius: "12px",
                background: "#FFFFFF",
                border: "1px solid #D9DDD5",
                fontSize: "13.5px",
                fontWeight: 700,
              }}
            >
              NO
            </span>
            <span
              style={{
                textAlign: "center",
                padding: "12px 4px",
                borderRadius: "12px",
                background: "#FFFFFF",
                border: "1px solid #D9DDD5",
                fontSize: "13.5px",
                fontWeight: 700,
              }}
            >
              MAYBE
            </span>
            <span
              style={{
                textAlign: "center",
                padding: "12px 4px",
                borderRadius: "12px",
                background: "#FFFFFF",
                border: "1px solid #D9DDD5",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              LET&apos;S TALK ABOUT IT
            </span>
          </div>

          {/* Sender's ONE optional custom response — recipients cannot add answers */}
          <p
            style={{
              margin: "12px 0 6px",
              fontSize: "9.5px",
              fontWeight: 800,
              letterSpacing: "1px",
              color: "#697278",
            }}
          >
            PAIGE ADDED ONE OPTIONAL RESPONSE
          </p>
          <span
            style={{
              display: "block",
              textAlign: "center",
              padding: "12px 4px",
              borderRadius: "12px",
              background: "#F7F8F4",
              border: "1px solid #B8FF3D",
              fontSize: "13.5px",
              fontWeight: 700,
            }}
          >
            MOVIE NIGHT INSTEAD?
          </span>
        </div>

        {/* Group Wanna row */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9DDD5",
            borderRadius: "16px",
            padding: "12px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{ fontSize: "13.5px", fontWeight: 600, flex: 1, minWidth: 0 }}
            >
              Do ya wanna play golf Saturday?
            </span>
            <span
              style={{
                border: "1px solid #D9DDD5",
                fontSize: "9px",
                fontWeight: 800,
                letterSpacing: "0.6px",
                padding: "3px 7px",
                borderRadius: "999px",
                color: "#697278",
                flexShrink: 0,
              }}
            >
              GROUP
            </span>
          </div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              color: "#697278",
            }}
          >
            SATURDAY CREW · 3 PEOPLE ANSWERED · 2 YES · 1 MAYBE
          </span>
        </div>

        {/* Recurring Wanna row */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9DDD5",
            borderRadius: "16px",
            padding: "12px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{ fontSize: "13.5px", fontWeight: 600, flex: 1, minWidth: 0 }}
            >
              Do ya wanna work out tomorrow?
            </span>
            <span
              style={{
                background: "#B8FF3D",
                color: "#171B1E",
                fontSize: "9px",
                fontWeight: 800,
                letterSpacing: "0.6px",
                padding: "3px 7px",
                borderRadius: "999px",
                flexShrink: 0,
              }}
            >
              REPEATS
            </span>
          </div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              color: "#697278",
            }}
          >
            EVERY MON · WED · FRI AT 7:00 AM
          </span>
        </div>

        {/* Lime FAB */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "14px",
            bottom: "14px",
            width: "52px",
            height: "52px",
            background: "#B8FF3D",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "26px",
            fontWeight: 800,
            color: "#171B1E",
            boxShadow: "0 2px 8px rgba(11,13,14,0.18)",
            userSelect: "none",
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}
