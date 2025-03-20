import React from 'react';
import './TrendingProducts.css';

function TrendingProducts() {
  const products = [
    { name: 'Smartphone', price: '₹15,000' },
    { name: 'Laptop', price: '₹50,000' },
    { name: 'Headphones', price: '₹2,000' }
  ];

  return (
    <div className="trending-products">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default TrendingProducts;