import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

// Assuming 'productsData' is the array containing your product objects

// Create a mapping of categories to products

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get("https://renvisa.org/product/");
      setData(response.data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  fetchData();
}, []);

const categoryMapping = productsData.reduce((map, product) => {
  const { category, name } = product;

  if (!map.has(category)) {
    map.set(category, []);
  }

  map.get(category).push({ name, url: `/products/${product._id}` });

  return map;
}, new Map());

// Transform the categoryMapping into the desired format
const transformedData = Array.from(categoryMapping.entries()).map(
  ([category, products]) => ({
    name: category,
    submenu: products.map((product) => ({
      name: product.name,
      submenuTwo: product.prospecs.map((spec) => ({
        name: spec.label,
        url: `/products/${product._id}/${spec.id}`,
      })),
    })),
  })
);

// Now 'transformedData' contains the data in the desired format
console.log(transformedData);

const DataExample = () => {
  return transformedData;
};

export default DataExample;
