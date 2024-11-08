const Topform = () => {
    return (
        <form action="/api/upload_wall" method="POST" enctype="multipart/form-data">
            <h4>Upload Wallpaper:</h4>
            <input type="file" name="profile_pic"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Topform;