import React from 'react';
import '../../css/Layout/Left.scss';

const Left = ({ setSelectedMenu }) => {
  return (
    <aside className="left">
      <nav>
        <ul>
          <li>
            <button onClick={() => setSelectedMenu('NewsApp')}>News</button>
          </li>
          <li>
            <button onClick={() => setSelectedMenu('TodoApp')}>
              To-do List
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Left;
