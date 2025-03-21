import React from 'react';
import './CategoryList.css';

function CategoryList() {
  const categories = ['All','Electronics', 'Clothing', 'Furniture', 'Health & Beauty', 'Automotive','Sports & Outdoors','Books & Stationary','Toys & Games','Groceries','Pet Supplies','Jewelry & Accessories','Baby Products','Musical Instruments','Office Supplies','Travel & Luggage'];

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button key={index} className="category-item">{category}</button>
      ))}
    </div>
  );
}

export default CategoryList;