import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { BannerVideo } from "./BannerVideo";

export const RemotionRoot = () => (
  <>
    <Composition
      id="main"
      component={MainVideo}
      durationInFrames={750}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="banner"
      component={BannerVideo}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={720}
    />
  </>
);
