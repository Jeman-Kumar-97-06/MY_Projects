import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Recents from "../components/Recents";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

const Home = () => {
    const [prompt,setPrompt] = useState('');

    const {user} = useAuthContext();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleGenerate = async (e) => {
     e.preventDefault();
     setIsModalOpen(true);
     const resp = await fetch('http://localhost:4000/api/prompts/save_p/',{
        method:"POST",
        headers:{"Authorization":`Bearer ${user.token}`, "Content-Type": "application/json"},
        body:JSON.stringify({'prompt':prompt})
     })
     const json = await resp.json();
     console.log(json)
    };

    return (
        <>
        <Navbar username={user.user.usrn} profPic={user.user.pfPic}/>
        <div className="home_page w-[100vw] h-[100vh] text-center content-center py-10 bg-[#66D2CE]">
           <h2 className='inline-block text-3xl font-bold'>What's on your mind</h2>
           <form className="m-auto mt-15 w-[550px]" onSubmit={handleGenerate}>
                <input value={prompt} onChange={e=>{setPrompt(e.target.value)}} type="text" className="border-2 p-3 min-w-[400px] border-black rounded-lg bg-white"/>
                <button className='p-2 font-bold text-xl rounded-lg shadow-m m-4 bg-green-600' type='submit'>Generate</button>
           </form>
           <div className="image_result">

           </div>
           <Recents/>
           {/* Modal to show image generated */}
           {isModalOpen && <Modal/>}
        </div>
        <footer className="bg-blue-600 text-white text-center p-4">
        © 2025 Jeman06. All rights reserved.
      </footer>
        </>
    )
};

export default Home;