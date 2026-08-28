"use client";

import { useState } from "react";
import Image from "next/image";

const BULLETS = [
  "Exact username or email invitation only",
  "Mutual acceptance before any Wanna",
  "No public profiles or stranger discovery",
  "No ads or advertising identifiers",
];

export default function Privacy() {
  const [preview, setPreview] = useState<"public" | "private">("public");

  const notifText =
    preview === "public"
      ? "Clay asks: Do ya wanna go out Friday night?"
      : "You have a private Wanna.";

  const btnBase: React.CSSProperties = {
    border: "none",
    font: "700 13.5px var(--font-archivo), sans-serif",
    padding: "11px 16px",
    borderRadius: "9px",
    cursor: "pointer",
    minHeight: "44px",
    transition: "background 0.15s, color 0.15s",
  };

  return (
    <section
      id="privacy"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D9DDD5",
        scrollMarginTop: "70px",
      }}
    >
      <div
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
        {/* ── Left: privacy copy ── */}
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
            TRUST AND SAFETY
          </p>
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(26px,6.4vw,34px)",
              fontWeight: 900,
              letterSpacing: "-0.5px",
            }}
          >
            Private by design.
          </h2>
          <p
            style={{
              margin: "0 0 26px",
              fontSize: "clamp(15px,4vw,17px)",
              color: "#697278",
            }}
          >
            Intentionally not a social network.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {BULLETS.map((text) => (
              <div
                key={text}
                style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "9px",
                    height: "9px",
                    background: "#B8FF3D",
                    borderRadius: "3px",
                    marginTop: "6px",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: "15.5px", fontWeight: 500 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: preview toggle ── */}
        <div style={{ minWidth: 0 }}>
          <p
            style={{ margin: "0 0 14px", fontSize: "14.5px", fontWeight: 700 }}
          >
            You choose the preview on every Wanna.
          </p>

          {/* Segmented toggle */}
          <div
            role="group"
            aria-label="Preview mode"
            style={{
              display: "flex",
              gap: "4px",
              background: "#F7F8F4",
              border: "1px solid #D9DDD5",
              borderRadius: "12px",
              padding: "4px",
              width: "max-content",
              maxWidth: "100%",
              marginBottom: "16px",
            }}
          >
            <button
              onClick={() => setPreview("public")}
              aria-pressed={preview === "public"}
              style={{
                ...btnBase,
                background: preview === "public" ? "#171B1E" : "transparent",
                color: preview === "public" ? "#F7F8F4" : "#697278",
              }}
              className={preview !== "public" ? "toggle-inactive" : ""}
            >
              Public preview
            </button>
            <button
              onClick={() => setPreview("private")}
              aria-pressed={preview === "private"}
              style={{
                ...btnBase,
                background: preview === "private" ? "#171B1E" : "transparent",
                color: preview === "private" ? "#F7F8F4" : "#697278",
              }}
              className={preview !== "private" ? "toggle-inactive" : ""}
            >
              Private preview
            </button>
          </div>

          {/* Notification mock */}
          <div
            style={{
              background: "#F7F8F4",
              border: "1px solid #D9DDD5",
              borderRadius: "16px",
              padding: "16px 18px",
              maxWidth: "440px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Image
                src="/brand/app-icon-512.png"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
              />
              <span
                style={{ fontSize: "12px", fontWeight: 600, color: "#697278" }}
              >
                Do Ya Wanna? · now
              </span>
            </div>
            <p
              style={{ margin: 0, fontSize: "15.5px", fontWeight: 600, color: "#171B1E" }}
            >
              {notifText}
            </p>
          </div>
          <p
            style={{ margin: "14px 0 0", fontSize: "13px", color: "#697278" }}
          >
            What recipients see on their lock screen — the sender decides, per
            question.
          </p>
        </div>
      </div>
    </section>
  );
}
