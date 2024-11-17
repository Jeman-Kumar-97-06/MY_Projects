import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";


const WallDetails = ({wall}) => {
    const [error,setError] = useState(null);
    const {user}           = useAuthContext();

    const handleDownload = async () => {
        if(!user){
            setError("You must be logged in :(");
            return;
        }
        const resp = await fetch('http://localhost:4000/api/walls/download/'+wall._id,{headers:{'Authorization':`Bearer ${user.token}`}});
        const json = await resp.json();
        
    }
    return (
        <div className='wall_details'>
            <img src={wall.wall} id='each_wall_img' alt="wallpaper_missing :("/>
            <button onClick={handleDownload}><span className="material-icons">download</span></button>
        </div>
    )
};

export default WallDetails;