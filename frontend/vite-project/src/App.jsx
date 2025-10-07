import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import UserDashboard from "./pages/UserDashboard";
import HostDashboard from "./pages/HostDashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Networks from "./pages/Networks";
import Programs from "./pages/Programs";
// import Approach from "./pages/Approach";
// import Donate from "./pages/Donates";
import Contact from "./pages/ContactDonate";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        {/* <Route path="/approach" element={<Approach/>}></Route> */}
        <Route path="/programs" element={<Programs/>}></Route>
        <Route path="/networks" element={<Networks/>}></Route>
        {/* <Route path="/donate" element={<Donate/>}> </Route> */}
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/host" element={<HostDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
