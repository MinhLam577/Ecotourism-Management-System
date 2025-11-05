export {};
declare global {
    interface ImportMetaEnv {
        readonly VITE_APP_PORT: number;
        readonly VITE_API_URL: string;
    }
}
