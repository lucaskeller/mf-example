import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import basicSsl from "@vitejs/plugin-basic-ssl";
// import fs from 'fs'


export default defineConfig({
  preview: {
    host: 'localhost',
    port: 4173,
    cors: true
  },
  server: {
    host: 'localhost',
    port: 4173,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: `[name].js`
      }
    }
  },
  plugins: [
    federation({
      name: "dummy",
      filename: 'remoteEntry.js',
      exposes: {
        "./button": "./src/components/button",
      },
    }),
    react(),
    basicSsl(),
  ],
});