import { useState } from 'react';

function ProductList({ products, brands }) {
  const [selectedBrand, setSelectedBrand] = useState(null);

  function handleBrandClick(brand) {
    setSelectedBrand(brand);
  }

  const filteredProducts = products.filter(
    (product) => selectedBrand === null || product.brand === selectedBrand
  );

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {brands.map((brand) => (
          <button key={brand.id} onClick={() => handleBrandClick(brand)}>
            {brand.name}
          </button>
        ))}
      </div>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
