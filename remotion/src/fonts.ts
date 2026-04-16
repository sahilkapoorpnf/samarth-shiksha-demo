import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const poppins = loadPoppins("normal", {
  weights: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = loadInter("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const HEADING_FONT = poppins.fontFamily;
export const BODY_FONT = inter.fontFamily;

export const textShadow = "0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)";
export const subtleShadow = "0 1px 10px rgba(0,0,0,0.5)";
