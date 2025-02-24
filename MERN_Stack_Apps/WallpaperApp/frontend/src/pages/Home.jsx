import WallDetail from "../components/WallDetail";
import { useEffect } from "react";
import {useWallContext} from '../hooks/useWallContext';
import {useAuthContext} from '../hooks/useAuthContext';

const Home = () => {
    const {walls,dispatch} = useWallContext();
    const {user}     = useAuthContext();
    useEffect(()=>{
        const fetchAllWalls = async () => {
          const resp  = await fetch('http://localhost:2000/api/walls/',{headers:{"Authorization":`Bearer ${user.token}`}});
          const walls = await resp.json();
          if (resp.ok)  {
              console.log("jeman")
              console.log(walls)
              dispatch({type:"SETWALLS",payload:walls})
          }
          }
        if (user) {
          fetchAllWalls()
        }
    },[dispatch,user]);

    return (
        <div className='w-screen mt-5 ml-5 flex flex-wrap'>
          {walls && walls.map(
            w=>(
              <WallDetail key={w._id} w={w}/>
            )
          )}
        </div>
    )
};

export default Home;