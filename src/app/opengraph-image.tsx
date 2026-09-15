import { ImageResponse } from "next/og";

export const alt = "Engenharia Clara — organização técnica antes da execução";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "72px",
          alignItems: "flex-end",
          justifyContent: "space-between",
          background: "#f5f1e8",
          color: "#17242b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", width: "660px", flexDirection: "column" }}>
          <div style={{ display: "flex", marginBottom: "32px", color: "#a63f14", fontSize: 22, letterSpacing: 3 }}>
            PROJETO DEMONSTRATIVO AUTORAL
          </div>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 800, lineHeight: 0.95, letterSpacing: -5 }}>
            Engenharia começa com clareza.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "300px",
            height: "390px",
            padding: "32px",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#193b48",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 2 }}>EC / 01</div>
          <div style={{ display: "flex", borderTop: "6px solid #d9682e", paddingTop: "24px", fontSize: 30, fontWeight: 700 }}>
            contexto · escopo · próximos passos
          </div>
        </div>
      </div>
    ),
    size,
  );
}
