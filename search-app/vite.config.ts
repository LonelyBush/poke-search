/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from "@remix-run/node";
import { vercelPreset } from "@vercel/remix/vite";
installGlobals();
export default defineConfig({
  plugins: [remix({ appDirectory: 'src/app', presets: [vercelPreset()] })],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});
