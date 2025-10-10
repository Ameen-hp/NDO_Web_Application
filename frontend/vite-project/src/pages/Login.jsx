import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock, Loader2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import api from "../utils/api";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      if (res.data.user.userType === "host") navigate("/hostFormPage");
      else navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-amber-50 flex items-center justify-center p-3 sm:p-4 font-inter mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50 space-y-4 transition-all duration-500"
      >
        {/* Header */}
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-amber-300 mx-auto mb-3 flex items-center justify-center bg-violet-100/50">
            <LogIn className="w-6 h-6 text-violet-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-600 mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-sm">Please sign in to continue</p>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center p-2 text-sm text-rose-800 rounded-xl bg-rose-100/90 border border-rose-300"
          >
            <XCircle className="w-4 h-4 mr-2" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Form */}
        <div className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-violet-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none text-gray-900 text-sm shadow-inner"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={loading}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-violet-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none text-gray-900 text-sm shadow-inner"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              disabled={loading}
            />
          </div>

          <a
            href="#"
            className="text-xs font-medium text-violet-600 hover:text-violet-700 hover:underline block text-right"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <motion.button
          onClick={handleLogin}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-600 to-rose-500 text-white font-semibold text-sm shadow-lg shadow-rose-300/50 hover:shadow-rose-400/60 flex items-center justify-center space-x-2 disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Logging in...</span>
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </>
          )}
        </motion.button>

        {/* Footer */}
        <div className="text-center text-xs text-gray-600">
          Don’t have an account?
          <a
            href="/signup"
            className="font-semibold text-rose-600 hover:text-violet-700 hover:underline ml-1"
          >
            Sign up
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
