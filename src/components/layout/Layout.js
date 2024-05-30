import React, { useState } from 'react';
import Header from './Header';
// import Body from './Body';
import Left from './Left';

import TodoApp from '../../app/TodoApp';
import NewsApp from '../../app/NewsApp';

import '../../css/Layout/Layout.scss';

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
      <div className="main-content">
        <div className="body">{content}</div>
        <Left setSelectedMenu={setSelectedMenu} />
      </div>
    </div>
  );
};

export default Layout;
