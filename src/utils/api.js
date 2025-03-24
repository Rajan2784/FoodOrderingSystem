import axios from "axios";

export const API_BASE_URL = "http://localhost:8081/api/v1";

export const uploadFoods = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/foods/upload`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Log the error for debugging
    console.error("Error uploading foods:", error);
    // Return a more meaningful error message
    return { error: error.response ? error.response.data : error.message };
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response ? error.response.data : error.message };
  }
};

export const getFoods = async() => {
  try {
    const response = await axios.get(`${API_BASE_URL}/foods`);
    return response.data;
  } catch (error) {
    console.log(error);
     return { error: error.response ? error.response.data : error.message };
  }
}

export const orderDetails = async(data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`,data);
  } catch (error) {
    console.log(error)
    return { error: error.response ? error.response.data : error.message };
  }
}