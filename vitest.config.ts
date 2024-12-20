/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    include: [
      'src/**/*.{test.tsx,test.ts}',
      'src/**/*.spec.tsx',
      'src/**/*.spec.ts',
    ],
  },
});
