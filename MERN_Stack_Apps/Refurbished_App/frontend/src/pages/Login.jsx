import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from '../hooks/useLogin';
import { GoogleLoginButton } from "../components/GoogleLoginButton";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {login,error,isloading} = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(name,password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            {isloading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : 'Login'}
          </button>
        </form>
        {error && <span className="text-red-500">{error}</span>}
        <div className="mt-4 flex justify-center items-center">
          <div className="border-t w-1/3"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t w-1/3"></div>
        </div>
        <GoogleLoginButton/>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/signup" className="text-blue-600 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}
