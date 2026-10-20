/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  // Vercel serves the app from the domain root rather than a GitHub Pages subpath.
  base: "/",

  plugins: [react(), tailwindcss(), flowbiteReact()],
});
