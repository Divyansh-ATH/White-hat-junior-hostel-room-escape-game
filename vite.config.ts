import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const standalone = mode === 'standalone';
  return {
    base: './',
    build: {
      outDir: standalone ? 'dist-standalone' : 'dist',
      assetsInlineLimit: standalone ? () => true : 4096,
      modulePreload: !standalone,
      // The offline file embeds the engine and art in the same bundle.
      chunkSizeWarningLimit: standalone ? 1500 : 600,
      rollupOptions: standalone ? undefined : {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/three/')) return 'three';
          },
        },
      },
    },
  };
});
