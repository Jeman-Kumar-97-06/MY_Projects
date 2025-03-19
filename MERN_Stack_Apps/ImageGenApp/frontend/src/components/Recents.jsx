import { useState } from 'react';
import {motion} from 'framer-motion'
const Recents = ({txts,ims}) => {
  const [hovered, setHovered] = useState(false);

  const handleDownload = (e,i) => {
    const link = document.createElement("a");
    link.href = i;
    link.download = "downloaded-image.jpg"; // Default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
        <div className="flex gap-4 mt-6 w-full max-w-4xl m-auto flex-col sm:flex-row">
          <div className="flex-1 bg-[#A1E3F9] p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Prompts</h3>
            <ul className="mt-2 space-y-2">
              {txts.map(t=>(
                <li className="p-2 bg-white rouded shadow">{t}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-[#A1E3F9] p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Generated Images</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {
                ims.map(i=>(
                  <div 
                  className="relative overflow-hidden rounded-lg" 
                  onMouseEnter={() => setHovered(true)} 
                  onMouseLeave={() => setHovered(false)}
                >
                  <img src={i} alt="Generated" className="w-40 h-40 object-cover rounded-lg" />
            
                  {hovered && (
                    <motion.a
                      className="absolute bottom-2 right-2 bg-blue-400 cursor-pointer text-black px-2 py-1 rounded-lg shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      href={i}
                      target='_blank'
                    >
                      ⬇
                    </motion.a>
                  )}
                </div>
                ))
              }
            </div>
          </div>
        </div>
    )
}

export default Recents