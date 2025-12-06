import apiClient from "../config/apiClient.js";

export const fetchNewsFromAPI = async (category = "general") => {
  try {
    const response = await apiClient.get("/top-headlines", {
      params: {
        country: "us",
        category,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    return response.data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return [];
  }
};
