import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

const LIBRAY_FILENAME = 'vue3-typewriter';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist/types',
      insertTypesEntry: true,
      include: ['src/install.ts', `src/components/${LIBRAY_FILENAME}.vue`]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/install.ts'),
      name: 'Vue3Typewriter',
      fileName: (format) => `${LIBRAY_FILENAME}.${format}.js`,
      cssFileName: `${LIBRAY_FILENAME}`
    },
    cssMinify: 'lightningcss',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: true
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'es',
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },
    emptyOutDir: true
  },
})
