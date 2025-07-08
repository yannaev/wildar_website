import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                kak_dobavit_3d_model_v_kartochku_tovara: (__dirname, 'tpost/lhkjbinto1-kak-dobavit-3d-model-v-kartochku-tovara.html'),
                kak_viglyadit_funktsiya_prosmotra_3d_modeli: (__dirname, 'tpost/bspguiymh1-kak-viglyadit-funktsiya-prosmotra-3d-mod.html'),
            }
        }
    }
})