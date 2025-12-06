import axios from "axios";

// Base URL for your backend API
const API_BASE_URL = "https://news-aggregator-e99n.onrender.com/api";

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
