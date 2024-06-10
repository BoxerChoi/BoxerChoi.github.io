import React, { useState } from 'react';
import Header from './Header';
import Left from './Left';
import TodoApp from '../../app/TodoApp';
import NewsApp from '../../app/NewsApp';

import '../../css/layout/Layout.scss';

const Layout = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  let content;
  switch (selectedMenu) {
    case 'TodoApp':
      content = <TodoApp />;
      break;
    case 'NewsApp':
      content = <NewsApp />;
      break;
    case 'home':
    default:
      content = <TodoApp />;
  }

  return (
    <div className="layout">
      <Header />
      <div className="separator"></div>
      <div className="main-content">
        <div className="body">{content}</div>
        <div className="separator-vertical"></div>
        <Left setSelectedMenu={setSelectedMenu} />
      </div>
    </div>
  );
};

export default Layout;
