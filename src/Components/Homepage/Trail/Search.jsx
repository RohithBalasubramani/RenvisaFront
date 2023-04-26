import { useState } from 'react';

function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.rname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.rname}</a> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;