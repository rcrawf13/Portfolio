import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100,
      awaitWriteFinish: {
        stabilityThreshold: 200,
        pollInterval: 100
      }
    }
  },
  logLevel: 'info', // Show more detail in terminal
});
