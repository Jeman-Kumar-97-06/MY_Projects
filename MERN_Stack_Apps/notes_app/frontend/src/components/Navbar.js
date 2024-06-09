const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='all_nav_links'>
                <div className='home_link'>
                    <a href='/'>takeAnote</a>
                </div>

                <div className='remaining'>
                    <div className="user_in_link">
                        <a href='/login'>login.</a>
                    </div>
                    <div className='user_out_link'>
                        <a href='/user_details'>user.</a>
                        <a href='/logout'>logout.</a>
                    </div>
                    <a className='about_link' href='/about'>about.</a>
                    <a className='cntct_link' href='/contact'>contact.</a> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;