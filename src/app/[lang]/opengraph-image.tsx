import { ImageResponse } from "next/og";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "StudyFlow — Enterprise Clinical Research Platform";

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1E3A5F 0%, #2F7F7F 60%, #4CAF50 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Logo icon placeholder - circle with gradient */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              color: "white",
              fontWeight: 700,
            }}
          >
            SF
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "white",
              }}
            >
              Study
            </span>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "#A5E8D0",
              }}
            >
              Flow
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {dict.metadata.description}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "rgba(255,255,255,0.3)",
              borderRadius: "2px",
              marginTop: "8px",
            }}
          />

          {/* URL */}
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "4px",
            }}
          >
            www.studyflow.cloud
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
