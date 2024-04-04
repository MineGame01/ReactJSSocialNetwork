import axios from "axios";

const defaultConfig = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/security/',
    withCredentials: true,
    headers: {
        "API-KEY": "1f84f6e8-b356-4dde-b9c0-fd88b14d48cd"
    },
})

export const SecurityAPI = {
    getImgCaptcha() {
        return defaultConfig.get(`get-captcha-url`)
            .then(response => response.data)
    }
}