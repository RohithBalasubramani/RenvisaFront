import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductListTwo = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search') || '';
    setSearchQuery(search);
    filterProducts(search);
  }, [location.search]);

  const filterProducts = (searchQuery) => {
    const filtered = products.filter(product =>
      product.rname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <div>
      <h2>Products</h2>
      <p>Showing results for: {searchQuery}</p>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.rname} - {product.brand}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListTwo;
