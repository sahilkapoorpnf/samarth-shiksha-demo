import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Assessment } from "./scenes/Scene3Assessment";
import { Scene4AIAnalysis } from "./scenes/Scene4AIAnalysis";
import { Scene5Dashboard } from "./scenes/Scene5Dashboard";
import { Scene6CTA } from "./scenes/Scene6CTA";
import { PersistentBackground } from "./components/PersistentBackground";

const T = springTiming({ config: { damping: 200 }, durationInFrames: 20 });

export const MainVideo = () => (
  <AbsoluteFill>
    <PersistentBackground />
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={130}>
        <Scene1Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={T} />
      <TransitionSeries.Sequence durationInFrames={120}>
        <Scene2Problem />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-left" })} timing={T} />
      <TransitionSeries.Sequence durationInFrames={150}>
        <Scene3Assessment />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={T} />
      <TransitionSeries.Sequence durationInFrames={130}>
        <Scene4AIAnalysis />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={T} />
      <TransitionSeries.Sequence durationInFrames={120}>
        <Scene5Dashboard />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={T} />
      <TransitionSeries.Sequence durationInFrames={200}>
        <Scene6CTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
