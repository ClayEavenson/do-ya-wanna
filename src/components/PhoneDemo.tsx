import Image from "next/image";

/**
 * IPhoneProFrame — CSS-built iPhone Pro portrait mockup.
 *
 * Proportions: ~19.5:9 screen ratio (iPhone 15 Pro: 393×852pt logical).
 * Hardware: titanium/graphite outer frame, thin black bezel, Dynamic Island,
 * status bar (time left, indicators right), side buttons (volume+action left,
 * power right), home indicator pill.
 *
 * SECRECY RULE: screen content is teaser-only — logo + lime ? + two text lines.
 * No interface elements, no buttons, no questions, no product mechanics.
 */

// ── Helpers ──────────────────────────────────────────────────────────────────

/** 3-bar cellular signal icon */
const CellIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor" aria-hidden="true">
    <rect x="0"   y="8"  width="3.5" height="4"   rx="0.6" />
    <rect x="4.5" y="5"  width="3.5" height="7"   rx="0.6" />
    <rect x="9"   y="2"  width="3.5" height="10"  rx="0.6" />
    <rect x="13.5" y="0" width="3.5" height="12"  rx="0.6" opacity="0.35" />
  </svg>
);

/** Wi-Fi icon */
const WifiIcon = () => (
  <svg width="16" height="12" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
    <path d="M12 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-4.5c1.9 0 3.6.7 4.9 1.9l1.4-1.4A9.5 9.5 0 0012 7.5a9.5 9.5 0 00-6.3 2.4l1.4 1.4A7.3 7.3 0 0112 9.5zm0-5c3 0 5.7 1.1 7.8 3l1.4-1.4A13 13 0 0012 2.5a13 13 0 00-9.2 3.6l1.4 1.4C6.3 5.6 9 4.5 12 4.5z" />
  </svg>
);

/** Battery icon with nub */
const BatteryIcon = () => (
  <svg width="27" height="13" viewBox="0 0 27 13" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
    <rect x="2" y="2" width="18" height="9" rx="2" fill="currentColor" />
    <path d="M24.5 4.5v4a2 2 0 000-4z" fill="currentColor" fillOpacity="0.4" />
  </svg>
);

// ── Main component ────────────────────────────────────────────────────────────
export default function PhoneDemo() {
  return (
    /*
     * Outer positioner — constrains max width and handles responsive scaling.
     * The phone is intentionally allowed to be tall; the hero section flows
     * around it naturally.
     */
    <div
      style={{
        width: "min(100%, 310px)",  // narrower = more iPhone-like
        position: "relative",
      }}
    >
      {/* ── Side hardware buttons (absolutely positioned, pointer-events:none) ─ */}

      {/* LEFT — Action button (top) + Volume up + Volume down */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-4px",
          top: "14%",
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          zIndex: 2,
        }}
      >
        {/* Action button — shorter */}
        <div style={btnStyle("left", 34)} />
        {/* Volume up */}
        <div style={btnStyle("left", 60)} />
        {/* Volume down */}
        <div style={btnStyle("left", 60)} />
      </div>

      {/* RIGHT — Power / Sleep-Wake */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-4px",
          top: "22%",
          zIndex: 2,
        }}
      >
        <div style={btnStyle("right", 80)} />
      </div>

      {/*
       * ── Outer titanium frame ──
       * Slightly larger than the screen area; gives the slim frame appearance.
       * Uses a subtle radial gradient from a slightly lighter edge to darker
       * interior to simulate titanium brushed-metal depth without being glossy.
       */}
      <div
        aria-label="App teaser: Do Ya Wanna? — Something new is coming."
        role="img"
        style={{
          width: "100%",
          // 19.5:9 aspect ratio — iPhone 15 Pro proportions
          aspectRatio: "9 / 19.5",
          borderRadius: "clamp(36px, 11%, 48px)",
          background: "linear-gradient(145deg, #3A3D42 0%, #2A2D32 40%, #1E2024 70%, #2C2F34 100%)",
          padding: "clamp(5px, 1.8%, 8px)",
          boxShadow: [
            // outer depth shadow
            "0 30px 80px rgba(0,0,0,0.55)",
            "0 8px 24px rgba(0,0,0,0.35)",
            // subtle top-left titanium highlight
            "inset 0 1px 0 rgba(255,255,255,0.12)",
            // right-bottom inner shadow for depth
            "inset 0 -1px 0 rgba(0,0,0,0.6)",
          ].join(", "),
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*
         * ── Inner bezel + screen ──
         * Near-black bezel ring between the titanium frame and the display.
         * Fills the remaining space inside the outer frame.
         */}
        <div
          style={{
            flex: 1,
            borderRadius: "clamp(28px, 9%, 40px)",
            background: "#0B0D0E",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            // Inner highlight line at top — subtle depth
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/*
           * ── Status bar row ──
           * Time on the left, Dynamic Island centered, icons on the right.
           * Implemented as a 3-column grid so the DI stays truly centred.
           */}
          <div
            aria-hidden="true"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "flex-end",
              padding: "12px 18px 6px",
              color: "#F7F8F4",
            }}
          >
            {/* Time — left */}
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "-0.2px",
                lineHeight: 1,
              }}
            >
              9:30
            </span>

            {/* Dynamic Island — center pill */}
            <div
              style={{
                width: "clamp(88px, 28%, 108px)",
                height: "clamp(28px, 9%, 34px)",
                background: "#000000",
                borderRadius: "999px",
                marginTop: "-10px",    // pull up into the bezel top
                boxShadow: "0 2px 6px rgba(0,0,0,0.8)",
              }}
            />

            {/* Status icons — right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "5px",
                lineHeight: 1,
              }}
            >
              <CellIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          {/* ── Teaser screen content — vertically centered in remaining space ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(16px, 4vw, 22px)",
              padding: "16px 24px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            {/* Brand row: app icon + name */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src="/brand/app-icon-512.png"
                alt=""
                aria-hidden="true"
                width={26}
                height={26}
                style={{ borderRadius: "6px" }}
              />
              <span
                style={{
                  fontSize: "clamp(13px, 3.5vw, 16px)",
                  fontWeight: 800,
                  letterSpacing: "-0.2px",
                  color: "#F7F8F4",
                }}
              >
                Do Ya Wanna?
              </span>
            </div>

            {/* Bare lime ? — ALLOWED on dark background ✓ */}
            <Image
              src="/brand/question-mark-lime.png"
              alt="?"
              width={119}
              height={150}
              style={{
                height: "clamp(110px, 20vw, 160px)",
                width: "auto",
                display: "block",
              }}
            />

            {/* Teaser copy — NO mechanics, NO interface */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(15px, 4vw, 18px)",
                  fontWeight: 800,
                  letterSpacing: "-0.2px",
                  color: "#F7F8F4",
                  lineHeight: 1.2,
                }}
              >
                Something new is coming.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(11px, 3vw, 13px)",
                  fontWeight: 500,
                  color: "#9AA29F",
                  lineHeight: 1.4,
                }}
              >
                Private beta access opens soon.
              </p>
            </div>
          </div>

          {/* ── Home indicator pill ── */}
          <div
            aria-hidden="true"
            style={{
              padding: "8px 0 14px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "36%",
                height: "4px",
                background: "#F7F8F4",
                borderRadius: "999px",
                opacity: 0.3,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Button style helper ───────────────────────────────────────────────────────
function btnStyle(side: "left" | "right", height: number): React.CSSProperties {
  return {
    width: "3px",
    height: `${height}px`,
    background: "linear-gradient(to bottom, #3A3D42, #2A2D32)",
    borderRadius: side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
    boxShadow:
      side === "left"
        ? "-1px 0 2px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)"
        : "1px 0 2px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
  };
}
