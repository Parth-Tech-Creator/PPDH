import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // The solar system GLB is ~11MB — raise the warning ceiling instead of
    // pretending a 3D hero asset will ever be tiny.
    chunkSizeWarningLimit: 2000,
  },
});
