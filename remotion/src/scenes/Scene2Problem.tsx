import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { HEADING_FONT, BODY_FONT, textShadow, subtleShadow } from "../fonts";

const stats = [
  { number: "35M+", label: "Children with learning\ndisabilities in India", color: "hsl(0, 75%, 65%)" },
  { number: "90%", label: "Remain undiagnosed\nand unsupported", color: "hsl(32, 95%, 60%)" },
  { number: "1:8", label: "Every 8th child has\na learning gap", color: "hsl(215, 85%, 65%)" },
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
          fontFamily: HEADING_FONT,
          fontSize: 64,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.2,
          textShadow,
        }}>
          The Problem is{" "}
          <span style={{ color: "hsl(0, 75%, 65%)" }}>Massive</span>
        </div>
        <div style={{
          fontFamily: BODY_FONT,
          fontSize: 28,
          fontWeight: 500,
          color: "hsl(220, 30%, 75%)",
          marginTop: 16,
          textShadow: subtleShadow,
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
              border: `2px solid ${stat.color}55`,
              width: 340,
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            }}>
              <div style={{
                fontFamily: HEADING_FONT,
                fontSize: 88,
                fontWeight: 900,
                color: stat.color,
                lineHeight: 1,
                textShadow: `0 2px 30px ${stat.color}66`,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily: BODY_FONT,
                fontSize: 22,
                fontWeight: 600,
                color: "hsl(220, 20%, 80%)",
                marginTop: 20,
                lineHeight: 1.5,
                whiteSpace: "pre-line",
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
