import { useState, useEffect } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {useProductContext} from '../hooks/useProductContext';
import ProductCard from "../components/ProductCard";

const reviews = [
  "Great quality phones! Saved a lot of money.",
  "My refurbished phone works like brand new!", 
  "Best deals on refurbished smartphones. Highly recommend!"
];

export default function HomePage() {
  const [query, setQuery]  = useState("");
  const [results,setResults] = useState([]); 
  const [currentReview, setCurrentReview] = useState(0);
  const {products,dispatch} = useProductContext();

  //Definition of the function that fetches all products : 
  const fetchAllPhones = async () => {
    const resp = await fetch('http://localhost:4000/api/products',)
    const json = await resp.json();
    if (resp.ok) {
      dispatch({type:"SET_PRODS",payload:json});
    }
  };
 
  //fetchAllPhones should run everytime HomePage loads:
  useEffect(()=>{
    fetchAllPhones();
  },[])

  //Review changes every 3 seconds:
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //Dynamic Product Search:
  useEffect(()=>{
    //If the products aren't loaded yet:
    if (!products) {
      // fetchAllPhones();
      console.log("ran this")
      return
    }
    //If the query length is zero
    if (query.length==0){
      setResults([]);
      fetchAllPhones();
      return;
    }
    const reslt = products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase()));
    if (reslt.length == 0) {
      fetchAllPhones();
    }
    dispatch({type:"SET_PRODS",payload:reslt})
    setResults(reslt)
  },[query])


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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute top-2 right-3 text-gray-400" size={20} />
          <ul className="p-3 bg-white">
            {results && results.map((item) => (
              <>
                <li className='hover:bg-blue-100 cursor-pointer' key={item._id}>{item.name}</li>
                <hr></hr>
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Phones with Fade-in Scroll Effect */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products && products.map((phone, index) => (
           <ProductCard phone={phone} index={index} key={index}/>
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
