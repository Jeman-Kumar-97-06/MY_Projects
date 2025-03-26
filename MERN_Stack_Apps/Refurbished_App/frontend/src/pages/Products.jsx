import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "iPhone 12", price: "$599", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Samsung Galaxy S21", price: "$499", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Google Pixel 6", price: "$449", image: "https://via.placeholder.com/150" },
  { id: 4, name: "OnePlus 9", price: "$399", image: "https://via.placeholder.com/150" },
];

export default function AllProducts() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">All Products</h2>
      <div className="max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 w-full">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
