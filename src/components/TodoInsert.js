import React from 'react';
import { IoIosAlarm } from 'react-icons/io';
import '../css/TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <IoIosAlarm />
      </button>
    </form>
  );
};

export default TodoInsert;
