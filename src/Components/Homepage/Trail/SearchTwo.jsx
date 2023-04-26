import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    navigate(`/product?search=${searchQuery}`);
  }

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  }

  return (
    <div>
      <input type="text" placeholder="Search products..." onChange={handleSearchInputChange} value={searchQuery} />
      <button onClick={handleSearchButtonClick}>Search</button>
    </div>
  );
}

export default SearchPage;
