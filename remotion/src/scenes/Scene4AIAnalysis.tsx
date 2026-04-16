import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

const conditions = [
  { name: "Dyslexia", confidence: "87%", color: "hsl(0, 75%, 55%)" },
  { name: "ADHD", confidence: "78%", color: "hsl(32, 95%, 55%)" },
  { name: "Dysgraphia", confidence: "62%", color: "hsl(215, 85%, 55%)" },
];

export const Scene4AIAnalysis = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const headingScale = interpolate(spring({ frame, fps, config: { damping: 15 } }), [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill style={{ padding: "60px 100px" }}>
      {/* Title */}
      <div style={{
        opacity: headingOpacity,
        transform: `scale(${headingScale})`,
        textAlign: "center",
        marginBottom: 40,
      }}>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 48,
          fontWeight: 800,
          color: "white",
        }}>
          AI-Powered{" "}
          <span style={{
            background: "linear-gradient(90deg, hsl(215, 85%, 60%), hsl(158, 55%, 55%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Learning Profile
          </span>
        </div>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 22,
          color: "hsl(220, 15%, 60%)",
          marginTop: 10,
        }}>
          94% accurate detection powered by ML models trained on 50,000+ assessments
        </div>
      </div>

      <div style={{ display: "flex", gap: 40, flex: 1 }}>
        {/* Left: Screenshot */}
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

        {/* Right: Conditions */}
        <div style={{
          width: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
        }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: "white",
            opacity: interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" }),
            marginBottom: 8,
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
                padding: "24px 28px",
                borderRadius: 20,
                background: "hsl(220, 25%, 14%)",
                border: `2px solid ${c.color}44`,
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div style={{
                    fontFamily: "sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: c.color,
                  }}>
                    {c.name}
                  </div>
                  <div style={{
                    fontFamily: "sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "hsl(220, 15%, 75%)",
                    background: "hsl(220, 25%, 18%)",
                    padding: "6px 16px",
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
