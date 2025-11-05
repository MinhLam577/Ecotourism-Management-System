import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { loadEnvTyped } from "./src/utils/env";
export default defineConfig(({ mode }) => {
    const env = loadEnvTyped(mode);
    return {
        define: {
            __API_URL__: JSON.stringify(env.VITE_API_URL),
            __API_APP_PORT__: env.VITE_APP_PORT,
        },
        plugins: [react()],
        server: {
            port: env.VITE_APP_PORT,
        },
    };
});
