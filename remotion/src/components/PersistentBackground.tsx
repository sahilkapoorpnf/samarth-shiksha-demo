import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const PersistentBackground = () => {
  const frame = useCurrentFrame();
  const hueShift = interpolate(frame, [0, 750], [0, 30]);
  
  return (
    <AbsoluteFill>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, 
            hsl(${215 + hueShift}, 85%, 8%) 0%, 
            hsl(${230 + hueShift * 0.5}, 70%, 12%) 40%, 
            hsl(${200 + hueShift}, 80%, 10%) 100%)`,
        }}
      />
      {/* Floating circles */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = interpolate(frame, [0, 750], [100 + i * 350, 200 + i * 300]);
        const y = interpolate(
          frame,
          [0, 375, 750],
          [150 + i * 180, 100 + i * 200, 150 + i * 180]
        );
        const opacity = 0.04 + i * 0.01;
        const size = 200 + i * 80;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsl(215, 85%, 50%, ${opacity}), transparent)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
