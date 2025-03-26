import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
    // Integrate Google OAuth here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-center items-center">
          <div className="border-t w-1/3"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t w-1/3"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 border rounded-md shadow bg-white hover:bg-gray-100"
        >
          <FcGoogle className="mr-2" size={20} /> Sign in with Google
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/signup" className="text-blue-600 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}
