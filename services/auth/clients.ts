import axios from "axios";

export const api = axios.create({
    baseURL: "https://example.com", // vamos alterar isso
    timeout: 15000
})

let isRefreshing = false;
let pendingQueue: Array<(token: string | null) => void> = [];

function onRefreshed(token: string | null) {
    pendingQueue.forEach(cb => cb(token));
    pendingQueue = [];
}

api.interceptors.request.use