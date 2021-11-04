import { ConfigEnv, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  if (command === 'serve') {
    return {
      root: './examples',
      server: {
        port: 9001,
        open: true,
      },
      plugins: [vue(), vueJsx()],
    };
  }
  if (command === 'build') {
    return {
      build: {
        outDir: 'lib',
        lib: {
          entry: './packages',
          name: 'index',
          formats: ['es', 'umd'],
        },
        sourcemap: true,
        rollupOptions: {
          output: {
            globals: { vue: 'Vue' },
          },
          plugins: [typescript()],
          external: ['vue'],
        },
      },
      plugins: [vue(), vueJsx()],
    };
  }
  return {};
};
