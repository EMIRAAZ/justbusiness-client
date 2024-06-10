import axios from "axios";

import {
  ACTIVITY,
  ADMIN,
  BLOG,
  CATEGORY,
  CONTACTUS,
  ENQUIRY,
  INTEREST,
  LOGIN,
  PACKAGE,
  USER,
} from "./api-end-points";
import { ADMIN_TOKEN } from "./localstorage-varibles";

const SERVER_URL = `http://127.0.0.1:8000/api/v1`;
// const SERVER_URL = 'https://www.thedubaithings.com/api/v1';
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


// ========ADDING=PACKAGE========//
export const addingPackageAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${PACKAGE}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=PACKAGE========//
export const getPackagesAPI = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PACKAGE}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=PACKAGE=BYID=======//
export const getPackageByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PACKAGE}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=PACKAGE========//
export const updatePackageAPI = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${PACKAGE}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=PACKAGE========//
export const deletePackageAPI = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${PACKAGE}/${id}`, {
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







// interst registration

// ========ADDING=BLOG========//
export const addingInterestAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${INTEREST}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
export const fetchInterestAPI = async (data) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${INTEREST}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

export const updateInterestAPI = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${INTEREST}/${data.id}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};











// ========ADDING=ACTIVITY========//
export const addingActivity = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${ACTIVITY}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=ACTIVITY========//
export const getActivityAPI = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${ACTIVITY}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=ACTIVITY=BYID=======//
export const getActivityByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${ACTIVITY}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=ACTIVITY========//
export const updateActivityAPI = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${ACTIVITY}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

// ========DELETE=ACTIVITY========//
export const deleteActivityAPI = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${ACTIVITY}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};




// enquiry
// ========VIEW=ENQUIRY========//
export const addingEnquiry = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${ENQUIRY}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ========VIEW=ENQUIRY========//
export const fetchEnquiesAPI = async (data) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${ENQUIRY}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};


// ========CONTACT=US========//
export const contactUsAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${CONTACTUS}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

// ========CONTACT=US========//
export const fetchcontactUsAPI = async (data) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${CONTACTUS}/`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}` },
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};