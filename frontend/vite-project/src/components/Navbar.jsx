import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Icon imports
import { Home as HomeIcon, Users, Droplet, School, Menu, X, LogOut, Phone, Globe, BookOpen } from 'lucide-react';

function Navbar() {
  // --- MOCK AUTHENTICATION LOGIC ---
  // Initializing user to { userType: "user" } to simulate a logged-in state by default.
  // Set to null to simulate logged out state (change to 'null' to test logged out state).
  const [user, setUser] = useState({ userType: "user" }); 
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define the navigation links with paths and icons
  const navLinks = [
    { name: "Home", path: "/home", icon: HomeIcon },
    { name: "About", path: "/about", icon: Users },
    { name: "Programs", path: "/programs", icon: BookOpen },
    { name: "Networks", path: "/networks", icon: Globe },
    { name: "Gallery", path: "/gallery", icon: School },
    { name: "Contact Us", path: "/contact", icon: Phone },
  ];

  // Logic to change Navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    // Mock logout: clears localStorage (if used) and sets user to null
    localStorage.clear();
    setUser(null);
    setIsMenuOpen(false); // Close mobile menu after action
  };

  // Base classes for the Navbar (sticky, animated transition)
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md
    ${isScrolled 
      ? 'bg-white shadow-xl border-b border-emerald-100' // Solid on scroll
      : 'bg-white bg-opacity-95 backdrop-blur-sm' // Subtle transparent initially
    }
  `;

  // Base classes for navigation links (desktop styling)
  const linkBaseClasses = "relative text-gray-700 font-medium hover:text-emerald-700 transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-emerald-600 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0";

  // Specific classes for the active link (simulated)
  const getLinkClasses = (path) => {
    // Placeholder logic for current path simulation. Replace with real router logic.
    const isActive = window.location.pathname === path; 
    return `${linkBaseClasses} ${isActive ? 'text-emerald-700 font-bold before:w-full before:left-0 before:h-[3px] before:bg-emerald-600' : ''}`;
  };
  
  // Attractive Logout Button style
  const attractiveLogoutClasses = `
    flex items-center px-4 py-2 text-white font-bold rounded-full 
    bg-gradient-to-r from-red-500 to-pink-500 shadow-lg 
    transform transition-all duration-300
    hover:scale-105 hover:shadow-red-400/50
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-16">
        
        {/* Left Section: Logo and Title */}
        <div className="flex items-center">
          <Link to="/home" className="flex items-center group">
            {/* Logo/Icon */}
            <Droplet className="w-8 h-8 text-emerald-600 mr-3 transform group-hover:rotate-12 transition duration-500" />
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 leading-none">
                NDO <span className="text-sm font-semibold text-emerald-600 hidden sm:inline">(Nari Development Organization)</span>
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Empowering Women, Building Communities
              </p>
            </div>
          </Link>
        </div>

        {/* Right Section: Desktop Navigation & CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          
          {/* Nav Links */}
          {user?.userType && navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={getLinkClasses(link.path)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Authentication Links/Button */}
          <div className="flex items-center space-x-4">
            {!user ? (
              // Logged Out State
              <>
                <Link to="/signup" className={linkBaseClasses}>Signup</Link>
                <Link to="/login" className={linkBaseClasses}>Login</Link>
              </>
            ) : (
              // Logged In State (with attractive Logout button)
              <>
                {user.userType === "host" && <Link to="/host" className={getLinkClasses("/host")}>Host Dashboard</Link>}
                
                <button 
                  onClick={logout} 
                  className={attractiveLogoutClasses}
                  title="Logout"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition duration-300">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Side Panel) */}
      <div 
        className={`
          fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white transition-transform duration-500 ease-in-out
          lg:hidden shadow-2xl overflow-y-auto
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col p-6 space-y-4">
          
          {/* Mobile Nav Links */}
          {user?.userType && navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="flex items-center p-3 text-lg font-semibold text-gray-800 hover:bg-emerald-50 rounded-lg transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <link.icon className="w-5 h-5 mr-3 text-emerald-600" />
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Auth Links and Logout */}
          <div className="pt-4 border-t border-gray-200 space-y-4">
            {!user ? (
              // Logged Out State
              <>
                <Link to="/signup" className="block p-3 text-lg font-semibold text-gray-800 hover:bg-emerald-50 rounded-lg transition duration-200" onClick={() => setIsMenuOpen(false)}>Signup</Link>
                <Link to="/login" className="block p-3 text-lg font-semibold text-gray-800 hover:bg-emerald-50 rounded-lg transition duration-200" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </>
            ) : (
              // Logged In State (with attractive Logout button)
              <>
                {user.userType === "host" && (
                    <Link to="/host" className="block p-3 text-lg font-semibold text-gray-800 hover:bg-emerald-50 rounded-lg transition duration-200" onClick={() => setIsMenuOpen(false)}>Host Dashboard</Link>
                )}
                {/* Mobile Logout Button (Stylized) */}
                <button 
                  onClick={logout} 
                  className={`w-full justify-center ${attractiveLogoutClasses.replace('px-4 py-2', 'px-6 py-3 text-xl')} mt-4`} 
                >
                  <LogOut className="w-6 h-6 mr-3" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
