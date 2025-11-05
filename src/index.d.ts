export {};

declare global {
    interface ApiResponse<T> {
        status: number | boolean;
        data: T;
        message: string;
    }
}
