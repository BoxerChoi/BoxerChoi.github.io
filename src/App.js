// import React, { useState, useRef, useCallback } from 'react';
// import TodoTemplate from './components/TodoApp/TodoTemplate';
// import TodoInsert from './components/TodoApp/TodoInsert';
// import TodoList from './components/TodoApp/TodoList';
// import { createBulkTodo } from './components/TodoApp/functionList';

// const App = () => {
//   const [todos, setTodos] = useState(
//     createBulkTodo(),
//     // { id: 1, text: 'text - 1', checked: true },
//     // {
//     //   id: 2,
//     //   text: 'text - 2',
//     //   checked: true,
//     // },
//     // {
//     //   id: 3,
//     //   text: 'text - 3',
//     //   checked: false,
//     // },
//   );

//   //고윳값으로 사용될 id
//   //ref를 사용하여 변수 담기
//   const nextId = useRef(1);
//   const onInsert = useCallback((text) => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false,
//     };
//     /*최적화 Tip. 어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣어준다  ( todos => 추가 )*/
//     setTodos((todos) => todos.concat(todo));
//     nextId.current += 1; //nextId 1씩 ejgkrl
//   }, []);

//   //지우기 기능
//   const onRemove = useCallback((id) => {
//     setTodos((todos) => todos.filter((todo) => todo.id !== id));
//   }, []);

//   //수정 기능
//   const onToggle = useCallback((id) => {
//     setTodos((todos) =>
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//       ),
//     );
//   }, []);

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

// export default App;

import React from 'react';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
