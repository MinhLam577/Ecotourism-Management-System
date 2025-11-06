export {}

declare global {
  interface ApiResponse<T> {
    status: number | boolean
    data: T
    message: string
  }
  interface ImportMetaEnv {
    readonly VITE_APP_PORT: number
    readonly VITE_API_URL: string
    readonly VITE_KEY_STORAGE_ACCOUNT: string
  }
}
