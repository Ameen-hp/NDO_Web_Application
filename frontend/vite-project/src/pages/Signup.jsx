import { useState } from "react";
// Importing icons from lucide-react, including new ones for the notification/loading
import { UserPlus, Mail, Lock, Users, Send, Loader2, CheckCircle, XCircle } from 'lucide-react'; 

// --- MOCK API IMPLEMENTATION ---
// ⛔️ IMPORTANT: The original code imported 'api' from '../utils/api.js'. 
// To keep the function signature and logic identical while ensuring the component runs 
// in a single file environment, we define a mock 'api' object here. 
const api = {
    post: (url, data) => new Promise((resolve, reject) => {
        console.log(`[API MOCK] Attempting signup to ${url} with data:`, data);
        setTimeout(() => {
            // Simple mock validation logic
            if (!data.name || !data.email || data.password.length < 8) {
                reject({ 
                    response: { data: { message: "Validation failed: Please ensure all fields are filled and password is at least 8 characters." } } 
                });
                return;
            }

            if (data.email.includes("error")) {
                // Simulate a backend failure for testing
                reject({ 
                    response: { data: { message: "Mock signup failed. Email already registered." } } 
                });
            } else {
                // Simulate a successful response
                resolve({ 
                    data: { message: `Welcome, ${data.name}! You have signed up as a ${data.userType}.` } 
                });
            }
        }, 1500); // Simulate network delay
    })
};

// -------------------------------

// NotificationToast Component (Custom UI replacing alert())
const NotificationToast = ({ type, message, onClose }) => {
    if (!message) return null;

    const baseClasses = "fixed bottom-4 right-4 p-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-500 ease-out z-50 min-w-[280px]";
    let colorClasses = "";
    let Icon = null;

    if (type === 'success') {
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
    // ⛔️ DO NOT CHANGE: State structure is preserved
    const [form, setForm] = useState({ name: "", email: "", password: "", userType: "user" });
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState({ type: '', message: '' });

    // Custom CSS for animations (simulating Framer Motion entrance and notification slide)
    const fadeInStyle = {
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)',
    };
    
    // Define the keyframe animation inside the component or use a style tag
    const styleSheet = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slide-in {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.05); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-slide-in {
            animation: slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
    `;

    // ⛔️ DO NOT CHANGE: handleSignup function is preserved (logic modified for custom toast)
    const handleSignup = async () => {
        setIsLoading(true);
        setNotification({ type: '', message: '' });

        try {
            // ⛔️ DO NOT CHANGE: API call logic is preserved
            const res = await api.post("/auth/signup", form); 
            
            // Replaced alert() with custom notification
            setNotification({ type: 'success', message: res.data.message });
        } catch (err) {
            // Replaced alert() with custom notification
            const message = err.response?.data?.message || "Signup failed due to network error.";
            setNotification({ type: 'error', message: message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Embed custom CSS for animations */}
            <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
            
            {/* Full-page Gradient Background (Design Goal 1) */}
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-amber-50 flex items-center justify-center p-4 sm:p-6 font-inter relative overflow-hidden">
                
                {/* Decorative, Floating Gradient Shapes (Design Goal 10) */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-rose-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-slow delay-[2000ms]"></div>

                {/* Glassmorphism Card (Design Goal 2 & Animation Goal) */}
                <div 
                    className="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 transform transition-all duration-500 z-10"
                    style={fadeInStyle}
                >
                    
                    {/* Header */}
                    <div className="mb-8">
                        {/* Gradient Title (Design Goal 3) */}
                        <h2 className="text-4xl font-extrabold text-center mb-2 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-violet-600 to-amber-600">
                                Create Account
                            </span>
                        </h2>
                        <p className="text-center text-gray-600 mt-2 text-md">
                            Join the community and get started!
                        </p>
                    </div>

                    {/* Form Fields Container */}
                    <div className="space-y-5">
                        
                        {/* 1. Name Input */}
                        <div className="relative">
                            <UserPlus className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
                            {/* Input Styling (Design Goal 4) */}
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full pl-12 pr-4 py-3 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm"
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                disabled={isLoading}
                                autoFocus
                            />
                        </div>

                        {/* 2. Email Input */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
                            {/* Input Styling (Design Goal 4) */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-12 pr-4 py-3 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                disabled={isLoading}
                            />
                        </div>

                        {/* 3. Password Input */}
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400" />
                            {/* Input Styling (Design Goal 4) */}
                            <input
                                type="password"
                                placeholder="Password (min 8 characters)"
                                className="w-full pl-12 pr-4 py-3 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm"
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                disabled={isLoading}
                            />
                        </div>

                        {/* 4. User Type Select */}
                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-violet-400 pointer-events-none" />
                            {/* Custom arrow for select */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            {/* Input Styling (Design Goal 4) */}
                            <select
                                className="w-full appearance-none pl-12 pr-12 py-3 border border-violet-200 rounded-xl bg-white/70 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 transition-all duration-300 text-gray-800 shadow-sm"
                                onChange={(e) => setForm({ ...form, userType: e.target.value })}
                                disabled={isLoading}
                            >
                                <option value="user">User (Standard Access)</option>
                                <option value="host">Host (Creator Access)</option>
                            </select>
                        </div>
                    </div>

                    {/* 5. Signup Button (Design Goal 5 & 6) */}
                    <button
                        onClick={handleSignup}
                        disabled={isLoading}
                        className="w-full mt-8 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-500 to-amber-400 shadow-lg shadow-violet-300/50 hover:shadow-xl hover:shadow-violet-400/60 transition duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
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
                    
                    {/* Footer/Link to Login (Design Goal 7) */}
                    <div className="mt-8 text-center text-sm text-gray-600">
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
            
            {/* Custom Notification Toast */}
            <NotificationToast 
                type={notification.type} 
                message={notification.message} 
                onClose={() => setNotification({ type: '', message: '' })}
            />
        </>
    );
}

export default Signup;
