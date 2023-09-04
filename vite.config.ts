import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {vitePluginCharsetUtf} from "./vite_config/vitePluginCharsetUtf";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BTApp/',
  server: {
    port: 3000,
  },
  plugins: [react(), vitePluginCharsetUtf(),],
  resolve: {
    alias: [{
      find: '$',
      replacement: path.resolve('src'),
    }],
  },
});
