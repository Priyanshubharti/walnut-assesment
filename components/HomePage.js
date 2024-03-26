"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSortByTitle = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProducts(sortedProducts);
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <div className="mb-4">
            <button
              onClick={handleSortByTitle}
              className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sort by Title
            </button>
            <button
              onClick={handleSortByPrice}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sort by Price
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <Link href={`/${product.id}`}>
              <div key={product.id} className="border p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <Image src={product.image} width={200} height={200} className=" object-fit " />
                <p className="text-gray-700">${product.price}</p>
              </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
