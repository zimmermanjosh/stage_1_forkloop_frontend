import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/stage_1_forkloop_frontend/",
  server: {
    port: 3000,
    host: true, // Allow external connections
    open: !process.env.CI, // Don't open browser in CI
    strictPort: true, // Fail if port is already in use
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
