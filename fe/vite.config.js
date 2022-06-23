import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8319,
        proxy: {
            '/api': {
                target: "http://172.17.0.2:8557",
                // target: "http://127.0.0.1:8557",
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
