import { useEffect } from "react";
import { useWallsContext } from "../hooks/useWallsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const {walls,dispatch} = useWallsContext();
    const {user}           = useAuthContext();

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
        <div className="home_page">
            {
                walls && walls.map(wall=>(
                    <div>
                        <img src={wall.wall}/>
                        <h1>{wall.wall}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Home; 