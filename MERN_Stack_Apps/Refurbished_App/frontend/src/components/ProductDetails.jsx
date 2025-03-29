import { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 12", price: 599, description: "A powerful smartphone with A14 Bionic chip.", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Samsung Galaxy S21", price: 499, description: "Flagship phone with 120Hz AMOLED display.", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Google Pixel 6", price: 449, description: "Amazing AI-powered camera and pure Android.", image: "https://via.placeholder.com/300" },
  { id: 4, name: "OnePlus 9", price: 399, description: "Fast performance with 65W charging.", image: "https://via.placeholder.com/300" },
];

export default function ProductDetail() {
//   const { id } = useParams();
  const id = 2;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-600 text-2xl">Product not found</h2>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-3xl font-bold text-gray-800 mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <h3 className="text-xl font-semibold text-blue-600 mt-4">Price: ₹{product.price}</h3>
        <button
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}