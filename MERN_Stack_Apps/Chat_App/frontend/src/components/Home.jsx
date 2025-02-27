const Home = () => {
    return (
        <div className="content bg-[#C9E6F0] h-screen flex flex-col">

            {/* Top Bar */}
            <div className="home_bar bg-[#F96E2A]">
                <p>Lorem</p>
            </div>
    
            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto bg-[#78B3CE]">
                        {/* Example Messages */}
        <div className="flex justify-start">
            <div className="bg-gray-300 text-black px-4 py-2 rounded-lg max-w-xs">
                Hello, how are you?
            </div>
        </div>

        <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs">
                I'm good! How about you?
            </div>
        </div>
            </div>
    
            {/* Input Field Fixed at Bottom */}
            <div className="w-full bg-white border-t border-gray-300 p-2 fixed bottom-0 left-0">
                <div className="flex items-center w-full max-w-2xl mx-auto">
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="flex-1 px-3 py-2 outline-none bg-gray-100 focus:bg-white rounded-l-md"
                    />
                    <button className="ml-2 bg-[#78B3CE] text-black px-4 py-2 rounded-md hover:bg-blue-600 transition">
                        Send
                    </button>
                </div>
            </div>

        </div>    
    );
};

export default Home;