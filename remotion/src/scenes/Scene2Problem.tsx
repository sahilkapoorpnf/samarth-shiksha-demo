import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const stats = [
  { number: "35M+", label: "Children with learning disabilities in India", color: "hsl(0, 75%, 60%)" },
  { number: "90%", label: "Remain undiagnosed and unsupported", color: "hsl(32, 95%, 55%)" },
  { number: "1:8", label: "Every 8th child has a learning gap", color: "hsl(215, 85%, 60%)" },
];

export const Scene2Problem = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const headingY = interpolate(spring({ frame, fps, config: { damping: 20 } }), [0, 1], [50, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 120 }}>
      <div style={{
        opacity: headingOpacity,
        transform: `translateY(${headingY}px)`,
        textAlign: "center",
        marginBottom: 80,
      }}>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 56,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.2,
        }}>
          The Problem is{" "}
          <span style={{ color: "hsl(0, 75%, 60%)" }}>Massive</span>
        </div>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 24,
          fontWeight: 400,
          color: "hsl(220, 15%, 60%)",
          marginTop: 16,
        }}>
          Millions of children struggle silently in classrooms every day
        </div>
      </div>

      <div style={{ display: "flex", gap: 60, justifyContent: "center" }}>
        {stats.map((stat, i) => {
          const delay = 25 + i * 18;
          const s = spring({ frame: frame - delay, fps, config: { damping: 15, stiffness: 120 } });
          const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp" });
          const scale = interpolate(s, [0, 1], [0.7, 1]);

          return (
            <div key={i} style={{
              opacity,
              transform: `scale(${scale})`,
              textAlign: "center",
              padding: "50px 40px",
              borderRadius: 30,
              background: "hsl(220, 25%, 14%)",
              border: `2px solid ${stat.color}33`,
              width: 320,
            }}>
              <div style={{
                fontFamily: "sans-serif",
                fontSize: 80,
                fontWeight: 900,
                color: stat.color,
                lineHeight: 1,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily: "sans-serif",
                fontSize: 20,
                fontWeight: 500,
                color: "hsl(220, 15%, 70%)",
                marginTop: 16,
                lineHeight: 1.4,
              }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
