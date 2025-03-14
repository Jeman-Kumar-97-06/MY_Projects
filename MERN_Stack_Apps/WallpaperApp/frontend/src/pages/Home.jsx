import WallDetail from "../components/WallDetail";
import { useEffect } from "react";
import {useWallContext} from '../hooks/useWallContext';
import {useAuthContext} from '../hooks/useAuthContext';
import Navbar from "../components/Navbar";

const Home = () => {
    const {walls,dispatch} = useWallContext();
    const {user}     = useAuthContext();
    useEffect(()=>{
        const fetchAllWalls = async () => {
          const resp  = await fetch('https://my-projects-lxja.onrender.com/api/walls/',{headers:{"Authorization":`Bearer ${user.token}`}});
          const walls = await resp.json();
          console.log("Ran this")
          if (resp.ok)  {
              dispatch({type:"SETWALLS",payload:walls})
          }
          }
        if (user) {
          fetchAllWalls()
        }
    },[dispatch,user]);

    return (
        <div className='w-screen mt-5 ml-5 flex flex-wrap'>
          {!walls && 
              <div className="flex justify-center items-center h-40 m-auto">
                <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
              </div>
          }
          {walls && walls.map(
            w=>(
              <WallDetail key={w._id} w={w}/>
            )
          )}
        </div>
    )
};

export default Home;