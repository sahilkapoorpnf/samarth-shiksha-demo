import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";

const stakeholders = [
  { emoji: "👩‍🏫", label: "Teachers", desc: "Track class progress & interventions" },
  { emoji: "👪", label: "Parents", desc: "Monitor child's growth at home" },
  { emoji: "🏛️", label: "Government", desc: "District-level analytics & policy" },
];

export const Scene5Dashboard = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ padding: "60px 100px" }}>
      {/* Title */}
      <div style={{
        opacity: headingOpacity,
        textAlign: "center",
        marginBottom: 40,
      }}>
        <div style={{
          fontFamily: "sans-serif",
          fontSize: 48,
          fontWeight: 800,
          color: "white",
        }}>
          Dashboards for{" "}
          <span style={{ color: "hsl(158, 55%, 50%)" }}>Every Stakeholder</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 40, flex: 1 }}>
        {/* Dashboard Screenshot */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          {(() => {
            const s = spring({ frame: frame - 10, fps, config: { damping: 18 } });
            const opacity = interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" });
            return (
              <div style={{
                opacity,
                transform: `scale(${interpolate(s, [0, 1], [0.88, 1])})`,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid hsl(220, 20%, 25%)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
              }}>
                <Img
                  src={staticFile("images/teacher-dashboard.png")}
                  style={{ width: 900, height: "auto", display: "block" }}
                />
              </div>
            );
          })()}
        </div>

        {/* Stakeholder cards */}
        <div style={{
          width: 380,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
        }}>
          {stakeholders.map((st, i) => {
            const delay = 30 + i * 18;
            const s = spring({ frame: frame - delay, fps, config: { damping: 15 } });
            const opacity = interpolate(frame, [delay, delay + 12], [0, 1], { extrapolateRight: "clamp" });
            const y = interpolate(s, [0, 1], [40, 0]);

            return (
              <div key={st.label} style={{
                opacity,
                transform: `translateY(${y}px)`,
                padding: "28px 32px",
                borderRadius: 22,
                background: "hsl(220, 25%, 14%)",
                border: "1.5px solid hsl(220, 20%, 22%)",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}>
                <div style={{ fontSize: 48 }}>{st.emoji}</div>
                <div>
                  <div style={{
                    fontFamily: "sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                  }}>
                    {st.label}
                  </div>
                  <div style={{
                    fontFamily: "sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "hsl(220, 15%, 60%)",
                    marginTop: 4,
                  }}>
                    {st.desc}
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
