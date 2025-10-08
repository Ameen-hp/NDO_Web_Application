import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Home as HomeIcon,
  Users,
  School,
  Menu,
  X,
  LogOut,
  Phone,
  Globe,
  BookOpen,
  LayoutDashboard,
  LogIn,
  UserPlus,
} from "lucide-react";

// 🖼️ YOUR CUSTOM LOGO PATH
const NariLogo = "images/NariLogo/logo.jpg";

function Navbar() {
  const { user, setUser } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Sticky Navbar Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsMenuOpen(false);
  };

  // 🎨 COLOR & STYLE DEFINITIONS
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    ${isScrolled ? "bg-white/95 shadow-xl backdrop-blur-md" : "bg-white/90 shadow-md"}
  `;

  // Base link styling: Animated Rose Underline on Hover
  const linkBaseClasses =
    "relative text-gray-700 font-medium transition duration-300 before:content-[''] before:absolute before:bottom-[-4px] before:left-1/2 before:w-0 before:h-[3px] before:bg-rose-500 before:transition-all before:duration-300 hover:text-rose-600 hover:before:w-full hover:before:left-0 hover:before:bg-rose-500";

  // Function to determine link classes (Violet for Active)
  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `${linkBaseClasses} ${
      isActive
        ? "text-violet-700 font-extrabold before:w-full before:left-0 before:h-[3px] before:bg-violet-600"
        : ""
    }`;
  };

  // Amber CTA Button Style (Login/Signup)
  const ctaButtonClasses = `
    flex items-center px-6 py-2 text-white font-bold rounded-full
    bg-amber-500 shadow-xl shadow-amber-300/50 
    transform transition-all duration-300
    hover:bg-amber-600 hover:scale-[1.05] hover:shadow-2xl hover:shadow-amber-500/70
  `;

  // Rose Logout Button Style
  const attractiveLogoutClasses = `
    flex items-center px-6 py-2 text-white font-bold rounded-full
    bg-rose-500 shadow-xl shadow-rose-300/50
    transform transition-all duration-300
    hover:bg-rose-600 hover:scale-[1.05] hover:shadow-2xl hover:shadow-rose-500/70
  `;

  // ✅ Nav Links (Structure Preserved)
  const hostLinks = [
    { name: "Gallery", path: "/gallery", icon: School },
    { name: "Add Project", path: "/hostFormPage", icon: LayoutDashboard },
    { name: "Manage Projects", path: "/hostProjects", icon: LayoutDashboard },
    { name: "UserQueries", path: "/UserQueries", icon: LayoutDashboard },
  ];

  const defaultLinks = [
    { name: "Home", path: "/home", icon: HomeIcon },
    { name: "About", path: "/about", icon: Users },
    { name: "Programs", path: "/programs", icon: BookOpen },
    { name: "Networks", path: "/networks", icon: Globe },
    { name: "Gallery", path: "/gallery", icon: School },
    { name: "Contact Us", path: "/contact", icon: Phone },
  ];

  const navLinksToShow = user?.userType === "host" ? hostLinks : defaultLinks;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 lg:px-12 py-3 flex justify-between items-center h-16">
        
        {/* 🚀 LEFT SECTION: LOGO ONLY (Larger, Circle Container) */}
        <div className="flex items-center">
          <Link to="/home" className="flex items-center group">
            
            {/* Logo Container: Larger w-12 h-12, rounded-full, with a subtle border/shadow */}
            <div className="w-12 h-12 mr-3 bg-violet-100 rounded-full shadow-lg flex items-center justify-center transform transition duration-500 group-hover:scale-105 group-hover:shadow-violet-400/50">
              {/* Logo Image: Fit inside the circle container */}
             <img src={NariLogo} alt="NDO Logo" className="w-10 h-10 object-contain rounded-full" />
            </div>

            {/* Organization Name (Simplified to NDO) */}
            <h1 className="text-2xl font-extrabold text-gray-900 leading-none">
              NDO
            </h1>
          </Link>
        </div>

        {/* 🖥️ RIGHT SECTION (DESKTOP) */}
        <div className="hidden lg:flex items-center space-x-10">
          
          {/* ✅ Nav Links */}
          {user &&
            navLinksToShow.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                {link.name}
              </Link>
            ))}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/signup" className={ctaButtonClasses}>
                  <UserPlus className="w-5 h-5 mr-2" />
                  Signup
                </Link>
                <Link to="/login" className={ctaButtonClasses}>
                  <LogIn className="w-5 h-5 mr-2" />
                  Login
                </Link>
              </>
            ) : (
              // Logout Button (Rose CTA)
              <button
                onClick={logout}
                className={attractiveLogoutClasses}
                title="Logout"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            )}
          </div>
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-violet-600 hover:bg-rose-50 rounded-lg transition duration-300"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU (Violet Background, Smooth Slide) */}
      <div
        className={`
          fixed top-16 left-0 w-full h-[calc(100vh-4rem)] 
          bg-violet-50/95 transition-transform duration-500 ease-in-out 
          lg:hidden shadow-2xl overflow-y-auto border-t-4 border-rose-200
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col p-6 space-y-2">
          {/* Mobile Nav Links */}
          {user &&
            navLinksToShow.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center p-3 text-lg font-semibold text-gray-800 hover:bg-rose-100 rounded-xl transition duration-200 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon className="w-6 h-6 mr-4 text-violet-600 group-hover:text-rose-600 transition duration-200" />
                {link.name}
              </Link>
            ))}

          {/* Mobile Auth Buttons */}
          {!user ? (
            <div className="flex flex-col space-y-3 pt-4 border-t border-rose-200">
                <Link 
                    to="/signup" 
                    className={`${ctaButtonClasses} justify-center w-full`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <UserPlus className="w-6 h-6 mr-3" /> Signup
                </Link>
                <Link 
                    to="/login" 
                    className={`${ctaButtonClasses} justify-center w-full`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <LogIn className="w-6 h-6 mr-3" /> Login
                </Link>
            </div>
          ) : (
            <button
              onClick={logout}
              className={`w-full justify-center ${attractiveLogoutClasses} mt-4`}
            >
              <LogOut className="w-6 h-6 mr-3" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;