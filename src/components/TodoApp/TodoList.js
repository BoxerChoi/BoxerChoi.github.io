import React from 'react';
import TodoListItem from './TodoListItem';
import '../../css/TodoApp/TodoList.scss';

//todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해 여러개의 TodoListItem 컴포넌트로 변환하여 출력
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
