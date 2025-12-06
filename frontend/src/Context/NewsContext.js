import React, { createContext, useState, useEffect } from "react";
import newsAPI from "../Services/NewsAPI";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (selectedCategory) => {
    setLoading(true);
    setError(null);

    try {
      const articles = await newsAPI.fetchTopHeadlines(selectedCategory);
      setNews(articles);
    } catch (err) {
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <NewsContext.Provider
      value={{
        news,
        category,
        setCategory,
        loading,
        error,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
