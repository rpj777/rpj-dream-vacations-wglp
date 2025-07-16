import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Dream Vacations by Richard Johnson"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        background: "linear-gradient(to right, #007bff, #00c6ff)", // Blue gradient
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: "20px" }}>Dream Vacations</div>
      <div style={{ fontSize: 40, marginBottom: "10px" }}>by Richard Johnson</div>
      <div style={{ fontSize: 30, opacity: 0.9 }}>Your Expert Travel Agent in Winter Garden, FL</div>
    </div>,
    {
      ...size,
    },
  )
}
