import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frames = [60, 180, 290, 400, 520, 590];
const bundled = await bundle({ entryPoint: path.resolve(__dirname, "../src/index.ts"), webpackOverride: c => c });
const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: { args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] },
  chromeMode: "chrome-for-testing",
});
const composition = await selectComposition({ serveUrl: bundled, id: "banner", puppeteerInstance: browser });
for (const f of frames) {
  await renderStill({ composition, serveUrl: bundled, frame: f, output: `/tmp/b2-${f}.png`, puppeteerInstance: browser });
  console.log(`Frame ${f} done`);
}
await browser.close({ silent: false });
