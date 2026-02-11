import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Voor een eigen domein (mynookapp.com) gebruiken we altijd de root '/'
  base: '/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});