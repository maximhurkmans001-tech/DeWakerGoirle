import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Bouwt alleen het besloten bewonersgedeelte (portaal.html + src/).
// De uitvoer gaat naar .portaal-build en wordt door scripts/build.js
// samengevoegd tot private/portaal.html. Dat bestand levert de server
// pas na een geldige inlog; het komt nooit in de openbare map dist.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: ".portaal-build",
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: { input: "portaal.html" },
  },
  server: { open: "/portaal.html" },
});
