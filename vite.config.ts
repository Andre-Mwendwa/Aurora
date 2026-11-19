// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     open: true,
//   },
//   build: {
//     target: 'es2022',
//   },
// });
// filename: vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2022',
    sourcemap: false, // flip to true if you want readable production stack traces
    rollupOptions: {
      output: {
        // Separate long-lived library code from our own fast-changing code
        manualChunks: {
          three: ['three'],
          gsap: ['gsap'],
        },
      },
    },
    chunkSizeWarningLimit: 900, // Three.js is large; raise the warning threshold knowingly
  },
});