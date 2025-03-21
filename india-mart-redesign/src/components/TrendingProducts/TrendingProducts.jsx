import React from 'react';
import './TrendingProducts.css';

function TrendingProducts() {
  const products = [
    { "name": "Smartphone", "price": "₹15,000", "category": "Electronics" },
    { "name": "Laptop", "price": "₹45,000", "category": "Electronics" },
    { "name": "Refrigerator", "price": "₹30,000", "category": "Electronics" },
    { "name": "LED TV", "price": "₹40,000", "category": "Electronics" },
    { "name": "Bluetooth Speaker", "price": "₹2,500", "category": "Electronics" },
    { "name": "Wireless Earbuds", "price": "₹1,800", "category": "Electronics" },
    { "name": "Men's T-Shirt", "price": "₹700", "category": "Clothing" },
    { "name": "Women's Dress", "price": "₹1,200", "category": "Clothing" },
    { "name": "Leather Jacket", "price": "₹4,500", "category": "Clothing" },
    { "name": "Formal Shoes", "price": "₹3,000", "category": "Clothing" },
    { "name": "Sofa Set", "price": "₹20,000", "category": "Furniture" },
    { "name": "Dining Table", "price": "₹18,000", "category": "Furniture" },
    { "name": "Queen Bed", "price": "₹25,000", "category": "Furniture" },
    { "name": "Office Chair", "price": "₹3,500", "category": "Furniture" },
    { "name": "Face Cream", "price": "₹500", "category": "Health & Beauty" },
    { "name": "Shampoo", "price": "₹300", "category": "Health & Beauty" },
    { "name": "Body Lotion", "price": "₹400", "category": "Health & Beauty" },
    { "name": "Lipstick", "price": "₹600", "category": "Health & Beauty" },
    { "name": "Car Tyres", "price": "₹18,000", "category": "Automotive" },
    { "name": "Engine Oil", "price": "₹2,000", "category": "Automotive" },
    { "name": "Car Battery", "price": "₹5,000", "category": "Automotive" },
    { "name": "Bike Helmet", "price": "₹1,500", "category": "Automotive" },
    { "name": "Gaming Console", "price": "₹35,000", "category": "Electronics" },
    { "name": "Washing Machine", "price": "₹28,000", "category": "Electronics" },
    { "name": "Denim Jeans", "price": "₹1,600", "category": "Clothing" },
    { "name": "Sweater", "price": "₹1,400", "category": "Clothing" },
    { "name": "Sports Shoes", "price": "₹2,800", "category": "Clothing" },
    { "name": "Jumpsuit", "price": "₹1,800", "category": "Clothing" },
    { "name": "Bookshelf", "price": "₹7,000", "category": "Furniture" },
    { "name": "Coffee Table", "price": "₹6,000", "category": "Furniture" },
    { "name": "Wardrobe", "price": "₹15,000", "category": "Furniture" },
    { "name": "Nail Polish", "price": "₹200", "category": "Health & Beauty" },
    { "name": "Face Wash", "price": "₹350", "category": "Health & Beauty" },
    { "name": "Sunscreen", "price": "₹700", "category": "Health & Beauty" },
    { "name": "Air Freshener", "price": "₹300", "category": "Automotive" },
    { "name": "Dashboard Camera", "price": "₹6,000", "category": "Automotive" },
    { "name": "Car Stereo", "price": "₹7,500", "category": "Automotive" },
    { "name": "Study Desk", "price": "₹5,000", "category": "Furniture" },
    { "name": "Hoodie", "price": "₹1,600", "category": "Clothing" },
    { "name": "Recliner Chair", "price": "₹12,000", "category": "Furniture" },
    { "name": "TV Stand", "price": "₹8,000", "category": "Furniture" },
    { "name": "Air Conditioner", "price": "₹50,000", "category": "Electronics" },
    { "name": "Electric Shaver", "price": "₹3,000", "category": "Health & Beauty" },
    { "name": "Seat Covers", "price": "₹3,000", "category": "Automotive" },
    { "name": "Motorcycle Gloves", "price": "₹2,200", "category": "Automotive" },
    { "name": "Smartwatch", "price": "₹8,000", "category": "Electronics" },
  { "name": "Bluetooth Keyboard", "price": "₹3,500", "category": "Electronics" },
  { "name": "Yoga Mat", "price": "₹1,200", "category": "Health & Beauty" },
  { "name": "Electric Toothbrush", "price": "₹2,500", "category": "Health & Beauty" },
  { "name": "Men's Suit", "price": "₹5,000", "category": "Clothing" },
  { "name": "Women's Handbag", "price": "₹2,000", "category": "Clothing" },
  { "name": "Bookshelf Speaker", "price": "₹10,000", "category": "Electronics" },
  { "name": "Queen Mattress", "price": "₹15,000", "category": "Furniture" },
  { "name": "Wall Clock", "price": "₹800", "category": "Furniture" },
  { "name": "Recliner Sofa", "price": "₹30,000", "category": "Furniture" }

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