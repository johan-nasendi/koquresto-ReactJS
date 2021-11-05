import axios from "axios";

const BASE_API_URL = 'http://localhost:8000/api'

export default {
    // Index Posts
    getAllPost: () => 
    axios.get(`${BASE_API_URL}/posts`),
    // Show Posts


    // Google Login
    getLoginGoogle: () => 
    axios.get(`${BASE_API_URL}/login/google`),

    // Google Github
    getLoginGithub: () => 
    axios.get(`${BASE_API_URL}/login/github`),

    // Google Facebook
    getLoginGithub: () => 
    axios.get(`${BASE_API_URL}/login/facebook`),
}