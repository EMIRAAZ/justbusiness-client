import axios from "axios";

import {
  ADMIN,
  BANNER,
  BANNER_LOGO,
  BLOG,
  CITY,
  CLIENT_LOGO,
  COUNTS,
  DEVELOPER,
  FORM,
  GET_ONE,
  LOGIN,
  PROPERTY,
  PROPERTY_TYPE,
} from "./api-end-points";
import { ADMIN_TOKEN } from "./localstorage-varibles";

// const SERVER_URL = `http://127.0.0.1:4000/api/v1`;
const SERVER_URL = 'https://www.propertyseller.ae/api/v1';

const options = {
  Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,
};

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


// ========ADDING=PROPERTY========//
export const addingPropertyAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${PROPERTY}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=PROPERTIES========//
export const getProperties = async (query) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PROPERTY}?${query}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=PROPERTIES=COUNTS========//
export const getPropertiesCounts = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${COUNTS}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=PROPERTY=BY=ID========//
export const getPropertyById = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PROPERTY}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=PROPERTY=========//
export const updateProperties = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${PROPERTY}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=PROPERTY=========//
export const deleteProperties = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${PROPERTY}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//

// ========ADDING=DEVELOPER=========//
export const addingDeveloper = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${DEVELOPER}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=DEVELOPERS=========//
export const getDevelopers = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${DEVELOPER}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=DEVELOPERS=========//
export const updateDeveloper = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${DEVELOPER}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=DEVELOPERS=========//
export const deleteDeveloper = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${DEVELOPER}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//

// ========ADDING=CITY=========//
export const addingCity = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${CITY}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========ADDING=ENQUIRY=========//
export const addingEnquiry = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${PROPERTY}/${FORM}`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=CITIES=========//
export const getCities = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${CITY}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========ADDING=BANNER=LOGO========//
export const addingBannerLogo = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${BANNER_LOGO}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========ADDING=CLIENT=LOGO========//
export const addingClientLogo = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${CLIENT_LOGO}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=BANNER=LOGO========//
export const getBannerLogos = async (data) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${BANNER_LOGO}/`, data);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=CLIENT=LOGO========//
export const getClientLogos = async (data) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${CLIENT_LOGO}/`, data);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=BANNER=LOGO========//
export const updateBannerLogo = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${BANNER_LOGO}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=CLIENT=LOGO========//
export const updateClientLogo = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${CLIENT_LOGO}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=BANNER=LOGO========//
export const deleteBannerLogo = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${BANNER_LOGO}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=CLIENT=LOGO========//
export const deleteClientLogo = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${CLIENT_LOGO}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=CITY========//
export const updateCity = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${CITY}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=CITY========//
export const deleteCity = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${CITY}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

// ========ADDING=BLOG========//
export const addingBlog = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${BLOG}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//

// ========GET=BLOGS========//
export const getBlogs = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${BLOG}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=BLOG=BYID=======//
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/${BLOG}/${GET_ONE}/${id}`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=BLOG========//
export const updateBlog = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${BLOG}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=BLOG========//
export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${BLOG}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

// ========ADDING=BANNER========//
export const addingBanner = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${BANNER}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========GET=BANNERS=BYID=======//
export const getBanners = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${BANNER}/`);
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========UPDATE=BANNER========//
export const updateBanner = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${BANNER}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ==========================//
// ========DELETE=BANNER========//
export const deleteBanner = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${BANNER}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};

// ========GET=ENQUIRIES=======//
export const getEnquiries = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PROPERTY}/${FORM}/`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};





// ========ADDING=PROPERTY=TYPE========//
export const addingPropertyTypeAPI = async (data) => {
  try {
    const response = await axios.post(`${SERVER_URL}/${PROPERTY_TYPE}/`, data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ========VIEW=PROPERTY=TYPE========//
export const fetchPropertyTypeAPI = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PROPERTY_TYPE}/`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ========UPDATE=PROPERTY=TYPE========//
export const updatePropertyType = async (data) => {
  try {
    const response = await axios.put(`${SERVER_URL}/${PROPERTY_TYPE}/`,data, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ========DELETE=PROPERTY=TYPE========//
export const deletePropertyType = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/${PROPERTY_TYPE}/${id}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};
// ========FETCH=PROPERTY=COUNT========//
export const fetchPropertyTypeCountAPI = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/${PROPERTY_TYPE}/${COUNTS}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem(ADMIN_TOKEN)}`,},
    });
    return response.data;
  } catch (error) {
    throw error || "An error occurred during login.";
  }
};