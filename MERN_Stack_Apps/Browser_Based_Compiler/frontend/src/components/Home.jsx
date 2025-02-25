const Home = () => {
    return (
        <div className='home_page '>
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-16 bg-gray-900 text-white flex flex-col items-center py-4 space-y-4">
                    <button className="p-2 hover:bg-gray-700 rounded-md">JS</button>
                    <button className="p-2 hover:bg-gray-700 rounded-md">Python</button>
                    <button className="p-2 hover:bg-gray-700 rounded-md"></button>
                </div>

                {/* Main Editor Section */}
                <div className="flex flex-col flex-1 bg-gray-100">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-2 text-sm flex justify-between px-4">
                        <span>Online JavaScript Compiler</span>
                        <button className="bg-blue-800 px-2 py-1 rounded"></button>
                    </div>
                    {/* Code Editor & Output */}
                    <div className="flex flex-1">
                    {/* Code Editor */}
                    <div className="flex-1 bg-white p-4">
                        <div className="bg-gray-200 p-2 text-xs">main.js</div>
                        <textarea
                            className="w-full h-full p-2 text-sm bg-gray-50 border-none outline-none"
                            defaultValue={`// Online JavaScript Editor\nconsole.log("Try Programiz!");`}
                        ></textarea>
                </div>

          {/* Output Panel */}
          <div className="w-1/3 bg-white border-l">
            <div className="bg-gray-200 p-2 text-xs flex justify-between">
              <span>Output</span>
              <button className="text-blue-600">Clear</button>
            </div>
            <div className="p-4 text-sm text-gray-700">Run output here...</div>
          </div>
        </div>

        {/* Run Button */}
        <div className="p-3 border-t bg-gray-50 flex justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Run</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Home;