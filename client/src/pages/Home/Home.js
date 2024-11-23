import React, { useContext } from 'react';
import './Home.css';
import { NewsContext } from '../../context/NewsContext';
import NewsCard from '../../components/NewsCard/Newscard';

const Home = () => {
  const { news, loading, error, category } = useContext(NewsContext);

  return (
    <div className="home-page">
      <h1 className="category-heading">
        {category !== 'All' ? `Category: ${category}` : 'Latest News'}
      </h1>
      {loading && <p className="loading">Loading news...</p>}
      {error && <p className="error">{error}</p>}
      <div className="news-list">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No news available at the moment</p>
        )}
      </div>
    </div>
  );
};

export default Home;
