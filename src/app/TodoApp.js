import React, { useState, useRef, useCallback, useEffect } from 'react';
import TodoTemplate from '../components/todoApp/TodoTemplate';
import TodoInsert from '../components/todoApp/TodoInsert';
import TodoList from '../components/todoApp/TodoList';
import { AlertProvider } from '../components/util/AlertContext'; //Custom Alert를 Context를 활용하여 TodoApp에서 사용
import CustomAlert from '../components/util/CustomAlert';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  //데이터 불러오기
  //useEffect의 두 번째 인자로 빈 배열 []을 전달하면 컴포넌트가 처음 마운트될 때만 해당 로직이 실행
  const nextId = useRef(1);
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const todo = {
        id: localStorage.key(i),
        text: JSON.parse(localStorage.getItem(localStorage.key(i))),
        checked: false,
      };

      //nextId 순서 확인
      if (parseFloat(todo.id) > nextId.current) {
        nextId.current = parseFloat(todo.id);
      }

      // todos.concat (ArrayMap, .sort 사용하여 입력순서 유지)
      setTodos((todos) => todos.concat(todo).sort((a, b) => a.id - b.id));
    }
  }, []);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  //const nextId = useRef(1);
  const onInsert = useCallback((text) => {
    if (localStorage.length > 0) {
      nextId.current += 1; //nextId +1
    }
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    /*최적화 Tip. 어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣어준다  ( todos => 추가 )*/
    setTodos((todos) => todos.concat(todo));

    //localStorage 데이터 저장
    localStorage.setItem(todo.id, JSON.stringify(todo.text));
  }, []);

  //지우기 기능
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

    //localStorage 데이터 삭제
    localStorage.removeItem(id);
  }, []);

  //토글 기능
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  /*최적화 Tip. 어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣어준다  ( todos => 추가 )*/
  return (
    <TodoTemplate>
      <AlertProvider>
        <CustomAlert />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </AlertProvider>
    </TodoTemplate>
  );
};

export default TodoApp;
