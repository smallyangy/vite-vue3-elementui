import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
    base: mode == 'development' ? './'
        : (mode == 'staging' ? '//s.baidu.com/staging/xxx' : '//s.baidu.com/release/xxx'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    plugins: [
        // 解决dev环境commonjs无法识别的问题
        // viteCommonjs(),
        vue(),
    ],
    // build: {
    //     commonjsOptions: {
    //         // 解决打包commonjs无法识别的问题
    //         transformMixedEsModules: true,
    //     },
    // },
});
