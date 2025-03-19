import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="w-16 h-16 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default LoadingScreen;