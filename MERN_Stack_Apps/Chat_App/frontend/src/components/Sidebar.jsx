const Sidebar = () => {
    return (
        <div className='sidebar m-0 p-0 w-[200px] bg-[#f1f1f1] fixed h-[100%] overflow-auto'>
            <a class='active' href='#'>Home</a>
            <a href='#'>User1</a>
            <a href='#'>User2</a>
            <a href='#'>Logout</a>
        </div>
    )
};

export default Sidebar;