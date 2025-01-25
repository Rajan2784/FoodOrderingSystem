import axios from "axios";

export const API_BASE_URL = "http://localhost:8081/api/v1";

export const uploadFoods = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/foods/upload`, data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    // Log the error for debugging
    console.error("Error uploading foods:", error);
    // Return a more meaningful error message
    return { error: error.response ? error.response.data : error.message };
  }
};
