import robot from '../images/robot.png';
const Navbar = () => {
    return (
        <div className='bg-[#F2EAD3] border-b-2 border-black p-5 flex justify-between'>
            <div className="code-help-head flex justify-between">
                <img src={robot} alt='Wallpaper App' style={{width:"50px"}}/>
                <a href='#'>Dev_Solver</a>
            </div>
        </div>
    )
};

export default Navbar;