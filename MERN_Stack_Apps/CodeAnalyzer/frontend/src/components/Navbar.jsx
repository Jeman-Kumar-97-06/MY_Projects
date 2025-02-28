const Navbar = () => {
    return (
        <div className='bg-[#F2EAD3] border-b-2 border-black p-5 flex justify-between'>
            <div className="code-help-head">
                <a href='#'>Dev_Solver</a>
            </div>
            <div className="flex justify-between w-[150px]">
                <a href='#'>Username</a>
                <a href="#">Logout</a>
            </div>
        </div>
    )
};

export default Navbar;