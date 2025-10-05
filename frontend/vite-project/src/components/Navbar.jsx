import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Donate from "../pages/Donates";
function Navbar() {
  const { user, setUser } = useAuth();

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <nav className="bg-blue-600 text-white p-3 flex justify-between">
      <h1 className="font-bold">Auth System</h1>
      <div className="flex gap-3 items-center">
        {!user && (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        {user?.userType === "user" && (
  <>
   <Link to="/home">Home</Link>
   <Link to="/donate">Donate</Link>
   <Link to="/contact">Contact</Link>
  </>
)}

        {user?.userType === "host" && <Link to="/host">Host Dashboard</Link>}
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
