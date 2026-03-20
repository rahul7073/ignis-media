// import { defineConfig, Plugin } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { createServer } from "./server";

// export default defineConfig(() => ({
//   // ❌ root हटाओ

//   server: {
//     host: "::",
//     port: 8080,
//   },

//   build: {
//     outDir: "dist/spa", // normal रखो
//   },

//   plugins: [react(), expressPlugin()],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./client"),
//       "@shared": path.resolve(__dirname, "./shared"),
//     },
//   },
// }));

// function expressPlugin(): Plugin {
//   return {
//     name: "express-plugin",
//     apply: "serve",
//     configureServer(server) {
//       const app = createServer();
//       server.middlewares.use(app);
//     },
//   };
// }

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "client", // 🔥 important

  build: {
    outDir: "../dist/spa",
    rollupOptions: {
      input: "client/index.html", // 🔥 FORCE ENTRY
    },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});