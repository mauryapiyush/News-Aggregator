import React from 'react';
import './Newscard.css';
import formatDate from '../../utils/formatDate';

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="news-card">
      <div className="image-container">
        {urlToImage ? (
          <img src={urlToImage} alt={title} />
        ) : (
          <div className="placeholder-image">Image Not Available</div>
        )}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p className="description">{description || 'No description available.'}</p>
        <div className="footer">
          <p className="news-date">{formatDate(publishedAt)}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span>Read more</span> <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
