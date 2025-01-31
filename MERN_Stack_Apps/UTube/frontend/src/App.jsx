import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import VideoPlayer from "./pages/VideoPlayer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/video/:id" element={<VideoPlayer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
