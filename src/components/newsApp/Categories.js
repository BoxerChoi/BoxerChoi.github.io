import React from 'react';
import classNames from 'classnames';
import '../../css/newsApp/Categories.scss';

const categories = [
  {
    name: 'general',
    text: 'General',
  },
  {
    name: 'world',
    text: 'World',
  },
  {
    name: 'nation',
    text: 'Nation',
  },
  {
    name: 'business',
    text: 'Business',
  },
  {
    name: 'technology',
    text: 'Technology',
  },
  {
    name: 'entertainment',
    text: 'Entertainment',
  },
  {
    name: 'sports',
    text: 'Sports',
  },
  {
    name: 'science',
    text: 'Science',
  },
  {
    name: 'health',
    text: 'Health',
  },
];

const Categories = ({ onSelect, category }) => {
  return (
    <div className="CategoriesBlock">
      {categories.map((c) => (
        <div
          className={classNames('Category', {
            active: c.name === category,
          })}
          key={c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Categories;
