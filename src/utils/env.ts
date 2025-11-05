import { loadEnv } from "vite";
// import type { ImportMetaEnv } from "../vite-env";

export function loadEnvTyped(mode: string): ImportMetaEnv {
    const env = loadEnv(mode, process.cwd(), "");
    return env as unknown as ImportMetaEnv;
}
