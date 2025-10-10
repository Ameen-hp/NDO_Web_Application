import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock, Users, Send, Loader2, CheckCircle, XCircle, X } from "lucide-react";
import api from "../utils/api"; // ✅ Using same API setup as before

// --- Notification Toast Component ---
const NotificationToast = ({ type, message, onClose }) => {
  if (!message) return null;
  const baseClasses =
    "fixed bottom-4 right-4 p-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-500 ease-out z-50 min-w-[280px]";
  let colorClasses = "";
  let Icon = null;

  if (type === "success") {
    colorClasses = "bg-emerald-50 text-emerald-800 border-l-4 border-emerald-500";
    Icon = CheckCircle;
  } else {
    colorClasses = "bg-rose-50 text-rose-800 border-l-4 border-rose-500";
    Icon = XCircle;
  }

  return (
    <div className={`${baseClasses} ${colorClasses} animate-slide-in`}>
      {Icon && <Icon className="w-6 h-6 flex-shrink-0" />}
      <span className="font-medium flex-grow">{message}</span>
      <button onClick={onClose} className="p-1 rounded-full hover:bg-white/50 transition">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", userType: "user" });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const fadeInStyle = {
    animation: "fadeInUp 0.8s ease-out forwards",
    opacity: 0,
    transform: "translateY(20px)",
  };

  const styleSheet = `
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
    @keyframes pulse-slow { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.05); } }
    .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
    .animate-slide-in { animation: slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
  `;

  const handleSignup = async () => {
    setIsLoading(true);
    setNotification({ type: "", message: "" });

    try {
      // ✅ Uses your existing backend connection
      const res = await api.post("/auth/signup", form);
      setNotification({ type: "success", message: res.data.message });

      // ✅ Redirect to login after 2s
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed. Please try again.";
      setNotification({ type: "error", message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleSheet }} />

      {/* Background */}
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-amber-50 flex items-center justify-center p-4 sm:p-6 font-inter relative overflow-hidden mt-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-rose-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-slow delay-[2000ms]"></div>

        {/* Card (reduced width + height) */}
        <div
          className="relative w-full max-w-sm bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50 transform transition-all duration-500 z-10"
          style={fadeInStyle}
        >
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-center mb-2 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-600 to-amber-600">
                Create Account
              </span>
            </h2>
            <p className="text-center text-gray-600 mt-2 text-sm">Join the community and get started!</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="relative">
              <UserPlus className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-2.5 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={isLoading}
                autoFocus
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-2.5 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
              <input
                type="password"
                placeholder="Password (min 8 characters)"
                className="w-full pl-12 pr-4 py-2.5 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400 pointer-events-none" />
              <select
                className="w-full appearance-none pl-12 pr-12 py-2.5 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 shadow-sm"
                onChange={(e) => setForm({ ...form, userType: e.target.value })}
                disabled={isLoading}
              >
                <option value="user">User (Standard Access)</option>
                <option value="host">Host (Creator Access)</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleSignup}
            disabled={isLoading}
            className="w-full mt-6 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-500 to-amber-400 shadow-lg shadow-violet-300/50 hover:shadow-xl hover:shadow-violet-400/60 transition duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Signing up...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 transform rotate-12" />
                <span>Signup Now</span>
              </>
            )}
          </button>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="ml-1 font-medium text-violet-600 hover:text-violet-700 hover:underline transition duration-200"
            >
              Log in here
            </a>
          </div>
        </div>
      </div>

      {/* Toast */}
      <NotificationToast
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification({ type: "", message: "" })}
      />
    </>
  );
}

export default Signup;
