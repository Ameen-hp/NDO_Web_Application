import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Networks from "./pages/Networks";
import Programs from "./pages/Programs";
import Contact from "./pages/ContactDonate";
import Gallery from "./pages/Gallery";
import HostProjectForm from "./pages/HostProjectForm";
import HostProjects from "./pages/HostProjects";
import UserQueries from "./pages/UserQueries";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 🔒 All Other Routes Are Protected */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/programs"
          element={
            <ProtectedRoute>
              <Programs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/networks"
          element={
            <ProtectedRoute>
              <Networks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hostFormPage"
          element={
            <ProtectedRoute>
              <HostProjectForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hostProjects"
          element={
            <ProtectedRoute>
              <HostProjects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UserQueries"
          element={
            <ProtectedRoute>
              <UserQueries />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
