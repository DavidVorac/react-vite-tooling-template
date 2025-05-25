import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    eslint(),
    tsconfigPaths(),
    // react({
    //   babel: {
    //     plugins: ['styled-components'],
    //     babelrc: false,
    //     configFile: false,
    //   },
    // }),
    // ---- Polyfill Nodejs core modules ----
    // https://www.npmjs.com/package/vite-plugin-node-polyfills
    // nodePolyfills({include: ['crypto', 'stream', 'util']}),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
})
