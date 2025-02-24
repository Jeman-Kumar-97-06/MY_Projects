const WallDetail = ({w}) => {

    let fullUrl = `http://localhost:2000/${w.wall}`

    return (
        <div class="max-w-sm mr-12 mt-6 h-auto min-h-3 p-6 bg-gray-100 rounded-lg shadow-lg">
        <div class="relative">
          <img 
            src={fullUrl} 
            alt="Wallpaper" 
            class="w-full h-auto rounded-lg"
          />
    
          <a 
            href={fullUrl} 
            download
            class="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Download
          </a>
        </div>
        {/* <div class="mt-4 text-gray-800">
          <h2 class="text-2xl font-bold">Beautiful Nature Wallpaper</h2>
          <p class="mt-2 text-sm">
            A stunning high-resolution nature wallpaper to enhance your device background.  
          </p>
          <div class="mt-4 flex space-x-4 text-sm">
            <span class="bg-gray-200 px-3 py-1 rounded-lg">Resolution: 1920x1080</span>
            <span class="bg-gray-200 px-3 py-1 rounded-lg">Category: Nature</span>
          </div>
        </div> */}
      </div>
    )
};

export default WallDetail;