import Image from "next/image";

/** Real iPhone app capture, displayed in the existing portrait hardware frame. */

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
        aria-label="Wanna app: active invitations, replies and organizer headcounts"
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
          <Image
            src="/screenshots/wanna-active-iphone.png"
            alt="Wanna on iPhone showing a fishing invitation with its date, time and a headcount of two, including the sender"
            fill
            sizes="310px"
            preload
            style={{ objectFit: "contain", background: "#F7F8F4" }}
          />
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
