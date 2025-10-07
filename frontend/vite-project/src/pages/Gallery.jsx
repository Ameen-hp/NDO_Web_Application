import React, { useState, useEffect } from "react";
import { Zap, Droplet, Shield, Globe, Handshake, Users, ChevronLeft, ChevronRight, X, Image, BookOpen, Leaf, TrendingUp } from 'lucide-react';

// --- Data for the Gallery ---
const galleryData = [
  { id: 1, category: "Emergency Relief", caption: "Food distribution during 2022 floods in Dadu.", url: "images/floodsWork/image1.jpg" },
  { id: 2, category: "Women Empowerment", caption: "Vocational skills training for rural women.", url: "images/floodsWork/image2.jpg" },
  { id: 3, category: "Health & Hygiene (WASH)", caption: "Community session on menstrual hygiene management (MHM).", url: "images/floodsWork/image3.jpg" },
  { id: 4, category: "Awareness Sessions", caption: "Polio vaccination awareness drive.", url: "images/floodsWork/image4.jpg" },
  { id: 5, category: "School Rehabilitation", caption: "Rehabilitated WASH facility at a government school.", url: "images/floodsWork/image5.jpg" },
  { id: 6, category: "Emergency Relief", caption: "Installation of temporary pit latrines in flood camps.", url: "images/floodsWork/image6.jpg" },
  { id: 7, category: "Women Empowerment", caption: "Advocacy meeting with women leaders.", url: "images/floodsWork/image7.jpg" },
  { id: 8, category: "Health & Hygiene (WASH)", caption: "Distribution of hygiene kits to affected families.", url: "images/floodsWork/image8.jpg" },
  { id: 9, category: "Emergency Relief", caption: "Medical camp providing free health checkups.", url: "images/floodsWork/image9.jpg" },
  { id: 10, category: "Awareness Sessions", caption: "Training farmers on climate resilience practices.", url: "images/floodsWork/image10.jpg" },
  { id: 11, category: "School Rehabilitation", caption: "Classroom renovation work.", url: "images/floodsWork/image11.jpg" },
  { id: 12, category: "Women Empowerment", caption: "Handicraft exhibition by trained women.", url: "images/floodsWork/image12.jpg" },
  { id: 13, category: "Emergency Relief", caption: "Distribution of nutrient food items.", url: "images/floodsWork/image13.jpg" },
  { id: 14, category: "Health & Hygiene (WASH)", caption: "Water purification awareness session.", url: "images/floodsWork/image14.jpg" },
  { id: 15, category: "School Rehabilitation", caption: "Students returning to rehabilitated school.", url: "images/floodsWork/image15.jpg" },
  { id: 16, category: "Women Empowerment", caption: "MHM corner established.", url: "images/floodsWork/image16.jpg" },
  { id: 17, category: "Awareness Sessions", caption: "Community meeting on DRR practices.", url: "images/floodsWork/image17.jpg" },
  { id: 18, category: "Emergency Relief", caption: "Flood anticipatory action project implementation.", url: "images/floodsWork/image18.jpg" },
];

const categories = [
  "All", "Emergency Relief", "Women Empowerment", "Health & Hygiene (WASH)", 
  "Awareness Sessions", "School Rehabilitation"
];

// --- Lightbox/Modal Component ---
const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 z-10 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="md:flex">
            <img 
              src={image.url} 
              alt={image.caption} 
              className="w-full md:w-3/4 h-auto max-h-[70vh] object-cover transition-all duration-500"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/047857/ffffff?text=Image+Unavailable" }} 
            />
            <div className="md:w-1/4 p-6 bg-gray-50 flex flex-col justify-center">
                <p className="text-sm font-semibold text-emerald-600 uppercase mb-2">{image.category}</p>
                <p className="text-xl font-bold text-gray-900">{image.caption}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Gallery Card Component ---
const GalleryCard = ({ image, openModal, delay }) => {
    return (
        <div 
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group transition duration-500 ease-in-out transform"
            data-aos="fade-up" // Simulating Framer Motion fade-up
            data-aos-delay={delay}
            onClick={() => openModal(image)}
        >
            {/* Image and Zoom Effect */}
            <div className="aspect-square overflow-hidden"> {/* Ensuring consistent aspect ratio for hover */}
                <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/047857/ffffff?text=Image+Unavailable" }} 
                />
            </div>
            
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <div>
                    <p className="text-xs font-semibold text-emerald-300 uppercase">{image.category}</p>
                    <p className="text-sm text-white font-medium line-clamp-2">{image.caption}</p>
                </div>
            </div>
        </div>
    );
}


export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const filteredImages = galleryData.filter(img => 
    activeFilter === "All" || img.category === activeFilter
  );

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const highlightedMoments = [
      { id: 1, caption: "Distributed food and NFIs to 1,200 families.", url: "images/heigligtedMoments/image1.jpg" },
      { id: 2, caption: "Trained 8,000+ farmers in sustainable practices.", url: "images/heigligtedMoments/image3.jpg" },
      { id: 3, caption: "Conducted 310+ hygiene promotion sessions.", url: "https://placehold.co/500x300/10B981/ffffff?text=Moment+3" },
      { id: 4, caption: "Partnered with WaterAid for WASH projects.", url: "images/heigligtedMoments/image3.jpg" },
  ];
  
  // Custom utility function to determine column span for pseudo-masonry layout
  // This uses aspect ratio based on original placeholder size to simulate height difference
  const getAspectRatio = (url) => {
    if (url.includes("400x600") || url.includes("300x500")) return "aspect-3/4"; // Taller
    if (url.includes("600x300") || url.includes("550x300")) return "aspect-video"; // Wider
    return "aspect-square"; // Default 1:1 or similar
  }

  // Effect to manage body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);


  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 pt-16">
      
      {/* 1. HERO SECTION */}
     <section
  className="relative h-[40vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gray-900 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/fieldWork/image14.jpg')", // Replace with your local image path
  }}
>
  {/* Green Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-600 opacity-60"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 text-white">
    <h1 
      className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
      data-aos="fade-down" // Or Framer Motion animation
    >
      NDO Activities & Gallery
    </h1>
    <h2 
      className="max-w-3xl mx-auto text-lg md:text-xl font-light text-emerald-100"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      Capturing our journey of hope, empowerment, and transformation.
    </h2>
  </div>
</section>


      {/* 2. FILTER & CATEGORY SECTION */}
      <section id="filters" className="py-12 bg-white sticky top-0 z-20 shadow-md">
        <div className="container mx-auto px-6">
            <div 
                className="flex flex-wrap justify-center gap-3 md:gap-4"
                data-aos="fade-in"
                data-aos-delay="300"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`
                            px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform 
                            ${activeFilter === category 
                                ? 'bg-emerald-600 text-white shadow-lg scale-105' 
                                : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* 3. RESPONSIVE IMAGE GALLERY SECTION (Masonry Simulation) */}
      <section id="gallery-grid" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
                <h3 className="text-4xl font-bold text-gray-900">
                    {activeFilter} Efforts
                </h3>
            </div>
          
            {/* Pseudo-Masonry Grid using Tailwind CSS columns */}
            {filteredImages.length > 0 ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredImages.map((image, index) => (
                        <div key={image.id} className="break-inside-avoid">
                            <GalleryCard 
                                image={image} 
                                openModal={openModal} 
                                delay={index * 50} 
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-xl text-gray-600">
                    No images found for "{activeFilter}".
                </div>
            )}
        </div>
      </section>
      
      {/* 5. HIGHLIGHTED MOMENTS SECTION (Carousel Simulation) */}
      <section id="highlighted-moments" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 block">Featured Successes</span>
                <h3 className="text-4xl font-bold text-gray-900">
                    Highlighted Moments in Our Journey
                </h3>
            </div>
            
            {/* Horizontal Scroll Carousel */}
            <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4 scrollbar-hide">
                {highlightedMoments.map((moment, index) => (
                    <div 
                        key={moment.id} 
                        className="flex-shrink-0 w-11/12 sm:w-1/2 lg:w-1/3 snap-center"
                        data-aos="slide-left"
                        data-aos-delay={index * 150}
                    >
                        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl border border-gray-100">
                            <img 
                                src={moment.url} 
                                alt={moment.caption} 
                                className="w-full h-48 object-cover" 
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/047857/ffffff?text=Moment+Unavailable" }} 
                            />
                            <div className="p-4">
                                <p className="text-base font-medium text-gray-700">{moment.caption}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* Custom CSS for hiding scrollbar on the carousel */}
        <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
        `}</style>
      </section>


      {/* 6. CTA SECTION (Join Us) */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <div 
            className="p-10 rounded-3xl border-4 border-emerald-300 max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Every picture tells a story of hope.
            </h3>
            <p className="text-xl font-medium text-gray-700 mb-8">
              Be part of our journey to empower communities and protect human dignity.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 text-xl font-bold text-white bg-emerald-600 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-emerald-700"
            >
              <Users className="w-6 h-6 mr-3" /> Join NDO
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox image={modalImage} onClose={closeModal} />
      
    </div>
  );
}
