import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@components', replacement: '/src/scripts/components' },
      { find: '@interfaces', replacement: '/src/scripts/intefaces' },
      { find: '@views', replacement: '/src/scripts/views' },
    ],
  },
  plugins: [react()],
});
