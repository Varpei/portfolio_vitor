import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" usa caminhos relativos, o que faz o site funcionar tanto em
// usuario.github.io/repo quanto em domínio próprio sem precisar mexer aqui.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
