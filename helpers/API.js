import axios from "axios";

export async function getPosts() {
    try {
        const response = await axios.get("http://localhost:3000/posts/public");

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPost(id) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPostComments(postId) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${postId}/comments`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function createPostComment(postId, comment) {
    try {
        const response = await axios.post(`http://localhost:3000/posts/${postId}/comments`, comment);
        return response.data;
    } catch (error) {
        return error.response;
    }
}
