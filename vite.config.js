import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/weather-app/", // Make sure this matches your repo name with leading/trailing slashes
});
