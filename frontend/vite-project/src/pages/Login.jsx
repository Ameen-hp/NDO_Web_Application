import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LogIn, Mail, Lock } from 'lucide-react'; // Importing icons

function Login() {
  // ⛔️ DO NOT CHANGE: State and hooks are preserved
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  // ⛔️ DO NOT CHANGE: handleLogin function is preserved
  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);

      if (res.data.user.userType === "host") navigate("/host");
      else navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    // Centered container with full height and subtle background
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">

      {/* Attractive Login Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transform transition-all duration-300 hover:shadow-3xl">

        {/* Header */}
        <div className="text-center mb-8">
          <LogIn className="w-12 h-12 mx-auto text-blue-600 mb-3" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back!
          </h2>
          <p className="text-gray-500 mt-2">Sign in to your account.</p>
        </div>

        {/* Form Fields Container */}
        <div className="space-y-4">

          {/* 1. Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            {/* ⛔️ DO NOT CHANGE: onChange logic is preserved */}
            <input
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 text-gray-900"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* 2. Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            {/* ⛔️ DO NOT CHANGE: type and onChange logic are preserved */}
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 text-gray-900"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
        </div>

        {/* 3. Login Button */}
        {/* ⛔️ DO NOT CHANGE: onClick logic is preserved */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-[1.01]"
        >
          <LogIn className="w-5 h-5" />
          <span>Login</span>
        </button>
        
        {/* Footer/Link to Signup */}
        <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account? <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">Sign up here</a>
        </div>

      </div>
    </div>
  );
}

export default Login;