import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Users, Eye } from "lucide-react";

// DO NOT CHANGE: Backend URL constant
const BACKEND_URL = "http://localhost:5000";

// --- Helper Component for Lightbox (Modal) ---
const Lightbox = ({ project, onClose }) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (project) {
      setIndex(0);
    }
  }, [project]);

  if (!project) return null;

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(138,43,226,0.7)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white p-3 rounded-full bg-violet-600 bg-opacity-80 hover:bg-rose-600 transition duration-300 z-10 shadow-lg"
        >
          <X className="w-7 h-7" />
        </button>

        {/* 1. Image Display Section */}
        <div className="relative">
          <img
            src={`${BACKEND_URL}${project.images[index]}`}
            alt={project.title}
            className="w-full h-[80vh] object-contain bg-gray-900 rounded-t-2xl"
          />
          {project.images.length > 1 && (
            <>
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-violet-600 bg-opacity-50 p-4 rounded-full hover:bg-opacity-90 transition duration-300 shadow-xl"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-violet-600 bg-opacity-50 p-4 rounded-full hover:bg-opacity-90 transition duration-300 shadow-xl"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            </>
          )}
        </div>

        {/* 2. Info Section - BELOW THE IMAGE */}
        <div className="p-8 bg-gray-50 text-gray-800 border-t-4 border-rose-500">
          <p className="text-sm font-extrabold text-violet-600 uppercase mb-2 tracking-widest">
            {project.category}
          </p>
          <h2 className="text-3xl font-bold mb-3 text-gray-900">{project.title}</h2>
          <p className="text-base text-gray-700 leading-relaxed">{project.description}</p>
          <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-200">
            <p className="text-sm font-medium text-rose-500">
              Image {index + 1} of {project.images.length}
            </p>
            <p className="text-sm text-gray-500">
              Date: {new Date(project.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Component for Project Card - REVISED ---
const GalleryCard = ({ project, openModal }) => {
  const [index, setIndex] = useState(0);

  // Automatic image cycling logic (DO NOT REMOVE)
  useEffect(() => {
    let interval;
    if (project.images.length > 1) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % project.images.length);
      }, 2000); 
    }
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div
      // Main Card Container: Now has shadow and background
      className="bg-white rounded-2xl shadow-xl border border-gray-100 cursor-pointer group transition duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-violet-300/50 overflow-hidden"
      data-aos="fade-up" 
      data-aos-delay="100"
    >
      
      {/* 1. Image Area (Clickable & Animated) */}
      <div 
        className="relative aspect-square overflow-hidden"
        onClick={() => openModal(project)}
      >
        <img
          src={`${BACKEND_URL}${project.images[index]}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/400x500/E75480/ffffff?text=Image+Unavailable"; 
          }}
        />
        {/* Hover Action Indicator (Simplified) */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <Eye className="w-10 h-10 text-amber-300"/>
        </div>
      </div>
      
      {/* 2. Info Section - Displayed Permanently Below the Image */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-extrabold text-violet-600 uppercase tracking-widest">
                {project.category}
            </p>
            <p className="text-xs text-gray-500">
                {new Date(project.date).toLocaleDateString()}
            </p>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-1">
            {project.title}
        </h3>
        {/* Optional: Brief description snippet */}
        <p className="text-sm text-gray-600 line-clamp-3">
            {project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}
        </p>
      </div>

    </div>
  );
};

// --- Main Gallery Component ---
export default function Gallery() {
  // KEEP ALL STATE AND DATA FETCHING LOGIC AS-IS
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // DO NOT CHANGE API CALL
        const res = await fetch(`${BACKEND_URL}/api/projects`);
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
        setFilteredProjects(data);
        const uniqueCats = ["All", ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") setFilteredProjects(projects);
    else setFilteredProjects(projects.filter((p) => p.category === category));
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-violet-600">
        <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading impactful projects...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl">
        Error fetching data: {error}
      </div>
    );

  return (
    <div className="font-sans bg-gray-50 text-gray-800 pt-16">
      
      {/* Hero Section - Themed */}
      <section
        className="relative h-[40vh] md:h-[60vh] flex items-center justify-center text-center bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fieldWork/image14.jpg')",
        }}
      >
        {/* Gradient Overlay: Rose to Violet */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-violet-700 opacity-70"></div>
        <div className="relative z-10 text-white px-6" data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-amber-300">Project</span> Gallery
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 font-light">
            Discover the impactful initiatives we’ve brought to life.
          </p>
        </div>
      </section>

      {/* --- */}

      {/* Filters Section - Sticky and Themed */}
      <section className="py-8 bg-white sticky top-0 z-20 shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-5 py-2 rounded-full font-bold transition-all duration-300 shadow-md ${
                activeFilter === category
                  // Active Filter: Rose/Violet Gradient with Amber highlight
                  ? "bg-gradient-to-r from-rose-600 to-violet-600 text-white scale-[1.05] shadow-violet-400/50"
                  // Inactive Filter: Subtle Themed Hover
                  : "bg-gray-100 text-gray-700 hover:bg-rose-50 hover:text-rose-600"
              }`}
              data-aos="zoom-in"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* Gallery Grid - Masonry Layout */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              <span className="text-rose-600">{activeFilter}</span> Projects
            </h3>
            <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mt-3"></div>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {filteredProjects.map((project) => (
                <div key={project._id} className="break-inside-avoid">
                  <GalleryCard project={project} openModal={setModalProject} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl text-gray-600 p-10 bg-white rounded-xl shadow-lg">
              No projects found in the {activeFilter} category. Try another filter.
            </p>
          )}
        </div>
      </section>

      {/* --- */}

      {/* CTA - Themed */}
      <section className="py-20 bg-violet-700 text-center">
        <div className="container mx-auto px-6">
          <div className="p-10 md:p-12 border-4 border-amber-300 rounded-3xl max-w-5xl mx-auto bg-violet-800 shadow-2xl" data-aos="zoom-in">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Every project brings light to someone’s life.
            </h3>
            <p className="text-xl mb-8 text-violet-100">
              Join hands with us to support more impactful initiatives.
            </p>
            <a
              href="/contact"
              // Button: Violet to Rose Gradient on Hover
              className="inline-flex items-center px-10 py-4 text-xl font-bold text-violet-700 bg-white rounded-full shadow-2xl transition duration-500 transform hover:scale-105 hover:bg-gradient-to-r from-rose-500 to-violet-500 hover:text-white"
            >
              <Users className="w-6 h-6 mr-3" /> Join Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}