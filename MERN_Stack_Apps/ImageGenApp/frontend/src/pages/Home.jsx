
import Navbar from "../components/Navbar";
import Recents from "../components/Recents";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useGenContext } from "../hooks/useGenContext";
import { motion } from "framer-motion";

const Modal = ({isM,setisM}) => {

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative bg-white p-6 rounded shadow-md text-center w-96">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            onClick={e=>setisM(false)} // Replace with your close function
          >
            ✖
          </button>
          <h2 className="text-xl font-bold" id='gener_wait'>Generating...</h2>
          <div className="loader mt-4">
            <img src='' id='gen_img'/>
          </div>
          <div className="mt-4">
            <a href='' target="_blank" id='download_img_now' className="bg-green-500 px-4 py-2 text-white rounded ml-2">Download</a>
          </div>
        </div>
      </div>
  )
};

const Home = () => {
    const [prompt,setPrompt] = useState('');

    const {user} = useAuthContext();
    const {imgs,dispatch} = useGenContext();

    const [isModalOpen, setIsModalOpen] = useState(false);

    //Everytime page loads:
    useEffect(()=>{
      const fetchAll = async () => {
        const resp = await fetch("https://imggen-06-03.onrender.com/api/prompts/gt_p",{
          method:"GET",
          headers:{"Authorization":`Bearer ${user.token}`,'Content-Type':'application/json'},
        });
        const json = await resp.json();
        console.log(json[0])
        console.log(json);
        if (resp.ok) {
          dispatch({type:"SET_IMGS",payload:json})
        }
      }
      fetchAll()
    },[dispatch,user,isModalOpen])

    //What to do when clicked 'generate':
    let lastRequestTime = 0;
    const handleGenerate = async (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastRequestTime < 30000) { // Enforce 30s delay
          window.alert("Please wait before generating another image.");
          return;
      }
      lastRequestTime = now;
      setIsModalOpen(true);
      const resp = await fetch("https://imggen-06-03.onrender.com/api/prompts/save_p",{
        method:"POST",
        headers:{"Authorization":`Bearer ${user.token}`, "Content-Type": "application/json"},
        body:JSON.stringify({'prompt':prompt})
      })
      const json = await resp.json();
      if (resp.ok) {
        setIsModalOpen(true);
        document.querySelector('#gener_wait').style.display='none';
        document.querySelector('#gen_img').src=json.now_;
        document.querySelector('#download_img_now').href=json.now_;
        dispatch({type:"SET_IMGS",payload:json.whole});
      }
      if (!resp.ok) {
        setIsModalOpen(false);
        document.querySelector('#gener_wait').style.display='';
        document.querySelector('#gen_img').src='';
        window.alert(json.error);
      };
    }
    // useEffect(()=>{
    //   // const fetchAll =   
    // },[dispatch,user]);

    return (
        <motion.div initial={{opacity:0}} animate={{ opacity: 1 }} transition={{ duration:1 }}>
        <Navbar username={user.user.usrn} profPic={user.user.pfPic}/>
        <div className="home_page w-[100vw] h-[100vh] text-center content-center py-10 bg-[#EFEFEF] ">
           <h2 className='inline-block text-3xl font-bold'>What's on your mind</h2>
           <form className="m-auto mt-15 w-[300px] flex-row sm:w-[550px] sm:flex-row" onSubmit={handleGenerate}>
                <input placeholder="Type Something" value={prompt} onChange={e=>{setPrompt(e.target.value)}} type="text" className="border-2 p-3 sm:w-[400px] w-[250px]  border-black rounded-lg bg-white"/>
                <button className='p-2 font-bold text-xl rounded-lg shadow-m m-4 bg-[#3F7D58]' type='submit'>Generate</button>
           </form>
           <div className="image_result">

           </div>
           {imgs[0]  && <Recents txts={imgs[0].texts} ims={imgs[0].images}/>}
           {/* Modal to show image generated */}
           {isModalOpen && <Modal isM={isModalOpen} setisM={setIsModalOpen}/>}
        </div>
        <footer className="bg-blue-600 text-white text-center p-4">
        © 2025 Jeman06. All rights reserved.
      </footer>
        </motion.div>
    )
};

export default Home;