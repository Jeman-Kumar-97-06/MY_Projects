import { useState } from "react";
import { useWallContext } from "../hooks/useWallContext";
import { useAuthContext } from "../hooks/useAuthContext";
const Upload = () => {
    const [error,setError] = useState(null);
    const {dispatch}       = useWallContext();
    const {user}           = useAuthContext();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError("You must be logged in!");
            return;
        }
        const fileInput = document.querySelector('#wall_pic').files[0];

        //Checking if the file is of jpeg or jpg or png format
        if (fileInput && fileInput.type !== "image/jpeg" && fileInput.type !== "image/jpg" && fileInput.type !=='image/png') {
            alert("Only JPEG/JPG/PNG images are allowed!");
            return;
        }

        const formData  = new FormData();
        formData.append("wall_pic",fileInput);
        const response  = await fetch('https://my-projects-lxja.onrender.com/api/walls/',{
            method:"POST",
            body:formData,
            headers:{"Authorization":`Bearer ${user.token}`}
        })
        const json      = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
            dispatch({type:"UPLOADWALLS",payload:json});
        }
    }
    return (
        <form onSubmit={handleSubmit} id="upload_form" class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4" encType="multipart/form-data">
            <h2 class="text-xl font-semibold text-gray-700 text-center">Upload Wallpaper</h2>
        
            <div id="input_btn" class="flex flex-col space-y-3"> 
                <input type="file" id="wall_pic" name="wall_pic" class="w-full p-2 border border-gray-300 rounded-lg cursor-pointer file:cursor-pointer file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none hover:file:bg-blue-600 transition"/>
                <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
            </div>
    
            {/* <!-- Uncomment this if you want error handling --> */}
            {error && <div class="text-red-500 text-sm font-medium text-center mt-2">Error: {error}</div>}
        </form>
    )
};
 export default Upload;