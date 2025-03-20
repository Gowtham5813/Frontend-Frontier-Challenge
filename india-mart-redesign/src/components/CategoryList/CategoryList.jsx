import React from 'react';
import './CategoryList.css';

function CategoryList() {
  const categories = ['Electronics', 'Clothing', 'Furniture', 'Health & Beauty', 'Automotive'];

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button key={index} className="category-item">{category}</button>
      ))}
    </div>
  );
}

export default CategoryList;