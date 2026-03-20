import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1. Root ko 'client' set kiya taaki Vite ko index.html mil sake
  root: "client",
  
  server: {
    host: "::",
    port: 8080,
    fs: {
      // Kyunki root 'client' hai, shared folder access karne ke liye '..' allow karna hoga
      allow: [".."],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },

  build: {
    // 2. Output directory ab client folder ke bahar dist mein jayegi
    outDir: "../dist/spa",
    emptyOutDir: true,
    // Agar index.html client ke andar hai, toh entry point apne aap mil jayega
  },

  plugins: [react(), expressPlugin()],

  resolve: {
    alias: {
      // path.resolve hamesha project root (jahan vite.config.ts hai) se calculate hoga
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
