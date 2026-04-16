import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";
import { HEADING_FONT, BODY_FONT, textShadow, subtleShadow } from "../fonts";

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
        <div style={{
          opacity: logoOpacity,
          transform: `scale(${interpolate(logoScale, [0, 1], [0.5, 1])})`,
        }}>
          <Img
            src={staticFile("images/bitdecentro-logo.png")}
            style={{ height: 90 }}
          />
        </div>

        <div style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: HEADING_FONT,
            fontSize: 68,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            textShadow,
          }}>
            Empowering{" "}
            <span style={{ color: "hsl(215, 85%, 70%)" }}>Every Child</span>
            <br />
            to Learn & Grow
          </div>
        </div>

        <div style={{
          opacity: featureOpacity,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          maxWidth: 960,
          marginTop: 10,
        }}>
          {features.map((f, i) => {
            const delay = 60 + i * 8;
            const pillOpacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: "clamp" });
            return (
              <div key={f} style={{
                opacity: pillOpacity,
                padding: "14px 28px",
                borderRadius: 50,
                background: "hsl(220, 25%, 16%)",
                border: "2px solid hsl(215, 50%, 40%)",
                fontFamily: BODY_FONT,
                fontSize: 20,
                fontWeight: 700,
                color: "hsl(215, 90%, 80%)",
                textShadow: subtleShadow,
              }}>
                ✓ {f}
              </div>
            );
          })}
        </div>

        <div style={{
          opacity: ctaOpacity,
          transform: `scale(${interpolate(ctaScale, [0, 1], [0.7, 1])})`,
          marginTop: 30,
          textAlign: "center",
        }}>
          <div style={{
            padding: "22px 70px",
            borderRadius: 60,
            background: "linear-gradient(135deg, hsl(215, 85%, 50%), hsl(230, 75%, 55%))",
            fontFamily: HEADING_FONT,
            fontSize: 30,
            fontWeight: 800,
            color: "white",
            boxShadow: "0 15px 50px hsl(215, 85%, 50%, 0.4)",
            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}>
            Built by BitDecentro
          </div>
          <div style={{
            marginTop: 20,
            fontFamily: BODY_FONT,
            fontSize: 24,
            fontWeight: 600,
            color: "hsl(220, 20%, 70%)",
            textShadow: subtleShadow,
          }}>
            www.bitdecentro.com
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
