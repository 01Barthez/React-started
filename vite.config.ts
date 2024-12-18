import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { envs } from './src/core/config/env';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: envs.HOST,
    port: envs.PORT,
  },

  preview: {
    host: envs.HOST,
    port: envs.PORT,
  },
});
