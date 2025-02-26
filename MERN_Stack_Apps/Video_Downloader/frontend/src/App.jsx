import { useState } from 'react'
import axios from 'axios';

function App() {
  const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        if (!url) return alert("Enter a YouTube URL");
        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:5000/download`, {
                params: { url },
                responseType: "blob", // Important for file downloads
            });
            console.log(response)
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(new Blob([response.data]));
            link.setAttribute("download", "video.mp4");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            alert("Error downloading video. Try again!");
        }
        setLoading(false);
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>YouTube Video Downloader</h2>
            <input
                type="text"
                placeholder="Enter YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ padding: "10px", width: "300px", margin: "10px" }}
            />
            <button onClick={handleDownload} disabled={loading} style={{ padding: "10px 20px" }}>
                {loading ? "Downloading..." : "Download"}
            </button>
        </div>
    );
}

export default App
