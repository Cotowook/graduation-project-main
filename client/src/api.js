import axios from "axios";

const API_URL = "http://localhost:8080";
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const signup = async (formData) => {
  try {
    const response = await api.post("/members/new", formData);
    return response.data;
  } catch (error) {
    throw new Error("회원가입에 실패하였습니다.");
  }
};
export const login = async (credentials) => {
  try {
    const response = await api.post("/members/login", credentials);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패하였습니다.");
  }
};

const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const saveItem = async (itemData) => {
  return axios.post('/item/new', itemData);
};
export const updateItem = async (itemId, itemData) => {
  return axios.post(`/admin/item/${itemId}`, itemData);
};



