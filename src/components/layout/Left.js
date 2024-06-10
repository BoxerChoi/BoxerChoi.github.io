import React from 'react';
import '../../css/layout/Left.scss';

const Left = ({ setSelectedMenu }) => {
  return (
    <aside className="left">
      <nav>
        <ul>
          <li className="leftLi">
            <button
              className="leftButton"
              onClick={() => setSelectedMenu('NewsApp')}
            >
              News
            </button>
          </li>

          <li className="leftLi">
            <button
              className="leftButton"
              onClick={() => setSelectedMenu('TodoApp')}
            >
              To-do
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Left;
