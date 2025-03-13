const Home = () => {
    return (
        <div className="home_page w-[100vw] h-[100vh] text-center py-10 bg-[#66D2CE]">
           <h2 className='inline-block text-3xl font-bold'>What's on your mind</h2>
           <div className="m-auto mt-15 w-[550px]">
                <input type="text" className="border-2 p-3 min-w-[400px] border-black rounded-lg bg-white"/>
                <button className='p-2 font-bold text-xl rounded-lg shadow-m m-4 bg-green-600'>Generate</button>
           </div>
           <div className="image_result">

           </div>
           <div>
                <div>
                    <h2>Your Images</h2>
                </div>
                <div>
                    <h2>Your Prompts</h2>
                </div>
           </div>
        </div>
    )
};

export default Home;