import React from 'react';
import '../../css/todoApp/TodoTemplate.scss';

//화면을 가운데 정렬시켜주며, 앱 타이틀(일정 관리) 을 보여줍니다. children으로 내부 JSX를 props로 받아 와서 랜더링하는 역할
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To-do List</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
