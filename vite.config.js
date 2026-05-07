deployment done"import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages can serve either at repo root (https://USER.github.io/REPO/)
  // or at / (user/organization pages). HashRouter avoids server rewrites,
  // but Vite asset URLs must still match the published base.
  base: process.env.VITE_BASE_URL || "/",
  plugins: [tailwindcss(), react()],
});

export default defineConfig({
  base: "/saints_of_humanity/",
  plugins: [tailwindcss(), react()],
});
