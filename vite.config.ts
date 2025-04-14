import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'mfe1',
      exposes: {
        './button': './src/components/button',
      }
    }),
    react()
  ],
})
