const Signup = () => {
    return (
        <div className="signup_page w-[100vw] h-[100vh] content-center">
            <form className="m-auto bg-[#66D2CE] flex flex-col w-[400px] p-5 pt-10 rounded-lg">
                <input type='text' className="p-3 bg-white rounded-lg mb-5" placeholder="Fullname" />
                <input type='text' className="p-3 bg-white rounded-lg mb-5" placeholder="Username" />
                <input type='password' className="p-3 bg-white rounded-lg mb-5" placeholder='Password'/>
                <input type='password' className="p-3 bg-white rounded-lg mb-5" placeholder="Confirm Password"/>
                <button type='submit' className="cursor-pointer shadow-sm bg-[#E3D2C3] w-[100px] p-2 rounded-lg">Signup</button>
            </form>
        </div>
    )
};

export default Signup;