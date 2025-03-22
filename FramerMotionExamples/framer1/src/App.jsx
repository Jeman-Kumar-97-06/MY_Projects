import {motion} from 'framer-motion';
const listVariants = {
  hidden : {opacity:0, y:10},
  visible : {opacity:1, y:0, transition : {delay : 3}}
}
function App() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}  // Start with opacity 0
        animate={{ opacity: 1 }}  // Animate to opacity 1
        transition={{ duration: 1 }}  // Animation lasts 1 second
        className="w-32 h-32 bg-blue-500 m-4"
      >
        <p>Hi World!</p>
      </motion.div>

      <motion.div 
        whileHover={{scale:1.1}}
        whiteTap={{scale:0.9}}
        className='px-4 py-2 bg-green-500 text-white rounded w-[150px]'
      >
        <p>Hellow</p>
      </motion.div>

      <motion.ul
        initial='hidden'
        animate='visible'
        className='space-y-2'
      >
        {[...Array(3)].map((_,i)=>(
          <motion.li
            key={i}
            variants={listVariants}
            className='p-2 bg-gray-200 rounded'
          >
            Item{i+1}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        drag
        className='w-24 h-24 bg-red-500 flex items-center justify-center rounded-lg cursor-grab'
      >
        <p>Drag me</p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl">Welcome to the Page</h1>
    </motion.div>
    <motion.div
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
/>
    </>
  )
}

export default App
