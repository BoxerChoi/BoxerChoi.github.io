import React, { useState, useCallback } from 'react';
import { IoIosAlarm } from 'react-icons/io';
import '../../css/TodoApp/TodoInsert.scss';

//새로운 항목(할일)을 입력하고 추가할 수 있는 컴포넌트, state를 통해 인풋의 상태를 관리
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value 값 초기화

      // submit  이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 새로고침 방지함수
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="Input your tasks" value={value} onChange={onChange} />
      <button type="submit">
        <IoIosAlarm />
      </button>
    </form>
  );
};

export default TodoInsert;
