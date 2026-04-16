import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";
import { HEADING_FONT, BODY_FONT, textShadow, subtleShadow } from "../fonts";

const conditions = [
  { name: "Dyslexia", confidence: "87%", color: "hsl(0, 75%, 60%)" },
  { name: "ADHD", confidence: "78%", color: "hsl(32, 95%, 60%)" },
  { name: "Dysgraphia", confidence: "62%", color: "hsl(215, 85%, 60%)" },
];

export const Scene4AIAnalysis = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const headingScale = interpolate(spring({ frame, fps, config: { damping: 15 } }), [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill style={{ padding: "60px 100px" }}>
      <div style={{
        opacity: headingOpacity,
        transform: `scale(${headingScale})`,
        textAlign: "center",
        marginBottom: 40,
      }}>
        <div style={{
          fontFamily: HEADING_FONT,
          fontSize: 54,
          fontWeight: 800,
          color: "white",
          textShadow,
        }}>
          AI-Powered{" "}
          <span style={{ color: "hsl(215, 85%, 70%)" }}>Learning Profile</span>
        </div>
        <div style={{
          fontFamily: BODY_FONT,
          fontSize: 26,
          fontWeight: 500,
          color: "hsl(220, 30%, 75%)",
          marginTop: 12,
          textShadow: subtleShadow,
        }}>
          94% accurate detection powered by ML models trained on 50,000+ assessments
        </div>
      </div>

      <div style={{ display: "flex", gap: 40, flex: 1 }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {(() => {
            const imgSpring = spring({ frame: frame - 15, fps, config: { damping: 18 } });
            const imgOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" });
            const imgScale = interpolate(imgSpring, [0, 1], [0.85, 1]);
            return (
              <div style={{
                opacity: imgOpacity,
                transform: `scale(${imgScale})`,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid hsl(220, 20%, 25%)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
              }}>
                <Img
                  src={staticFile("images/ai-profile.png")}
                  style={{ width: 780, height: "auto", display: "block" }}
                />
              </div>
            );
          })()}
        </div>

        <div style={{
          width: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
        }}>
          <div style={{
            fontFamily: HEADING_FONT,
            fontSize: 30,
            fontWeight: 700,
            color: "white",
            opacity: interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" }),
            marginBottom: 8,
            textShadow,
          }}>
            Detected Conditions
          </div>
          {conditions.map((c, i) => {
            const delay = 40 + i * 15;
            const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });
            const opacity = interpolate(frame, [delay, delay + 12], [0, 1], { extrapolateRight: "clamp" });
            const x = interpolate(s, [0, 1], [60, 0]);

            return (
              <div key={c.name} style={{
                opacity,
                transform: `translateX(${x}px)`,
                padding: "28px 32px",
                borderRadius: 20,
                background: "hsl(220, 25%, 14%)",
                border: `2px solid ${c.color}55`,
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div style={{
                    fontFamily: HEADING_FONT,
                    fontSize: 30,
                    fontWeight: 700,
                    color: c.color,
                    textShadow: `0 2px 15px ${c.color}44`,
                  }}>
                    {c.name}
                  </div>
                  <div style={{
                    fontFamily: BODY_FONT,
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                    background: "hsl(220, 25%, 20%)",
                    padding: "8px 20px",
                    borderRadius: 30,
                  }}>
                    {c.confidence}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
