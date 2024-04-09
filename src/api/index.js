import {api} from "./instance"


export const login = async (credentials) => {
  try {
    const response = await api.post(`/admin/login/`,credentials)
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during login.';
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/admin/register', userData);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};


// properties----------------
export const addingProperty = async (propertyDatas) => {
    try {
      const response = await api.post('/property/', propertyDatas);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
  };
export const getProperties = async(query)=>{
  try {
    const response = await api.get(`/property?${query}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
export const getPropertiesCounts = async(query)=>{
  try {
    const response = await api.get(`/property/counts`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const getPropertyById = async(id)=>{
  try {
    const response = await api.get(`/property/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const updateProperties = async(data)=>{
  try {
    const response = await api.put('/property/',data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}

export const deleteProperties = async(id)=>{
  try {
    const response = await api.delete(`/property/${id}`,{withCredentials:true},);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
// ---------------------------------------------



// developers----------------
export const addingDeveloper = async (developerDatas) => {
  try {
    const response = await api.post('/developer/', developerDatas);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const getDevelopers = async()=>{
try {
  const response = await api.get('/developer/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const updateDeveloper = async(data)=>{
try {
  const response = await api.put('/developer/',data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const deleteDeveloper = async(id)=>{
  
try {
  const response = await api.delete(`/developer/${id}`);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
// ---------------------------------------------




// cities----------------
export const addingCity = async (data) => {
  try {
    const response = await api.post('/city/', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};

export const addingEnquiry = async (data) => {
  try {
    const response = await api.post('/property/enq', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const getCities = async()=>{
  try {
    const response = await api.get('/city/');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }
  
// adding banner logos----------------
export const addingBannerLogo = async (data) => {
  try {
    const response = await api.post('/banner-logo/', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
// adding clients logos----------------
export const addingClientLogo = async (data) => {
  try {
    const response = await api.post('/client-logo/', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};

export const getBannerLogos = async()=>{
  try {
    const response = await api.get('/banner-logo/');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }


export const getClientLogos = async()=>{
try {
  const response = await api.get('/client-logo/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const updateBannerLogo = async(data)=>{
  try {
    const response = await api.put('/banner-logo/',data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }

  export const updateClientLogo = async(data)=>{
    try {
      const response = await api.put('/client-logo/',data);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }
  
    export const deleteBannerLogo = async(id)=>{
      try {
        const response = await api.delete(`/banner-logo/${id}`,{withCredentials:true},);
        return response.data;
      } catch (error) {
        throw error || 'An error occurred during signup.';
      }
      }

      export const deleteClientLogo = async(id)=>{
        try {
          const response = await api.delete(`/client-logo/${id}`,{withCredentials:true},);
          return response.data;
        } catch (error) {
          throw error || 'An error occurred during signup.';
        }
        }
export const updateCity = async(data)=>{
try {
  const response = await api.put('/city/',data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const deleteCity = async(id)=>{
try {
  const response = await api.delete(`/city/${id}`,{withCredentials:true},);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
// ---------------------------------------------





// blog----------------
export const addingBlog = async (data) => {
  try {
    const response = await api.post('/blog/', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const getBlogs = async()=>{
try {
  const response = await api.get('/blog/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const getBlogById = async(id)=>{
  try {
    const response = await api.get(`/blog/get-one/${id}`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }

export const updateBlog = async(data)=>{
try {
  const response = await api.put('/blog/',data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const deleteBlog = async(id)=>{
try {
  const response = await api.delete(`/blog/${id}`);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
// ---------------------------------------------





// banner----------------
export const addingBanner = async (data) => {
  try {
    const response = await api.post('/banner/', data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
};
export const getBanners = async()=>{
try {
  const response = await api.get('/banner/');
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const updateBanner = async(data)=>{
try {
  const response = await api.put('/banner/',data);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}

export const deleteBanner = async(id)=>{
try {
  const response = await api.delete(`/banner/${id}`,{withCredentials:true},);
  return response.data;
} catch (error) {
  throw error || 'An error occurred during signup.';
}
}
// ---------------------------------------------




// enquiries
export const getEnquiries = async()=>{
  try {
    const response = await api.get(`/property/form`);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }
  // ---------------------------------------------
  
