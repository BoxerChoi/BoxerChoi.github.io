import React from 'react';
import '../../css/newsApp/NewsItem.scss';

const NewsItem = ({ article }) => {
  const { title, description, url, image } = article;
  return (
    <div className="NewsItemBlock" key={article.url}>
      {image && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
