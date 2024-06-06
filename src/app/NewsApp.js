import React, { useState } from 'react';
import axios from 'axios';

import '../css/newsApp/NewsTemplate.scss';

const NewsApp = () => {
  //Git Secret에 API KEY 를 별도 설정
  const apiKey = process.env.REACT_NEWS_API_KEY;
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=afe9d93ce6bb82c581557b433f3af34a`,
      );
      setData(response.data);
    } catch (e) {
      // console.log('apiKey : ' + apiKey);
      console.log(e);
    }
  };

  return (
    <div className="body">
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default NewsApp;
