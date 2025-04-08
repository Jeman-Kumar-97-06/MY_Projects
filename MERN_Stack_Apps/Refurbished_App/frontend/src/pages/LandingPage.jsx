import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CheckCircle } from "lucide-react";
import { useProductContext } from '../hooks/useProductContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const phones = [
  { id: 1, name: "iPhone 12", price: "$499", image: "https://images-cdn.ubuy.co.in/66292c9d2df83775d679582f-pre-owned-apple-iphone-12-carrier.jpg" },
  { id: 2, name: "Samsung Galaxy S21", price: "$399", image: "https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg" },
  { id: 3, name: "Google Pixel 6", price: "$349", image: "https://5.imimg.com/data5/IOS/Default/2022/10/YA/JP/DH/43819962/product-jpeg-500x500.png" },
];

export default function LandingPage() {

  const {products,dispatch} = useProductContext(); 

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


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold pRPhones">Premium Refurbished Phones</h1>
        <p className="mt-4 text-lg">High-quality, certified refurbished phones at unbeatable prices.</p>
        <Link to="/login" className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Shop Now</Link>
      </div>

      {/* Featured Phones */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1} // Adjust for responsive design
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full mt-10 mb-10 p-2"
      >
        {products && products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="p-4 bg-white rounded-lg shadow-lg text-center mb-3">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded" />
              <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Benefits Section */}
      <div className="bg-gray-200 py-12 text-center bottom-0 relative">
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
