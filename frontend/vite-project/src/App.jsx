import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import UserDashboard from "./pages/UserDashboard";
import HostDashboard from "./pages/HostDashboard";
import Home from "./pages/Home";
import Donate from "./pages/Donates";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate/>}> </Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/host" element={<HostDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
