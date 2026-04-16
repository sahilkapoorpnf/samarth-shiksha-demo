import {
  AbsoluteFill, useCurrentFrame, useVideoConfig,
  interpolate, spring, Img, staticFile, Sequence,
} from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const poppins = loadPoppins("normal", { weights: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
const inter = loadInter("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin"] });
const H = poppins.fontFamily;
const B = inter.fontFamily;

const T = springTiming({ config: { damping: 200 }, durationInFrames: 18 });

/* ═══════════════════ SHARED BACKGROUND ═══════════════════ */
const Background = () => {
  const frame = useCurrentFrame();
  const hue = interpolate(frame, [0, 600], [215, 240]);
  return (
    <AbsoluteFill>
      <div style={{
        width: "100%", height: "100%",
        background: `linear-gradient(140deg,
          hsl(${hue}, 90%, 6%) 0%,
          hsl(${hue + 10}, 75%, 11%) 40%,
          hsl(${hue - 5}, 85%, 8%) 100%)`,
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.025,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      {/* Accent orbs */}
      {[0, 1, 2].map(i => {
        const x = interpolate(frame, [0, 600], [150 + i * 500, 250 + i * 450]);
        const y = interpolate(frame, [0, 300, 600], [100 + i * 200, 60 + i * 180, 100 + i * 200]);
        return (
          <div key={i} style={{
            position: "absolute", left: x, top: y,
            width: 300 + i * 80, height: 300 + i * 80, borderRadius: "50%",
            background: `radial-gradient(circle, hsl(${215 + i * 30}, 80%, 50%, 0.06), transparent 70%)`,
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

/* ═══════════════════ ANIMATED NUMBER ═══════════════════ */
const AnimNum: React.FC<{ value: number; suffix?: string; delay?: number }> = ({ value, suffix = "", delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 25, stiffness: 80 } });
  const n = Math.round(interpolate(s, [0, 1], [0, value]));
  return <>{n}{suffix}</>;
};

/* ═══════════════════ SCENE 1: INTRO ═══════════════════ */
const IntroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoS = spring({ frame, fps, config: { damping: 15 } });
  const titleS = spring({ frame: frame - 15, fps, config: { damping: 18 } });
  const subS = spring({ frame: frame - 35, fps, config: { damping: 20 } });
  const statsS = spring({ frame: frame - 55, fps, config: { damping: 20 } });

  const stats = [
    { n: 35, s: "M+", label: "Children Affected", color: "#EF4444" },
    { n: 90, s: "%", label: "Undiagnosed", color: "#F59E0B" },
    { n: 7, s: "", label: "Domain Assessment", color: "#3B82F6" },
    { n: 94, s: "%", label: "AI Accuracy", color: "#10B981" },
  ];

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* Logo */}
      <div style={{
        position: "absolute", top: 40, left: 60,
        opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
        transform: `scale(${interpolate(logoS, [0, 1], [0.5, 1])})`,
        display: "flex", alignItems: "center", gap: 14,
      }}>
        <Img src={staticFile("images/bitdecentro-logo.png")} style={{ height: 40 }} />
      </div>

      {/* Badge */}
      <div style={{
        position: "absolute", top: 44, right: 60,
        opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" }),
        padding: "8px 22px", borderRadius: 30,
        background: "rgba(59, 130, 246, 0.15)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        fontFamily: B, fontSize: 14, fontWeight: 600,
        color: "#60A5FA", letterSpacing: 2, textTransform: "uppercase",
      }}>
        AI-Powered EdTech Platform
      </div>

      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
        marginTop: -20,
      }}>
        {/* Main title */}
        <div style={{
          opacity: interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(titleS, [0, 1], [50, 0])}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: H, fontSize: 68, fontWeight: 900, color: "white",
            lineHeight: 1.1, letterSpacing: -2,
            textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          }}>
            Samarth Shiksha
          </div>
          <div style={{
            fontFamily: H, fontSize: 28, fontWeight: 600, marginTop: 12,
            color: "hsl(215, 85%, 70%)",
            textShadow: "0 2px 15px rgba(0,0,0,0.4)",
          }}>
            Learning Ability Support System
          </div>
        </div>

        {/* Subtitle */}
        <div style={{
          opacity: interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(subS, [0, 1], [30, 0])}px)`,
          fontFamily: B, fontSize: 22, fontWeight: 500,
          color: "hsl(220, 25%, 65%)",
          textAlign: "center", maxWidth: 700, lineHeight: 1.5,
          textShadow: "0 1px 8px rgba(0,0,0,0.4)",
        }}>
          Empowering teachers, parents & governments to identify and support children with learning disabilities through AI-powered assessments
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", gap: 40, marginTop: 30,
          opacity: interpolate(frame, [50, 65], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(statsS, [0, 1], [30, 0])}px)`,
        }}>
          {stats.map((st, i) => (
            <div key={i} style={{
              textAlign: "center", padding: "20px 32px",
              borderRadius: 18, background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              minWidth: 160,
            }}>
              <div style={{
                fontFamily: H, fontSize: 44, fontWeight: 900, color: st.color,
                textShadow: `0 2px 20px ${st.color}44`,
              }}>
                <AnimNum value={st.n} suffix={st.s} delay={55 + i * 8} />
              </div>
              <div style={{
                fontFamily: B, fontSize: 15, fontWeight: 600,
                color: "hsl(220, 20%, 65%)", marginTop: 6,
              }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════ STEP SCENE (detailed) ═══════════════════ */
interface StepData {
  stepNum: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  img: string;
  secondaryImg?: string;
  color: string;
  icon: string;
}

const StepScene: React.FC<{ data: StepData }> = ({ data }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const isEven = data.stepNum % 2 === 0;

  // Animations
  const labelS = spring({ frame, fps, config: { damping: 20 } });
  const titleS = spring({ frame: frame - 8, fps, config: { damping: 18 } });
  const descS = spring({ frame: frame - 18, fps, config: { damping: 22 } });
  const imgS = spring({ frame: frame - 5, fps, config: { damping: 16, stiffness: 100 } });

  return (
    <AbsoluteFill style={{
      flexDirection: isEven ? "row-reverse" : "row",
      alignItems: "center",
      padding: "40px 70px",
      gap: 50,
    }}>
      {/* ── Screenshot side ── */}
      <div style={{
        flex: 1.3,
        opacity: interpolate(frame, [3, 18], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateX(${interpolate(imgS, [0, 1], [isEven ? 60 : -60, 0])}px) scale(${interpolate(imgS, [0, 1], [0.92, 1])})`,
        position: "relative",
      }}>
        {/* Main screenshot */}
        <div style={{
          borderRadius: 18,
          overflow: "hidden",
          border: `2px solid ${data.color}44`,
          boxShadow: `0 25px 80px rgba(0,0,0,0.5), 0 0 60px ${data.color}15`,
        }}>
          <Img src={staticFile(data.img)} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* Secondary screenshot (floating) */}
        {data.secondaryImg && (() => {
          const secS = spring({ frame: frame - 25, fps, config: { damping: 15 } });
          const secOp = interpolate(frame, [25, 40], [0, 1], { extrapolateRight: "clamp" });
          const floatY = interpolate(frame, [0, 50, 100], [0, -6, 0]);
          return (
            <div style={{
              position: "absolute",
              bottom: -20, right: isEven ? "auto" : -30, left: isEven ? -30 : "auto",
              opacity: secOp,
              transform: `scale(${interpolate(secS, [0, 1], [0.6, 1])}) translateY(${floatY}px)`,
              width: 280,
              borderRadius: 14,
              overflow: "hidden",
              border: `2px solid ${data.color}55`,
              boxShadow: `0 15px 50px rgba(0,0,0,0.6), 0 0 30px ${data.color}22`,
            }}>
              <Img src={staticFile(data.secondaryImg)} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          );
        })()}
      </div>

      {/* ── Text side ── */}
      <div style={{
        flex: 0.9,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}>
        {/* Step label */}
        <div style={{
          opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(labelS, [0, 1], [20, 0])}px)`,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `${data.color}22`, border: `2px solid ${data.color}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: H, fontSize: 16, fontWeight: 800, color: data.color,
          }}>
            {data.stepNum}
          </div>
          <div style={{
            fontFamily: H, fontSize: 15, fontWeight: 700,
            color: data.color, letterSpacing: 3, textTransform: "uppercase",
            textShadow: `0 1px 10px ${data.color}33`,
          }}>
            Step {data.stepNum} of 4
          </div>
        </div>

        {/* Title */}
        <div style={{
          opacity: interpolate(frame, [6, 20], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(titleS, [0, 1], [25, 0])}px)`,
        }}>
          <div style={{
            fontFamily: H, fontSize: 48, fontWeight: 800,
            color: "white", lineHeight: 1.15,
            textShadow: "0 3px 25px rgba(0,0,0,0.5)",
          }}>
            {data.icon} {data.title}
          </div>
          <div style={{
            fontFamily: H, fontSize: 22, fontWeight: 600,
            color: data.color, marginTop: 4,
            textShadow: `0 1px 12px ${data.color}33`,
          }}>
            {data.subtitle}
          </div>
        </div>

        {/* Description */}
        <div style={{
          opacity: interpolate(frame, [16, 28], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(descS, [0, 1], [20, 0])}px)`,
          fontFamily: B, fontSize: 18, fontWeight: 500,
          color: "hsl(220, 20%, 68%)", lineHeight: 1.6,
          textShadow: "0 1px 6px rgba(0,0,0,0.3)",
        }}>
          {data.description}
        </div>

        {/* Feature pills */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6,
        }}>
          {data.features.map((f, i) => {
            const pillDelay = 28 + i * 6;
            const pillOp = interpolate(frame, [pillDelay, pillDelay + 10], [0, 1], { extrapolateRight: "clamp" });
            const pillS = spring({ frame: frame - pillDelay, fps, config: { damping: 20 } });
            return (
              <div key={f} style={{
                opacity: pillOp,
                transform: `translateY(${interpolate(pillS, [0, 1], [12, 0])}px)`,
                padding: "8px 18px", borderRadius: 30,
                background: `${data.color}15`,
                border: `1.5px solid ${data.color}35`,
                fontFamily: B, fontSize: 14, fontWeight: 700,
                color: data.color,
              }}>
                ✓ {f}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════ CLOSING SCENE ═══════════════════ */
const ClosingScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleS = spring({ frame: frame - 5, fps, config: { damping: 15 } });
  const subS = spring({ frame: frame - 25, fps, config: { damping: 20 } });
  const ctaS = spring({ frame: frame - 50, fps, config: { damping: 12, stiffness: 80 } });
  const pulseScale = interpolate(frame % 60, [0, 30, 60], [1, 1.06, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, hsl(215, 80%, 50%, 0.1), transparent 70%)",
        transform: `scale(${pulseScale})`,
      }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(titleS, [0, 1], [0.7, 1])})`,
        }}>
          <Img src={staticFile("images/bitdecentro-logo.png")} style={{ height: 70 }} />
        </div>

        <div style={{
          opacity: interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(titleS, [0, 1], [40, 0])}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: H, fontSize: 58, fontWeight: 900, color: "white",
            lineHeight: 1.15, textShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}>
            Every Child Deserves a<br />
            <span style={{ color: "#3B82F6" }}>Fair Chance</span> to Learn
          </div>
        </div>

        <div style={{
          opacity: interpolate(frame, [22, 35], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(subS, [0, 1], [20, 0])}px)`,
          fontFamily: B, fontSize: 22, fontWeight: 500,
          color: "hsl(220, 25%, 65%)", textAlign: "center",
          maxWidth: 650, lineHeight: 1.5,
          textShadow: "0 1px 8px rgba(0,0,0,0.4)",
        }}>
          Screen. Detect. Support. Grow. — AI-powered early detection and personalized intervention for learning disabilities.
        </div>

        <div style={{
          opacity: interpolate(frame, [45, 58], [0, 1], { extrapolateRight: "clamp" }),
          transform: `scale(${interpolate(ctaS, [0, 1], [0.6, 1])})`,
          marginTop: 16, textAlign: "center",
        }}>
          <div style={{
            padding: "18px 60px", borderRadius: 50,
            background: "linear-gradient(135deg, #3B82F6, #6366F1)",
            fontFamily: H, fontSize: 24, fontWeight: 800, color: "white",
            boxShadow: "0 12px 40px rgba(59, 130, 246, 0.4)",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}>
            Built by BitDecentro
          </div>
          <div style={{
            marginTop: 14, fontFamily: B, fontSize: 18, fontWeight: 600,
            color: "hsl(220, 20%, 60%)",
          }}>
            www.bitdecentro.com
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════ MAIN BANNER ═══════════════════ */

const stepData: StepData[] = [
  {
    stepNum: 1, title: "Screen", subtitle: "7-Domain Cognitive Assessment",
    icon: "🔍", color: "#3B82F6",
    img: "images/assessment-overview.png", secondaryImg: "images/reading-test.png",
    description: "Comprehensive screening across Reading, Math, Memory, Attention, Listening, Patterns & Writing — designed as fun, interactive games children enjoy.",
    features: ["Game-Based Tests", "Child-Friendly UI", "Multi-Language", "Offline Ready"],
  },
  {
    stepNum: 2, title: "Assess", subtitle: "Interactive Game-Based Testing",
    icon: "📝", color: "#8B5CF6",
    img: "images/reading-test.png", secondaryImg: "images/math-test.png",
    description: "Each domain has carefully designed interactive tests — from reading fluency and phonemic awareness to visual memory patterns and sustained attention tasks.",
    features: ["Reading Fluency", "Number Sense", "Visual Memory", "Attention Span"],
  },
  {
    stepNum: 3, title: "Detect", subtitle: "AI-Powered Learning Profile",
    icon: "🧠", color: "#EC4899",
    img: "images/ai-profile.png", secondaryImg: "images/ai-analysis.png",
    description: "Machine learning models trained on 50,000+ assessments analyze results to detect Dyslexia, ADHD, Dysgraphia and more with 94% accuracy — generating a complete learning profile.",
    features: ["94% Accuracy", "Multi-Condition", "Severity Scoring", "Risk Classification"],
  },
  {
    stepNum: 4, title: "Grow", subtitle: "Stakeholder Dashboards & Intervention",
    icon: "📈", color: "#10B981",
    img: "images/teacher-dashboard.png",
    description: "Teachers track class progress, parents monitor growth at home, and governments get district-level analytics — enabling data-driven policy and targeted support.",
    features: ["Teacher View", "Parent Portal", "Govt Analytics", "Progress Tracking"],
  },
];

export const BannerVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Background />

      <TransitionSeries>
        {/* Intro */}
        <TransitionSeries.Sequence durationInFrames={140}>
          <IntroScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        {/* Step 1 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <StepScene data={stepData[0]} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={T} />

        {/* Step 2 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <StepScene data={stepData[1]} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-left" })} timing={T} />

        {/* Step 3 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <StepScene data={stepData[2]} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        {/* Step 4 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <StepScene data={stepData[3]} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        {/* Closing */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <ClosingScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* ── Persistent progress bar ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 5,
        background: "rgba(255,255,255,0.06)",
      }}>
        <div style={{
          height: "100%",
          width: `${interpolate(frame, [0, 610], [0, 100], { extrapolateRight: "clamp" })}%`,
          background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #10B981)",
          borderRadius: 3,
        }} />
      </div>
    </AbsoluteFill>
  );
};
