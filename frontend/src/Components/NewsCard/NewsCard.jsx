import React from "react";
import "./NewsCard.css";
import formatDate from "../../Utils/FormatDate";

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="news-card">
      <div className="image-container">
        {urlToImage ? (
          <img src={urlToImage} alt={title} />
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>

        <p className="description">
          {description || "No description available."}
        </p>

        <div className="footer">
          <span className="news-date">{formatDate(publishedAt)}</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
