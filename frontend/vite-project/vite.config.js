import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: true, // 👈 allows external access when testing on network/server
    allowedHosts: [
      "naridevelopment.org",
      "www.naridevelopment.org", // 👈 include www for safety
      "localhost",
    ],
  },
  plugins: [tailwindcss()],
});
