import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Img, staticFile, Sequence } from "remotion";
import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const poppins = loadPoppins("normal", { weights: ["600", "700", "800"], subsets: ["latin"] });
const inter = loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin"] });

const HEADING = poppins.fontFamily;
const BODY = inter.fontFamily;

const steps = [
  { img: "images/assessment-overview.png", label: "Screen", sub: "7-Domain Assessment", icon: "🔍", color: "#3B82F6" },
  { img: "images/reading-test.png", label: "Assess", sub: "Interactive Game Tests", icon: "📝", color: "#8B5CF6" },
  { img: "images/ai-profile.png", label: "Detect", sub: "AI-Powered Analysis", icon: "🧠", color: "#EC4899" },
  { img: "images/teacher-dashboard.png", label: "Grow", sub: "Track & Intervene", icon: "📈", color: "#10B981" },
];

export const BannerVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background gradient
  const hue = interpolate(frame, [0, 300], [215, 235]);

  return (
    <AbsoluteFill>
      {/* Animated gradient background */}
      <div style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(135deg, 
          hsl(${hue}, 85%, 8%) 0%, 
          hsl(${hue + 15}, 70%, 14%) 50%, 
          hsl(${hue - 10}, 80%, 10%) 100%)`,
      }} />

      {/* Subtle grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* ── PHASE 1: Title (frames 0–60) ── */}
      <Sequence from={0} durationInFrames={80}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          {(() => {
            const s = spring({ frame, fps, config: { damping: 18 } });
            const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
            const scale = interpolate(s, [0, 1], [0.85, 1]);
            const exitOp = interpolate(frame, [55, 75], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <div style={{
                opacity: opacity * exitOp,
                transform: `scale(${scale})`,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}>
                <Img src={staticFile("images/bitdecentro-logo.png")} style={{ height: 60 }} />
                <div style={{
                  fontFamily: HEADING,
                  fontSize: 56,
                  fontWeight: 800,
                  color: "white",
                  textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                }}>
                  How Samarth Shiksha Works
                </div>
                <div style={{
                  fontFamily: BODY,
                  fontSize: 24,
                  fontWeight: 600,
                  color: "hsl(220, 30%, 75%)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}>
                  From screening to growth — in 4 simple steps
                </div>
              </div>
            );
          })()}
        </AbsoluteFill>
      </Sequence>

      {/* ── PHASE 2: Step-by-step flow (frames 60–280) ── */}
      {steps.map((step, i) => {
        const start = 60 + i * 55;
        return (
          <Sequence key={i} from={start} durationInFrames={70}>
            <StepScene step={step} index={i} />
          </Sequence>
        );
      })}

      {/* ── Progress bar at bottom ── */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 6,
        background: "rgba(255,255,255,0.08)",
      }}>
        <div style={{
          height: "100%",
          width: `${interpolate(frame, [0, 290], [0, 100], { extrapolateRight: "clamp" })}%`,
          background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #10B981)",
          borderRadius: 3,
        }} />
      </div>

      {/* ── Step indicators ── */}
      <div style={{
        position: "absolute",
        bottom: 24,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 40,
      }}>
        {steps.map((step, i) => {
          const activeStart = 60 + i * 55;
          const isActive = frame >= activeStart && frame < activeStart + 55;
          const isPast = frame >= activeStart + 55;
          const dotOpacity = interpolate(frame, [50, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              opacity: dotOpacity,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: isActive ? step.color : isPast ? step.color : "rgba(255,255,255,0.2)",
                boxShadow: isActive ? `0 0 16px ${step.color}88` : "none",
              }} />
              <div style={{
                fontFamily: BODY,
                fontSize: 16,
                fontWeight: 700,
                color: isActive ? "white" : "rgba(255,255,255,0.4)",
                textShadow: "0 1px 6px rgba(0,0,0,0.5)",
              }}>
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const StepScene: React.FC<{ step: typeof steps[0]; index: number }> = ({ step, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const imgSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const imgOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const imgX = interpolate(imgSpring, [0, 1], [-80, 0]);

  const textSpring = spring({ frame: frame - 8, fps, config: { damping: 20 } });
  const textOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(textSpring, [0, 1], [30, 0]);

  const exitOp = interpolate(frame, [48, 65], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const isLeft = index % 2 === 0;

  return (
    <AbsoluteFill style={{
      flexDirection: isLeft ? "row" : "row-reverse",
      alignItems: "center",
      padding: "40px 80px",
      gap: 60,
      opacity: exitOp,
    }}>
      {/* Screenshot */}
      <div style={{
        flex: 1.2,
        opacity: imgOpacity,
        transform: `translateX(${isLeft ? imgX : -imgX}px)`,
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
          borderRadius: 20,
          overflow: "hidden",
          border: `3px solid ${step.color}55`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${step.color}22`,
          maxWidth: 900,
        }}>
          <Img
            src={staticFile(step.img)}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Text */}
      <div style={{
        flex: 0.8,
        opacity: textOpacity,
        transform: `translateY(${textY}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}>
        <div style={{
          fontFamily: HEADING,
          fontSize: 22,
          fontWeight: 700,
          color: step.color,
          letterSpacing: 4,
          textTransform: "uppercase",
          textShadow: `0 2px 15px ${step.color}44`,
        }}>
          Step {index + 1}
        </div>
        <div style={{
          fontFamily: HEADING,
          fontSize: 52,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.1,
          textShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}>
          {step.icon} {step.label}
        </div>
        <div style={{
          fontFamily: BODY,
          fontSize: 26,
          fontWeight: 600,
          color: "hsl(220, 25%, 72%)",
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}>
          {step.sub}
        </div>
      </div>
    </AbsoluteFill>
  );
};
