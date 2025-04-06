import { ShoppingCart} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ProductCard = ({phone,index}) => {

  //Handling 'quantity&add2cart' form data :
  const [quantity,setQuantity] = useState(0);

  const {user} = useAuthContext();

  //When user clicks 'Add to Cart':
  const handleCartSubmit = async (e,ph)=>{
    e.preventDefault();
    const prods = {  };
    prods[ph.name] = quantity;
    console.log(prods);
    const resp  = await fetch('http://localhost:4000/api/carts',{
        method:"POST",
        headers : {'Content-Type':'application/json','Authorization':`Bearer ${user.token}`},
        body:JSON.stringify({prods})
    })
    const json = await resp.json();
  }

    return (
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
              
              {/* Form with 'details', 'quantity shit' and 'cart' button */}
              <form className="flex gap-2 mt-2" onSubmit={e=>handleCartSubmit(e,phone)}>
                <Link to={`/phone/${phone._id}`}  className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 w-full text-center">
                  Details
                </Link>
                <input
                  type="number"
                  placeholder="0"
                  min='0'
                  value={quantity}
                  onChange={e=>{setQuantity(e.target.value)}}
                  className="max-w-45 min-w-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700">
                  <ShoppingCart className="mr-2" size={18} />
                </button>
              </form>

            </div>
          </motion.div>
    )
};

export default ProductCard