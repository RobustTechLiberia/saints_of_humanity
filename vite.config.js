/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages can serve either at repo root (https://USER.github.io/REPO/)
// or at / (user/organization pages). Since you use HashRouter, you mostly
// need Vite's asset URLs to be correct.
export default defineConfig({
  base: process.env.VITE_BASE_URL || "/",

  plugins: [tailwindcss(), react()],
});
