import { ImageResponse } from "next/og";

export const alt = "Diwakar Kumar Singh — Software Engineer. Thoughtful code. Meaningful impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f3f4eb", color: "#24382a", padding: "65px 80px", justifyContent: "space-between", fontFamily: "sans-serif" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 36, fontWeight: 700 }}>Diwakar</span><span style={{ fontSize: 20 }}>SOFTWARE ENGINEER · BANGALORE</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 82, letterSpacing: "-4px", lineHeight: 1.1 }}><span>Thoughtful code.</span><span style={{ color: "#527144" }}>Meaningful impact.</span></div><div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #cbd4c0", paddingTop: 25, fontSize: 24 }}><span>Diwakar Kumar Singh</span><span>Backend platforms. Mobile experiences.</span></div></div>, size);
}