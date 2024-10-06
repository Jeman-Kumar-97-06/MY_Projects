import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const {login,error,isloading} = useLogin();
    return (
        <div className="login_div">
            <h1>Login Page</h1>
        </div>
    )
}

export default Login;