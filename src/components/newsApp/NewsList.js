import React, { useState, useEffect } from 'react';
import '../../css/newsApp/NewsList.scss';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === '' ? 'general' : `&category=${category}`;
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?lang=en&country=us${query}&apikey=afe9d93ce6bb82c581557b433f3af34a`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <div className="NewsListBlock">Loading... </div>;
  }

  if (!articles) {
    return (
      <div className="NewsListBlock">
        This host server has reached API request limit for today :(
      </div>
    );
  }

  return (
    <div className="NewsListBlock">
      {articles.map((article) => (
        <NewsItem Key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
