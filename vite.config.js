import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/movie-database-react-project/",
  build: {
    outDir: "movie-database-react-project",
  },
  plugins: [react()],
});
