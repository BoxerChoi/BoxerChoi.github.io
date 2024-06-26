import React, { useState, useCallback } from 'react';
import NewsList from '../components/newsApp/NewsList';
import Categories from '../components/newsApp/Categories';

const NewsApp = () => {
  const [category, setCategory] = useState('general'); //gnews API의 경우 general이 기본값 (전체 뉴스)
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default NewsApp;
