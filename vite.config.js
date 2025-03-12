import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/weather-app/",  // ✅ Required for GitHub Pages
});
