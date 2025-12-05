import { defineConfig } from 'vite';
import { swc } from 'vitejs/plugin-react-swc';
import path from "path";
import componentTagger from "lovable-tagger";

export default defineConfig(((mode) => {
  return {
    // This line fixes the white screen issue on GitHub Pages
    base: '/electrowalid/', 
    
    server: {
      host: "::",
      port: 8080,
    },
    
    plugins: [
      swc(), 
      mode === "development" && componentTagger().filter(Boolean),
    ],
    
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "./src") },
      ],
    },
  }
}))
