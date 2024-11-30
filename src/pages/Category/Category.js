import React from 'react';
import './Category.css';
import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import NewsCard from '../../components/NewsCard/Newscard';

const Category = () => {
  const { news, loading, error } = useContext(NewsContext);

  return (
    <div className="category-page">
      <h1>News by Category</h1>

      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}

      <div className="news-list">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No news available in this category</p>
        )}
      </div>
    </div>
  );
};

export default Category;
