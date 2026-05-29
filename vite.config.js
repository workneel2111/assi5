import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // This array tells Vite which plugins to use during development and building
  plugins: [react()],
});
