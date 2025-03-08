import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Discover Stunning Wallpapers</h1>
        <p className="text-lg text-gray-400 mb-6">Personalize your devices with high-quality wallpapers from our vast collection.</p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
          Explore Now
        </button>
      </header>

      {/* Features Section */}
      <section className="text-center py-16 px-6 bg-gray-800 rounded-lg mx-6">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Our App?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">HD & 4K Wallpapers</h3>
            <p className="text-gray-300">Enjoy a variety of high-resolution wallpapers for all devices.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Easy to Download</h3>
            <p className="text-gray-300">Save wallpapers with a single click for instant use.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">New Wallpapers Daily</h3>
            <p className="text-gray-300">Fresh wallpapers added every day to keep your screen unique.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="text-center py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">Start Your Collection Now</h2>
        <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
          Get Started
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
