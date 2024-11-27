import axios from 'axios';

const request = axios.create({
    baseURL: 'https://localhost:7287/api/',
});

// Thêm interceptor để cập nhật header Authorization với accessToken mỗi khi gửi request
request.interceptors.request.use(
    (config) => {
        // Lấy lại token từ localStorage mỗi lần gửi request
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

//Thêm interceptor để xử lý lỗi 401 (token hết hạn)
request.interceptors.response.use(
    (response) => response, // Xử lý thành công
    async (error) => {
        const originalRequest = error.config;

        // Nếu token hết hạn và chưa làm mới
        const refreshToken = localStorage.getItem('refreshToken');
        if (error.response?.status === 401 && !originalRequest._retry && refreshToken) {
            // Đánh dấu là đã thử gửi lại, nếu còn gặp lỗi thì không gửi nữa
            originalRequest._retry = true;

            try {
                const { data } = await request.post('auth/refresh-token', { token: refreshToken });
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);

                // Cập nhật header Authorization với accessToken mới
                request.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`;

                // Gửi lại request ban đầu với token mới
                return request(originalRequest);
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    },
);

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response;
};

export const post = async (path, data) => {
    const response = await request.post(path, data);
    return response;
};

export const patch = async (path, data) => {
    const response = await request.patch(path, data);
    return response;
};

export const remove = async (path, data) => {
    const response = await request.delete(path, data);
    return response;
};

export default request;
