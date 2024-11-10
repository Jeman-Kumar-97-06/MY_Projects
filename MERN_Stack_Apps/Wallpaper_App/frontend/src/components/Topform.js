import {useState} from 'react';
import {useWallsContext} from '../hooks/useWallsContext';
import {useAuthContext} from '../hooks/useAuthContext';

const Topform = () => {
    const {dispatch}           = useWallsContext();
    const {user}               = useAuthContext();
    const [newwall,setNewwall] = useState('');
    const [error,setError]     = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError('You must be Logged In!');
            return;
        }
        const fileInput = document.getElementById('wall_pic').files[0];
        const formData  = new FormData();
        formData.append('wall_pic',fileInput);
        const response = await fetch('/api/walls/',{method:'POST',body:formData,headers:{'Authorization':`Beared ${user.token}`}});
        console.log('done')
    }

    return (
        <form id="upload_form" onSubmit={handleSubmit} encType="multipart/form-data">
            <h4>Upload Wallpaper:</h4>
            <input type="file" id='wall_pic' name='wall_pic'/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Topform;