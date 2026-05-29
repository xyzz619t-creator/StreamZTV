import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [cloudflare()],

  return {
    plugins: [react()],
    base: "./",
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: isDist,
          drop_debugger: isDist,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            settings: ["./src/pages/SettingsPage"],
            movie: ["./src/pages/MoviePage"],
            tv: ["./src/pages/TVPage"],
            downloads: ["./src/pages/DownloadsPage"],
          },
        },
      },
    },
  };
});
