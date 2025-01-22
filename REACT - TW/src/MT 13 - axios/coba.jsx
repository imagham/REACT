import React, { useState, useEffect } from "react";
import axios from "axios";

function CobaAxios() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      {products.map((product) => (
        <div key={product.id} className="border p-4 mb-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-bold text-green-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CobaAxios;
