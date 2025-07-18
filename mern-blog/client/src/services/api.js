import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

// Posts
export const fetchPosts = () => API.get('/posts');
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (post) => API.post('/posts', post);
export const updatePost = (id, post) => API.put(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Categories
export const fetchCategories = () => API.get('/categories');
export const createCategory = (category) => API.post('/categories', category);