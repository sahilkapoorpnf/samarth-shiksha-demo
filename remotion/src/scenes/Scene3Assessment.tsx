import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile, Sequence } from "remotion";

const screenshots = [
  { src: "images/reading-test.png", label: "Reading Fluency Test" },
  { src: "images/math-test.png", label: "Number Sense Test" },
  { src: "images/memory-test.png", label: "Visual Memory Test" },
  { src: "images/attention-test.png", label: "Attention Test" },
];

export const Scene3Assessment = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const headingY = interpolate(spring({ frame, fps, config: { damping: 20 } }), [0, 1], [40, 0]);

  // Cycle through screenshots
  const activeIndex = Math.min(Math.floor((frame - 30) / 30), screenshots.length - 1);

  return (
    <AbsoluteFill style={{ padding: "60px 80px" }}>
      {/* Title */}
      <div style={{
        opacity: headingOpacity,
        transform: `translateY(${headingY}px)`,
        textAlign: "center",
        marginBottom: 30,
      }}>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 48,
          fontWeight: 800,
          color: "white",
        }}>
          7-Domain{" "}
          <span style={{ color: "hsl(215, 85%, 60%)" }}>Assessment</span>{" "}
          Module
        </div>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 22,
          color: "hsl(220, 15%, 60%)",
          marginTop: 10,
        }}>
          Fun, interactive tests designed as games that children love
        </div>
      </div>

      {/* Screenshot showcase */}
      <div style={{
        display: "flex",
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
        {screenshots.map((ss, i) => {
          const isActive = i === Math.max(0, activeIndex);
          const delay = 30 + i * 30;
          const entrySpring = spring({ frame: frame - delay, fps, config: { damping: 18 } });
          const opacity = interpolate(frame, [delay, delay + 12], [0, 1], { extrapolateRight: "clamp" });
          const scale = interpolate(entrySpring, [0, 1], [0.8, isActive ? 1.05 : 0.92]);

          return (
            <div key={i} style={{
              opacity,
              transform: `scale(${scale})`,
              borderRadius: 20,
              overflow: "hidden",
              border: isActive ? "3px solid hsl(215, 85%, 55%)" : "2px solid hsl(220, 20%, 25%)",
              boxShadow: isActive ? "0 20px 60px hsl(215, 85%, 50%, 0.3)" : "0 10px 30px rgba(0,0,0,0.3)",
              position: "relative",
              width: isActive ? 440 : 350,
              transition: "none",
            }}>
              <Img
                src={staticFile(ss.src)}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              {/* Label overlay */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px 20px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
              }}>
                <div style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "white",
                }}>
                  {ss.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Domain pills */}
      <Sequence from={20}>
        <div style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}>
          {["Reading", "Math", "Memory", "Attention", "Listening", "Patterns", "Writing"].map((d, i) => {
            const pillOpacity = interpolate(frame, [20 + i * 6, 28 + i * 6], [0, 1], { extrapolateRight: "clamp" });
            const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#06B6D4", "#EF4444"];
            return (
              <div key={d} style={{
                opacity: pillOpacity,
                padding: "10px 22px",
                borderRadius: 50,
                background: `${colors[i]}22`,
                border: `1.5px solid ${colors[i]}55`,
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: colors[i],
              }}>
                {d}
              </div>
            );
          })}
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
