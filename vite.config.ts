import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { vitePluginCharsetUtf } from './vite_config/vitePluginCharsetUtf';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  plugins: [react(), vitePluginCharsetUtf()],
  resolve: {
    alias: [{
      find: '$',
      replacement: path.resolve('src'),
    }],
  },
});
