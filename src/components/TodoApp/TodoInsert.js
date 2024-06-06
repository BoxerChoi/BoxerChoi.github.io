import React, { useState, useCallback, useContext } from 'react';
import { IoIosAlarm } from 'react-icons/io';
import '../../css/todoApp/TodoInsert.scss';

import AlertContext from '../util/AlertContext';

//새로운 항목(할일)을 입력하고 추가할 수 있는 컴포넌트, state를 통해 인풋의 상태를 관리
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const { handleShowAlert } = useContext(AlertContext);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      //입력값이 없는 경우 Alert
      if (value == '') {
        // alert('Please fill out the task form.');

        //Context를 이용한 커스텀 Alert
        handleShowAlert('Please fill out the task form :) ');
        e.preventDefault();
        return;
      }

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
