// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { minify } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    minify(), // el plugin para minificar HTML
  ],
  build: {
    minify: 'terser', // Utilizar el minificador Terser para JavaScript
    brotliSize: true, // Habilitar la compresión Brotli para archivos estáticos
  },
});
