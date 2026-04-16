import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

export const Scene6CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame: frame - 10, fps, config: { damping: 15 } });
  const logoOpacity = interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" });

  const titleOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(spring({ frame: frame - 30, fps, config: { damping: 20 } }), [0, 1], [40, 0]);

  const featureOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" });

  const ctaScale = spring({ frame: frame - 100, fps, config: { damping: 10, stiffness: 80 } });
  const ctaOpacity = interpolate(frame, [100, 115], [0, 1], { extrapolateRight: "clamp" });

  // Pulsing glow
  const pulseScale = interpolate(frame % 60, [0, 30, 60], [1, 1.08, 1]);

  const features = [
    "7-Domain Cognitive Assessment",
    "AI-Powered Disability Detection",
    "Personalized Learning Games",
    "Teacher, Parent & Govt Dashboards",
    "Headphone-Based Audio Therapy",
    "Real-Time Progress Tracking",
  ];

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* Big glow */}
      <div style={{
        position: "absolute",
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(215, 85%, 50%, 0.12), transparent 70%)",
        transform: `scale(${pulseScale})`,
      }} />

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
      }}>
        {/* Logo */}
        <div style={{
          opacity: logoOpacity,
          transform: `scale(${interpolate(logoScale, [0, 1], [0.5, 1])})`,
        }}>
          <Img
            src={staticFile("images/bitdecentro-logo.png")}
            style={{ height: 80 }}
          />
        </div>

        {/* Title */}
        <div style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "sans-serif",
            fontSize: 60,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
          }}>
            Empowering{" "}
            <span style={{
              background: "linear-gradient(90deg, hsl(215, 85%, 60%), hsl(158, 55%, 55%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Every Child
            </span>
            <br />
            to Learn & Grow
          </div>
        </div>

        {/* Features grid */}
        <div style={{
          opacity: featureOpacity,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 14,
          maxWidth: 900,
          marginTop: 10,
        }}>
          {features.map((f, i) => {
            const delay = 60 + i * 8;
            const pillOpacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: "clamp" });
            return (
              <div key={f} style={{
                opacity: pillOpacity,
                padding: "12px 24px",
                borderRadius: 50,
                background: "hsl(220, 25%, 16%)",
                border: "1.5px solid hsl(215, 50%, 35%)",
                fontFamily: "sans-serif",
                fontSize: 17,
                fontWeight: 600,
                color: "hsl(215, 85%, 75%)",
              }}>
                ✓ {f}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{
          opacity: ctaOpacity,
          transform: `scale(${interpolate(ctaScale, [0, 1], [0.7, 1])})`,
          marginTop: 30,
          textAlign: "center",
        }}>
          <div style={{
            padding: "20px 60px",
            borderRadius: 60,
            background: "linear-gradient(135deg, hsl(215, 85%, 50%), hsl(230, 75%, 55%))",
            fontFamily: "sans-serif",
            fontSize: 26,
            fontWeight: 700,
            color: "white",
            boxShadow: "0 15px 50px hsl(215, 85%, 50%, 0.4)",
          }}>
            Built by BitDecentro
          </div>
          <div style={{
            marginTop: 20,
            fontFamily: "sans-serif",
            fontSize: 20,
            color: "hsl(220, 15%, 55%)",
          }}>
            www.bitdecentro.com
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
