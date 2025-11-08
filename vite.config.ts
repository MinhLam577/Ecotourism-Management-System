import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { loadEnvTyped } from './src/utils/env.utils'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(({ mode }) => {
  const env = loadEnvTyped(mode)
  return {
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
      __API_APP_PORT__: env.VITE_APP_PORT,
      __KEY_STORAGE_ACCOUNT__: JSON.stringify(env.VITE_KEY_STORAGE_ACCOUNT),
      __BASE_PX_SIZE__: 10
    },
    plugins: [react(), tailwindcss()],
    server: {
      port: env.VITE_APP_PORT
    },
    resolve: {
      alias: [{ find: '~', replacement: '/src' }]
    }
  }
})
