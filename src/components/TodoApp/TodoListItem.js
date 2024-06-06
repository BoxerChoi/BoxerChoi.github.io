import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../../css/todoApp/TodoListItem.scss';

// 할 일 항목에 대한 정보를 보여주는 컴포넌트, todo객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 제공
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

/*
컴포넌트 최적화 Tip.
아래 React.memo라는 함수를 이용하여
컴포넌트의 props가 바뀌지 않았다면 리렌더링하지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있다.
-> todo, onRemove, onToggle이 바뀌지 않으면 리렌더링을 하지 않음.
*/

export default React.memo(TodoListItem);
