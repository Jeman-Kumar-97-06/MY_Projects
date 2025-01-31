import { useState } from "react";
import axios from "axios";

function Upload() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("video", file);
        formData.append("title", title);
        formData.append("description", description);

        await axios.post("http://localhost:5000/api/videos/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Video uploaded successfully!");
    };

    return (
        <div>
            <h2>Upload Video</h2>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default Upload;
