import { useState } from "react";
import { ShoppingCart, CheckCircle } from "lucide-react";

const phones = [
  { id: 1, name: "iPhone 12", price: "$499", image: "https://images-cdn.ubuy.co.in/66292c9d2df83775d679582f-pre-owned-apple-iphone-12-carrier.jpg" },
  { id: 2, name: "Samsung Galaxy S21", price: "$399", image: "https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg" },
  { id: 3, name: "Google Pixel 6", price: "$349", image: "https://5.imimg.com/data5/IOS/Default/2022/10/YA/JP/DH/43819962/product-jpeg-500x500.png" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold pRPhones">Premium Refurbished Phones</h1>
        <p className="mt-4 text-lg">High-quality, certified refurbished phones at unbeatable prices.</p>
        <a href="#shop" className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Shop Now</a>
      </div>

      {/* Featured Phones */}
      <div id="shop" className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Best Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {phones.map((phone) => (
            <div key={phone.id} className="p-4 shadow-lg bg-white rounded-lg">
              <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain rounded-md" />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">{phone.name}</h3>
                <p className="text-lg text-blue-600 font-bold">{phone.price}</p>
                <button className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">
                  <ShoppingCart className="mr-2" size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500" size={24} />
            <span>Certified Quality Assurance</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500" size={24} />
            <span>1-Year Warranty</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-500" size={24} />
            <span>Best Price Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
