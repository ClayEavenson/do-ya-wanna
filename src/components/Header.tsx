import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#F7F8F4",
        borderBottom: "1px solid #D9DDD5",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "12px clamp(16px,4vw,32px)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Image
          src="/brand/app-icon-512.png"
          alt="Do Ya Wanna?"
          width={36}
          height={36}
          priority
          style={{ flexShrink: 0 }}
        />
        <span
          style={{
            fontSize: "clamp(15px,4vw,17px)",
            fontWeight: 800,
            letterSpacing: "-0.2px",
            whiteSpace: "nowrap",
          }}
        >
          Do Ya Wanna?
        </span>
        <a
          href="#invite"
          id="header-cta"
          className="btn-dark"
          style={{
            marginLeft: "auto",
            fontSize: "clamp(13px,3.4vw,14px)",
            fontWeight: 800,
            textDecoration: "none",
            background: "#171B1E",
            color: "#F7F8F4",
            padding: "11px 16px",
            borderRadius: "12px",
            whiteSpace: "nowrap",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}
