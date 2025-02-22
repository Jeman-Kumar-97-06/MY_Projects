const Upload = () => {
    return (
        <form id="upload_form" class="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4" enctype="multipart/form-data">
        <h2 class="text-xl font-semibold text-gray-700 text-center">Upload Wallpaper</h2>
        
        <div id="input_btn" class="flex flex-col space-y-3"> 
            <input type="file" id="wall_pic" name="wall_pic" class="w-full p-2 border border-gray-300 rounded-lg cursor-pointer file:cursor-pointer file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none hover:file:bg-blue-600 transition"/>
            <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
        </div>
    
        {/* <!-- Uncomment this if you want error handling --> */}
        {/* <!-- {error && <div class="text-red-500 text-sm font-medium text-center mt-2">Error: {error}</div>} --> */}
    </form>
    )
};
 export default Upload;