import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" zorgt dat de gebouwde site (map dist) ook werkt
// als hij in een submap of via GitHub Pages wordt gepubliceerd.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
