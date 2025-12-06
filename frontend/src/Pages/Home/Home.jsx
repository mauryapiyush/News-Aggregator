import React, { useContext } from "react";
import "./Home.css";
import { NewsContext } from "../../Context/NewsContext";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {
  const { news, loading, error, category } = useContext(NewsContext);

  return (
    <div className="home-page">
      <h1 className="category-heading">
        {category ? `${category.toUpperCase()} NEWS` : "Latest News"}
      </h1>

      {loading && <p className="loading">Loading news...</p>}
      {error && <p className="error">{error}</p>}

      <div className="news-list">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          !loading && <p>No news available right now.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
