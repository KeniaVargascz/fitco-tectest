import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.REACT_APP_API_SMCWI_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

Api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.message === "Network Error") {
            console.error("Error, server not found.");
        }
        if (error.response) {
            console.error(`Server error: ${error.response.status}`);
        }
        return Promise.reject(error);
    }
);