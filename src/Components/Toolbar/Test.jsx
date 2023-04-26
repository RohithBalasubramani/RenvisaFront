// import React, { useState } from 'react';
// import { Slider } from '@mui/material';


// const products = [
//   { id: 1, name: 'Product 1', brand: 'Brand 1', price: 10 },
//   { id: 2, name: 'Product 2', brand: 'Brand 2', price: 20 },
//   { id: 3, name: 'Product 3', brand: 'Brand 1', price: 30 },
//   { id: 4, name: 'Product 4', brand: 'Brand 2', price: 40 },
//   { id: 5, name: 'Product 5', brand: 'Brand 3', price: 50 },
// ];

// function Test() {
//   const [brandFilter, setBrandFilter] = useState('');
//   const [priceFilter, setPriceFilter] = useState([0, 50]);

//   const handleBrandChange = (event) => {
//     setBrandFilter(event.target.value);
//   };

//   const handlePriceChange = (event,newValue) => {
//     setPriceFilter(newValue);
//   };

//   const filteredProducts = products.filter((product) => {
//     return (
//       product.brand.toLowerCase().includes(brandFilter.toLowerCase()) &&
//       product.price >= priceFilter[0] &&
//       product.price <= priceFilter[1]
//     );
//   });

//   return (
//     <div>
//       <div>
//         <label htmlFor="brand-filter">Brand:</label>
//         <input type="text" id="brand-filter" value={brandFilter} onChange={handleBrandChange} />
//       </div>
//       <div>
//         <label htmlFor="price-filter">Price:</label>


//         <Slider
//         getAriaLabel={() => 'Temperature range'}
//         value={priceFilter}
//         onChange={handlePriceChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={priceFilter}
//       />



//         {/* <input
//           type="range"
//           id="price-filter"
//           name="min"
//           min="0"
//           max="50"
//           value={priceFilter.min}
//           onChange={handlePriceChange}
//         /> */}
//         <span>{priceFilter[0]}</span>
//         <span>to</span>
//         <span>{priceFilter[1]}</span>
//         {/* <input
//           type="range"
//           id="price-filter"
//           name="max"
//           min="0"
//           max="50"
//           value={priceFilter.max}
//           onChange={handlePriceChange}
//         /> */}
//       </div>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.brand} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Test;

import React, { useState } from 'react';
import { Slider } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', brand: 'Brand 1', price: 10 },
  { id: 2, name: 'Product 2', brand: 'Brand 2', price: 20 },
  { id: 3, name: 'Product 3', brand: 'Brand 1', price: 30 },
  { id: 4, name: 'Product 4', brand: 'Brand 2', price: 40 },
  { id: 5, name: 'Product 5', brand: 'Brand 3', price: 50 },
];

function Test() {
  const [brandFilters, setBrandFilters] = useState({
    brand1: false,
    brand2: false,
    brand3: false,
  });
  const [priceFilter, setPriceFilter] = useState([0, 50]);

  const handleBrandChange = (event) => {
    setBrandFilters({
      ...brandFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePriceChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (brandFilters.brand1 && product.brand === 'Brand 1') ||
      (brandFilters.brand2 && product.brand === 'Brand 2') ||
      (brandFilters.brand3 && product.brand === 'Brand 3')
    ) && product.price >= priceFilter[0] && product.price <= priceFilter[1];
  });

  return (
    <div>
      <div>
        <label htmlFor="brand-filter">Brand:</label>
        <div>
          <label htmlFor="brand1">
            <input
              type="checkbox"
              id="brand1"
              name="brand1"
              checked={brandFilters.brand1}
              onChange={handleBrandChange}
            />
            Brand 1
          </label>
          <label htmlFor="brand2">
            <input
              type="checkbox"
              id="brand2"
              name="brand2"
              checked={brandFilters.brand2}
              onChange={handleBrandChange}
            />
            Brand 2
          </label>
          <label htmlFor="brand3">
            <input
              type="checkbox"
              id="brand3"
              name="brand3"
              checked={brandFilters.brand3}
              onChange={handleBrandChange}
            />
            Brand 3
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="price-filter">Price:</label>
        <Slider
          id="price-filter"
          value={priceFilter}
          onChange={handlePriceChange}
          min={0}
          max={50}
          valueLabelDisplay="auto"
        />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.brand} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;