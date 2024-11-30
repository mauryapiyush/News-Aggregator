import React, { createContext, useState, useEffect } from 'react';
import newsAPI from '../services/newsAPI';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (selectedCategory) => {
    setLoading(true);
    setError(null);
    try {
      const fetchedNews = await newsAPI.fetchTopHeadlines(selectedCategory);
      setNews(fetchedNews);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
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

export { NewsProvider, NewsContext };
