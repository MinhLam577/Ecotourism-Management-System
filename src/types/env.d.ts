declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_PORT: number;
    readonly VITE_API_URL: string;
    readonly VITE_KEY_STORAGE_ACCOUNT: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {}