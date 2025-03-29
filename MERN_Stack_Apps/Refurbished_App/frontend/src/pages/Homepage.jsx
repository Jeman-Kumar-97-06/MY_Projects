import { useState, useEffect } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const reviews = [
  "Great quality phones! Saved a lot of money.",
  "My refurbished phone works like brand new!", 
  "Best deals on refurbished smartphones. Highly recommend!"
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [currentReview, setCurrentReview] = useState(0);
  const [phones,setPhones] = useState([]);

  //fetchAllPhones should run everytime HomePage loads:
  useEffect(()=>{
    const fetchAllPhones = async () => {
      const resp = await fetch('http://localhost:4000/api/products',)
      const json = await resp.json();
      setPhones(json);
    };
    fetchAllPhones();
  },[])

  //Review changes every 3 seconds:
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //When user clicks 'Add to Cart':
  const handleAddtoCart = (ph)=>{
    console.log(ph)
  }

  //Main Shit:
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar/>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <div className="relative w-3/4 max-w-lg">
          <input
            type="text"
            placeholder="Search for a phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute top-2 right-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* Featured Phones with Fade-in Scroll Effect */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {phones && phones.map((phone, index) => (
          <motion.div
            key={phone._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-4 shadow-lg bg-white rounded-lg"
          >
            <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain rounded-md" />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{phone.name}</h3>
              <p className="text-lg text-blue-600 font-bold">₹ {phone.price}</p>
              <div className="flex gap-2 mt-2">
                <Link to={`/phone/${phone._id}`}  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 w-full text-center">
                  Details
                </Link>
                <input
                  type="number"
                  placeholder="0"
                  className="max-w-45 min-w-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700">
                <ShoppingCart className="mr-2" size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reviews Slideshow */}
      <div className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <motion.div
          key={currentReview}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-xl font-medium text-gray-700"
        >
          "{reviews[currentReview]}"
        </motion.div>
      </div>

      {/* Environmental Impact Section */}
      <div className="bg-green-100 py-12 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700">Refurbished Phones Help the Planet</h2>
        <p className="mt-4 text-lg text-gray-800">
          Buying refurbished phones reduces **electronic waste**, saves **energy**, and minimizes the need for new raw materials. By choosing a refurbished phone, you're making a **sustainable choice** for a better future.
        </p>
      </div>
    </div>
  );
}
