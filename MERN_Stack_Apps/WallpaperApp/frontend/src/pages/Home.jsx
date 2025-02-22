import WallDetail from "../components/WallDetail";
import { useEffect } from "react";
import {useWallContext} from '../hooks/useWallContext';
import {useAuthContext} from '../hooks/useAuthContext';

const Home = () => {
    const {dispatch} = useWallContext();
    const {user}     = useAuthContext();
    useEffect(()=>{
        const fetchAllWalls = async () => {
          const resp  = await fetch('/api/walls/',{headers:{"Authorization":`Bearer ${user.token}`}});
          const walls = await resp.json();
          if (resp.ok)  {
              dispatch({type:"SET_WALLS",payload:walls})
          }
          }
        if (user) {
          fetchAllWalls()
        }
    },[dispatch,user]);

    return (
        <div className='w-screen mt-5 ml-5 flex flex-wrap'>
          <WallDetail/>
        </div>
    )
};

export default Home;