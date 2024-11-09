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
        const new_file = fileInput.files[0]
    }

    return (
        <form action="/api/walls" method="POST" enctype="multipart/form-data">
            <h4>Upload Wallpaper:</h4>
            <input type="file" name="profile_pic"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Topform;