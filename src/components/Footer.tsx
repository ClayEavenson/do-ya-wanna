import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #D9DDD5" }}>
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "24px clamp(20px,4.5vw,32px)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {/* App icon in footer — dark icon on light bg ✓ */}
        <Image
          src="/brand/app-icon-512.png"
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
        />
        <span style={{ fontSize: "14px", fontWeight: 700 }}>Do Ya Wanna?</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: "13px",
            color: "#697278",
            whiteSpace: "nowrap",
          }}
        >
          © 2026 Do Ya Wanna? · Founded by Clay Eavenson
        </span>
      </div>
    </footer>
  );
}
