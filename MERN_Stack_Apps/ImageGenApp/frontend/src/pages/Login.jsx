const Login = () => {
    return (
        <div className="login_page w-[100vw] h-[100vh] content-center">
            <form className="m-auto bg-[#66D2CE] flex flex-col w-[400px] p-5 pt-10 rounded-lg">
                <input type='text' className="p-3 bg-white rounded-lg mb-5" placeholder="username" />
                <input type='text' className="p-3 bg-white rounded-lg mb-5" placeholder='password'/>
                <button type='submit' className="cursor-pointer shadow-sm bg-[#E3D2C3] w-[100px] p-2 rounded-lg">Login</button>
            </form>
        </div>
    )
}

export default Login;