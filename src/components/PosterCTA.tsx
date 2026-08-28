import Image from "next/image";

// PosterCTA — near-black (#0B0D0E) background
// The bare lime question mark (question-mark-lime.png) is ALLOWED here
// because this section has a dark background — per brand rules.
// Never show it on light backgrounds.
export default function PosterCTA() {
  return (
    <section style={{ background: "#0B0D0E" }}>
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding:
            "clamp(64px,11vw,96px) clamp(20px,4.5vw,32px)",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(32px,6vw,48px)",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(34px,8.5vw,54px)",
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-1px",
              color: "#F7F8F4",
              textTransform: "uppercase",
            }}
          >
            Do ya wanna be first?
          </h2>
          <p
            style={{
              margin: "0 0 26px",
              fontSize: "clamp(15px,4vw,17px)",
              lineHeight: 1.55,
              color: "#D9DDD5",
              maxWidth: "44ch",
            }}
          >
            Join the beta list for iPhone and Android. We&apos;ll ask you one
            question when it&apos;s ready.
          </p>

          {/* Platform icons — Apple + Android shown equally, no store badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "26px",
              color: "#D9DDD5",
            }}
          >
            {/* Apple icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.8 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.15-2.52.99-1.45 1.4-2.85 1.42-2.92-.03-.01-2.72-1.04-2.75-4.13zM14.46 4.9c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.33-.58 3.04-1.45z" />
            </svg>
            {/* Android icon */}
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M6.38 7.53l-1.5-2.6a.5.5 0 01.86-.5l1.52 2.63A9.4 9.4 0 0112 6.2c1.68 0 3.26.31 4.74.86l1.52-2.63a.5.5 0 01.86.5l-1.5 2.6C20.06 8.98 21.5 11.32 21.5 14H2.5c0-2.68 1.44-5.02 3.88-6.47zM7.25 12.1a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1zm9.5 0a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z" />
            </svg>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.4px",
              }}
            >
              COMING TO IPHONE AND ANDROID
            </span>
          </div>

          <a
            href="#invite"
            className="btn-lime"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#B8FF3D",
              color: "#171B1E",
              fontSize: "16px",
              fontWeight: 800,
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              minHeight: "44px",
            }}
          >
            YES, I WANNA JOIN
          </a>
        </div>

        {/* Bare lime ? — ALLOWED on this dark background only */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            src="/brand/question-mark-lime.png"
            alt=""
            aria-hidden="true"
            width={230}
            height={322}
            style={{
              height: "clamp(130px,26vw,230px)",
              width: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
