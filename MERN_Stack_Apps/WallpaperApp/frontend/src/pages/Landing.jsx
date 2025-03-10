import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Wallpicks</h1>
        <p className="text-lg text-gray-400 mb-6">Personalize your devices with high-quality wallpapers from our vast collection.</p>
        
      </header>

      {/* Features Section */}
      <section className="text-center py-16 px-6 bg-gray-800 rounded-lg mx-6">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Our App?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Upload Wallpapers</h3>
            <p className="text-gray-300">Upload a variety of high-resolution wallpapers.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Easy to Download</h3>
            <p className="text-gray-300">Save wallpapers with a single click for instant use.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">New Wallpapers Daily</h3>
            <p className="text-gray-300">Fresh wallpapers added every day to customize your smartphone screen.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="text-center py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Start Your Collection Now</h2>
        <Link to='/login' className="bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
          Get Started
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
