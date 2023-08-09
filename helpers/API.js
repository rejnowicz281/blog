import axios from "axios";

const API_URL = "https://blog-api-prod.fly.dev/";

const api = axios.create({
    baseURL: API_URL,
});

export async function getPosts() {
    try {
        const response = await api.get("posts/public");

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPost(id) {
    try {
        const response = await api.get(`posts/public/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPostComments(postId) {
    try {
        const response = await api.get(`posts/${postId}/comments`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function createPostComment(postId, comment) {
    try {
        const response = await api.post(`posts/${postId}/comments`, comment);

        return response;
    } catch (error) {
        return error.response;
    }
}
