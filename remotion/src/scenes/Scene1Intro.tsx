import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

export const Scene1Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  
  const titleY = interpolate(spring({ frame: frame - 20, fps, config: { damping: 20 } }), [0, 1], [60, 0]);
  const titleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  
  const subtitleOpacity = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = interpolate(spring({ frame: frame - 45, fps, config: { damping: 20 } }), [0, 1], [40, 0]);

  const taglineOpacity = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp" });
  
  // Floating decorative elements
  const floatY = interpolate(frame, [0, 60, 130], [0, -8, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* Glow behind logo */}
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(215, 85%, 50%, 0.15), transparent 70%)",
        opacity: logoOpacity,
        transform: `scale(${logoScale})`,
      }} />

      {/* Logo */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
        transform: `translateY(${floatY}px)`,
      }}>
        <Img
          src={staticFile("images/bitdecentro-logo.png")}
          style={{
            height: 90,
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        />

        <div style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: -2,
            lineHeight: 1.1,
          }}>
            Samarth Shiksha
          </div>
        </div>

        <div style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 32,
            fontWeight: 500,
            background: "linear-gradient(90deg, hsl(215, 85%, 65%), hsl(158, 55%, 55%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            AI-Powered Learning Disability Detection
          </div>
        </div>

        <div style={{
          opacity: taglineOpacity,
          textAlign: "center",
          marginTop: 10,
        }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: "hsl(220, 15%, 65%)",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            Screen • Detect • Support • Grow
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
