import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
const LandingPage = () => {
    return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="bg-[#66D2CE] text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl text-black font-bold">ImgGen</h1>
        <p className="text-lg text-black mt-4 mb-5">
          Generate stunning images with AI in seconds!
        </p>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          <Link to='/login' className="mt-10 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg text-black font-bold">
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold text-black">How it works</h2>
        <div className="flex justify-center mt-6 space-x-8">
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="bg-[#E3D2C3] p-6 rounded-lg shadow-2xl cursor-pointer">
            <h3 className="text-xl text-black font-bold">High-Quality Images</h3>
            <p className="text-black">Uses Image Pig API to generate image.</p>
          </motion.div>
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="bg-[#E3D2C3] p-6 rounded-lg shadow-2xl cursor-pointer">
            <h3 className="text-xl font-bold text-black">Save generated images</h3>
            <p className="text-black">Generate images and save/download them.<span className="text-red-500">Login required*</span></p>
          </motion.div>
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="bg-[#E3D2C3] p-6 rounded-lg shadow-2xl cursor-pointer">
            <h3 className="text-xl font-bold text-red-500">Upto 90 Free images</h3>
            <p className="text-black">That's all my free API Key supports!</p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      {/* <section className="text-center py-20">
        <h2 className="text-3xl font-semibold text-black">Try It Now</h2>
        <input
          type="text"
          placeholder="Describe an image..."
          className="mt-4 mr-1 p-3 w-2/3 text-black rounded-lg border-2 border-black bg-white"
        />
        <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-black rounded-lg">
          Generate
        </button>
        <div className="mt-6 text-black">
          <img src="https://via.placeholder.com/400" alt="Generated Image" className="mx-auto rounded-lg"/>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 bottom-0 fixed w-[100vw]">
        <p>© 2025 AI Image Generator | Jeman_06_03</p>
      </footer>
    </motion.div>
    )
};

export default LandingPage;