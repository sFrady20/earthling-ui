import { defineConfig, presetUno } from "unocss";
import { presetZabukit } from "@zabukit/web";

export default defineConfig({
  presets: [presetUno(), presetZabukit()],
  content: {
    filesystem: ["node_modules/@zabukit/web/**/*.{ts,tsx}"],
  },
});
