// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// import secureLocalStorage from "react-secure-storage";
// import { keyStorageAccount } from "../constants/index";
// import { jwtDecode } from "jwt-decode";
// import endpoints from "./endpoints";
// import { LoginResponse } from "src/types/userLogin.type";
// import { AccountObservable } from "src/stores/account.store";
// import { BACKEND_BASE } from "src/config/api.config";
// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];
// const subscribeTokenRefresh = (cb: (token: string) => void) => {
//     refreshSubscribers.push(cb);
// };

// const onRefreshed = (token: string) => {
//     refreshSubscribers.forEach((cb) => cb(token));
//     refreshSubscribers = [];
// };

// const isTokenExpired = (token: string) => {
//     try {
//         const decoded = jwtDecode(token);
//         const currentTime = Math.floor(Date.now() / 1000);
//         return decoded?.exp && decoded?.exp < currentTime + 30; // còn < 30s coi như sắp hết hạn
//     } catch {
//         return true;
//     }
// };

// const apiClient = axios.create({
//     baseURL: BACKEND_BASE,
//     timeout: 30000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });
// apiClient.interceptors.request.use(
//     async (config) => {
//         // ✅ Bỏ qua nếu là endpoint public
//         if (
//             config.url?.includes(endpoints.authAdmin.login) ||
//             config.url?.includes(endpoints.authAdmin.register) ||
//             config.url?.includes(endpoints.authAdmin.forgotPassword)
//         ) {
//             return config;
//         }
//         const accountObservable = new AccountObservable();

//         const account =
//             (await (accountObservable.getAccount() as any)) as LoginResponse | null;

//         // ✅ Nếu chưa đăng nhập => không thêm Authorization, nhưng KHÔNG reject
//         if (!account?.access_token) {
//             return config;
//         }

//         // Nếu token sắp hết hạn, refresh trước khi gửi request
//         if (isTokenExpired(account.access_token)) {
//             if (!isRefreshing) {
//                 isRefreshing = true;
//                 try {
//                     const newToken = await refreshToken();
//                     if (newToken) {
//                         apiClient.defaults.headers.Authorization = `Bearer ${newToken}`;
//                         onRefreshed(newToken);
//                     } else {
//                         checkLogout();
//                     }
//                 } catch (err) {
//                     checkLogout();
//                 } finally {
//                     isRefreshing = false;
//                 }
//             }
//         }

//         // ✅ Nếu có token, thêm vào header
//         config.headers.Authorization = `Bearer ${account.access_token}`;
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

// const handleSuccess = async <T>(response: AxiosResponse<T>): Promise<T> => {
//     return response.data;
// };

// const handleError = async (error: AxiosError<any>): Promise<any> => {
//     const respData = error.response?.data;
//     const respStatus = error.response?.status ?? -1;
//     const originalRequest = error.config as AxiosRequestConfig & {
//         _retry?: boolean;
//     };

//     switch (respStatus) {
//         case 400:
//             return Promise.reject(respData);
//         case 401:
//         case 403:
//             return handleError401(originalRequest, error);
//         case 404:
//             return Promise.reject(respData);
//         default:
//             return Promise.reject(respData || error);
//     }
// };

// const handleError401 = async (
//     originalRequest: AxiosRequestConfig & { _retry?: boolean },
//     error: AxiosError
// ): Promise<any> => {
//     if (
//         originalRequest._retry ||
//         originalRequest.url?.includes(endpoints.authAdmin.login) ||
//         originalRequest.url?.includes(endpoints.authAdmin.refreshToken) ||
//         originalRequest.url?.includes(endpoints.authAdmin.forgotPassword) ||
//         originalRequest.url?.includes(endpoints.authAdmin.register)
//     ) {
//         return Promise.reject(error);
//     }

//     if (isRefreshing) {
//         return new Promise((resolve) => {
//             subscribeTokenRefresh((token: string) => {
//                 if (!originalRequest.headers) originalRequest.headers = {};
//                 originalRequest.headers["Authorization"] = `Bearer ${token}`;
//                 resolve(apiClient(originalRequest));
//             });
//         });
//     }

//     originalRequest._retry = true;
//     isRefreshing = true;

//     try {
//         const newAccessToken = await refreshToken();
//         if (!newAccessToken) {
//             return Promise.reject(error);
//         }
//         apiClient.defaults.headers.common[
//             "Authorization"
//         ] = `Bearer ${newAccessToken}`;
//         if (!originalRequest.headers) originalRequest.headers = {};
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//         onRefreshed(newAccessToken);
//         isRefreshing = false;
//         return apiClient(originalRequest);
//     } catch (err) {
//         console.log("🔥 [401] Lỗi khi refresh token:", err);
//         return Promise.reject(err);
//     }
// };

// const refreshToken = async () => {
//     try {
//         const accountObservable = new AccountObservable();
//         const account =
//             (await (accountObservable.getAccount() as any)) as LoginResponse | null;

//         if (!account?.refresh_token || isTokenExpired(account.refresh_token)) {
//             checkLogout();
//             return null;
//         }

//         // get api
//         const { data } = await apiClient.get(endpoints.authAdmin.refreshToken, {
//             headers: {
//                 Authorization: `Bearer ${account.refresh_token}`,
//             },
//         });

//         const newAccessToken = data?.access_token;
//         // Kiểm tra nếu token không tồn tại thì sẽ chuyển về màn hình login
//         if (!newAccessToken) {
//             console.error("No access token in refresh response:", data);
//             checkLogout();
//             throw new Error(
//                 "Failed to refresh token: No access token provided"
//             );
//         }
//         // lưu access token mới vào local storage
//         const updateNewToken: LoginResponse = {
//             ...account,
//             access_token: newAccessToken,
//         };

//         await accountObservable.setAccount(updateNewToken);
//         return newAccessToken;
//     } catch (e) {
//         console.error("Refresh token error:", e);
//         checkLogout();
//         return null;
//     }
// };
// apiClient.interceptors.response.use(handleSuccess, handleError);
// const checkLogout = async () => {
//     await secureLocalStorage.removeItem(keyStorageAccount);
//     if (window.location.pathname !== "/login") window.location.href = "/login";
// };
