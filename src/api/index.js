import axios from "axios";

import {
  ADMIN,
  BLOG,
  CATEGORY,
  LOGIN,
  USER,
} from "./api-end-points";
import { ADMIN_TOKEN } from "./localstorage-varibles";

const SERVER_URL = `http://127.0.0.1:8000/api/v1`;
// const SERVER_URL = 'https://www.propertyseller.ae/api/v1';
export const MAIN_IMAG_URL = `${SERVER_URL}/mainImage`;
// const MAIN_IMAG_URL = `${SERVER_URL}/mainImgae/`

// ========ADMIN=LOGIN========//
export const adminLoginAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${ADMIN}/${LOGIN}`, data);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=USER=BY=ID========//
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${USER}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};


// ========ADDING=CATEGORY========//
export const addingCategoryAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${CATEGORY}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=CATEGORY========//
export const getCategoriesAPI = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${CATEGORY}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=CATEGORY=BYID=======//
export const getCategoryByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${CATEGORY}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=CATEGORY========//
export const updateCategoryByIdAPI = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${CATEGORY}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=CATEGORY========//
export const deleteCategoryByIdAPI = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${CATEGORY}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

//


// ========ADDING=BLOG========//
export const addingBlogAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${BLOG}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=BLOGS========//
export const getBlogsAPI = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${BLOG}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=BLOG=BYID=======//
export const getBlogByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${BLOG}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=BLOG========//
export const updateBlogByIdAPI = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${BLOG}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=BLOG========//
export const deleteBlogByIdAPI = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${BLOG}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
