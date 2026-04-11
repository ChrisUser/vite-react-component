import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
    if (mode === 'docs') {
        return {
            build: { outDir: 'docs' },
            base: '/REPO_NAME/'
        }
    }
    if (mode === 'production') {
        return {
            plugins: [react(), dts({ include: ['lib'] })],
            build: {
                lib: {
                    entry: resolve(__dirname, 'lib/main.ts'),
                    name: 'vite-react-component',
                    fileName: 'main',
                    formats: ['es']
                },
                rollupOptions: {
                    external: ['react', 'react-dom', 'react/jsx-runtime'],
                    output: {
                        globals: {
                            react: 'React',
                            'react-dom': 'ReactDOM',
                            'react/jsx-runtime': 'ReactJsxRuntime'
                        }
                    }
                }
            }
        }
    }
    return {
        plugins: [react()]
    }
})
