import { fetchNewsFromAPI } from "../services/newsService.js";

export const getNews = async (req, res) => {
  try {
    const category = req.query.category || "general";

    const articles = await fetchNewsFromAPI(category);

    return res.json({ articles });
  } catch (err) {
    console.error("Error in newsController:", err.message);
    return res.status(500).json({
      error: "Failed to fetch news from API.",
    });
  }
};
