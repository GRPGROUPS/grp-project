import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['the-problematic-module-name'], // replace with actual module name from the warning
    },
  },
});
