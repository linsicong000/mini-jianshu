import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8319,
        proxy: {
            '/api': {
                target: "http://127.0.0.1:8557",
                rewrite: path => {
                    return path.replace(/^\/api/, '')
                }
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins: [vue()]
})
