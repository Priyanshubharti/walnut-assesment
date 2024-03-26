"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const ProductDetail = ({params}) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
  <>
  <Navbar/>
    <div>
      {product ? (
        <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <Image src={product.image} alt={product.title} width={600} height={400} />
            </div>
            <div className="p-8 lg:w-1/2">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-xl font-bold mb-4">${product.price}</p>
              <Link href="/cart" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default ProductDetail;
