import React, { useState } from 'react';
import './SearchBar.css';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} class='search-one'>Search</button>
    </div>
  );
}

export default SearchBar;