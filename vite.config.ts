import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // VOEG DIT TOE: Vervang 'mynook' door de exacte naam van je GitHub repo
  base: '/mynook/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});