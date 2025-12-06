import axios from "axios";

// Base URL for your backend (change when deploying)
const API_BASE_URL = "http://localhost:5000/api";

const fetchTopHeadlines = async (category = "general") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`, {
      params: { category },
    });

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

const newsAPI = { fetchTopHeadlines };

export default newsAPI;
