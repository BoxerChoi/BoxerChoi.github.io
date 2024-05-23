import React from 'react';
import '../css/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Coffee break</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
