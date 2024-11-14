const WallDetails = ({wall}) => {
    return (
        <div className='wall_details'>
            <img src={wall.wall} id='each_wall_img' alt="wallpaper_missing :("/>
            <button><span className="material-symbols-outlined">download</span></button>
            <button><span className="material-symbols-outlined">delete</span></button>
        </div>
    )
};

export default WallDetails;