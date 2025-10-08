import React from "react";
// Ensure these imports cover all icons used in the existing and new structure
import { Zap, Droplet, Shield, Globe, Handshake, Users, TrendingUp, DollarSign, ArrowRight, CheckCircle, Hospital, Utensils, BookOpen, MapPin, Search } from 'lucide-react'; 

// --- Helper Component for Animated Counter ---
const StatCounter = ({ target, title, icon: Icon, delay }) => {
  // Enhanced style with Violet theme, Rose border
  return (
    <div 
      className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border-b-4 border-rose-500 transition duration-500 hover:shadow-2xl hover:scale-[1.03]"
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <Icon className="w-10 h-10 text-violet-700 mb-3" />
      <div className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
        {target}+
      </div>
      <p className="text-sm font-bold text-rose-600 uppercase tracking-widest text-center">{title}</p>
    </div>
  );
};

// --- Helper Component for Program Cards ---
const ProgramCard = ({ icon: Icon, title, description, items, delay }) => (
  <div
    // Updated styling: Lighter background, more dramatic shadow/hover effect
    className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-violet-500 transform transition duration-500 hover:shadow-2xl hover:border-rose-500 hover:scale-[1.02] flex flex-col h-full overflow-hidden group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-start mb-6">
      {/* Icon style changed to reflect the theme */}
      <div className="p-4 bg-rose-100 rounded-full mr-4 shadow-md flex-shrink-0">
        <Icon className="w-8 h-8 text-rose-600 group-hover:text-violet-700 transition duration-300" />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 leading-tight mt-1">{title}</h3>
    </div>
    
    <p className="text-gray-700 mb-6 italic">{description}</p>
    
    {/* List Style Enhanced */}
    <ul className="space-y-3 text-base text-gray-700 list-none mt-auto pt-4 border-t border-gray-100">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          {/* Amber highlight for checkmarks */}
          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 mr-3" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);


export default function Programs() {
  
  // Data for Major Program Areas (Existing)
  const programsData = [
    {
      icon: Droplet,
      title: "Water, Sanitation & Hygiene (WASH)",
      description: "Focusing on access to safe water and improved sanitation practices to prevent waterborne diseases and protect public health in marginalized areas.",
      items: [
        "Supplied clean drinking water to 600 families.",
        "Distributed hygiene kits and constructed women-friendly temporary pit latrines.",
        "Conducted 310 hygiene promotion sessions and awareness on MHM.",
        "Established MHM corners and trained women in making homemade sanitary pads.",
        "Rehabilitated WASH facilities in 3 government schools."
      ],
      delay: "0"
    },
    {
      icon: Zap,
      title: "Emergency Relief & Rehabilitation (ERR)",
      description: "Providing immediate assistance and long-term rehabilitation support to communities affected by natural disasters, especially floods and droughts.",
      items: [
        "Distributed food and non-food items among flood victims in multiple districts.",
        "Conducted medical camps and provided nutrient food items to affected families.",
        "Installed temporary pit latrines in flood relief camps.",
        "Organized awareness sessions on water purification and hygiene.",
        "Implemented flood anticipatory and drought preparedness projects with partners.",
        "Celebrated International Hand Wash Day in flood relief camps."
      ],
      delay: "200"
    },
    {
      icon: Shield,
      title: "Community Resilience & DRR",
      description: "Building the capacity of communities, particularly women, to mitigate risks and respond effectively to climate and disaster shocks through preparedness and planning.",
      items: [
        "Increased resilience of communities through gender-based disaster risk reduction (DRR) practices.",
        "Organized webinars linking IDPs with rural women leaders.",
        "Partnered with organizations like UN-WOMEN/SPO, HANDS, and Start Network Pakistan.",
        "Conducted 25 workshops on early warning systems and evacuation planning.", // Added content
        "Developed local disaster preparedness plans led by women community leaders.", // Added content
        "Facilitated training sessions on first aid and search & rescue techniques." // Added content
      ],
      delay: "400"
    }
  ];

  // Data for Impact Stats (Existing)
  const impactStats = [
    { icon: TrendingUp, target: 8000, title: "Farmers Trained", delay: "0" },
    { icon: Droplet, target: 600, title: "Families Supported with WASH", delay: "100" },
    { icon: Hospital, target: 310, title: "Health Sessions Conducted", delay: "200" },
    { icon: MapPin, target: 100, title: "Sanitation Units Built", delay: "300" },
  ];

  // Data for Networks and Partners (Existing)
  const partners = {
    networks: [
        "Start Network Ready Pakistan", "NHN (National Humanitarian Network)", "HRF (Human Rights Forum)", 
        "Women Action Forum (WAF)", "PPCHI (Pakistan Pakistan Coalition for Children in HIV/AIDS)", 
        "District Health Forum Dadu"
    ],
    partners: [
        "WaterAid Pakistan", "HANDS (Health and Nutrition Development Society)", "TRDP (Thardeep Rural Development Organization)", 
        "SPO (Strengthening Participatory Organization)", "PODA (Potohar Organization for Development Advocacy)", 
        "DDMA (District Disaster Management Authority)", "USAID-SGAFP", "Scope Pakistan"
    ]
  };

  return (
    // General background changed to soft, warm gray for contrast
    <div className="font-sans antialiased text-gray-800 bg-gray-50 pt-16">
      
      {/* 1. HERO SECTION - Vibrant Gradient Overlay - 'Networks' removed from heading */}
      <section
        className="relative h-[45vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: "url('../../public/images/fieldWork/image11.jpg')",
        }}
      >
        {/* Dynamic Rose/Violet Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-violet-700 opacity-70"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-white" data-aos="fade-in">
          <h1 
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight" // Bigger, bolder title
            data-aos="fade-down"
          >
            <span className="text-amber-300">Our</span> Programs
          </h1>
          <h2 
            className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-rose-100" // Larger subtitle, adjusted to remove network context
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Empowering lives through relief, rehabilitation, and sustainable development.
          </h2>
        </div>
      </section>

      {/* Wave Divider (Optional, but adds flow) */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="bg-gray-50">
        <path fill="#e75480" fillOpacity="0.1" d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      

      {/* 2. MAJOR PROGRAM AREAS - Heading Corrected */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-base font-bold text-rose-600 uppercase tracking-widest mb-2 block" data-aos="fade-down">Our Pillars of Work</span>
            <h3 className="text-5xl font-extrabold text-gray-900" data-aos="fade-down" data-aos-delay="100">
              Program Areas 🌟
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {programsData.map((program, index) => (
              <ProgramCard key={index} {...program} delay={program.delay} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. IMPACT STATS - Violet Background */}
      <section className="py-20 bg-violet-700 text-white relative overflow-hidden">
        {/* Subtle background pattern/shape */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-repeat" style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)" }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-14 text-white" data-aos="fade-down">Measuring Our Footprint 👣</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {impactStats.map((stat, index) => (
              // Note: StatCounter uses a white background and rose border for contrast
              <StatCounter key={index} {...stat} delay={stat.delay} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. NETWORKS & PARTNERS */}
      <section id="partners" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-base font-bold text-rose-600 uppercase tracking-widest mb-2 block" data-aos="fade-down">Collaboration is Key</span>
            <h3 className="text-5xl font-extrabold text-gray-900" data-aos="fade-down" data-aos-delay="100">
              Our Valuable Networks and Partners 🤝
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Networks Column */}
            <div className="p-10 bg-violet-50 rounded-3xl shadow-2xl border-l-4 border-rose-500" data-aos="fade-right">
              <div className="flex items-center mb-8">
                <Globe className="w-9 h-9 text-violet-700 mr-4" />
                <h4 className="text-3xl font-bold text-gray-900">National and International Networks</h4>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg">
                {partners.networks.map((network, index) => (
                  <li key={`net-${index}`} className="flex items-start group">
                    {/* Amber icon highlight */}
                    <ArrowRight className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0 transition duration-300 group-hover:text-rose-600" />
                    <span className="font-medium group-hover:text-gray-900 transition duration-300">{network}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners Column */}
            <div className="p-10 bg-violet-50 rounded-3xl shadow-2xl border-r-4 border-rose-500" data-aos="fade-left">
              <div className="flex items-center mb-8">
                <Handshake className="w-9 h-9 text-violet-700 mr-4" />
                <h4 className="text-3xl font-bold text-gray-900">Strategic Implementation Partners</h4>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {partners.partners.map((partner, index) => (
                  <div 
                    key={`par-${index}`} 
                    className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center transition duration-500 transform hover:scale-[1.05] hover:shadow-rose-300/50 hover:border-violet-500"
                  >
                    {/* Placeholder for Logo */}
                    <Users className="w-6 h-6 text-rose-600 mr-3 flex-shrink-0" />
                    <span className="text-base font-semibold text-gray-800">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY / VISUAL SECTION - Subtle Background */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-extrabold text-gray-900" data-aos="fade-down">
              Visualizing Our Work in the Field 📸
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                // Stronger hover scale and shadow
                className="overflow-hidden rounded-2xl shadow-xl border-4 border-white transform transition duration-500 hover:scale-105 hover:shadow-violet-400/50 aspect-square group"
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                {/* Image with subtle hover effect */}
                <img 
                  src={`images/ProgramsPictures/image${index + 1}.jpg`} 
                  alt={`NDO Field Activity ${index + 1}`} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  // Keep existing onError for robust loading
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/8A2BE2/ffffff?text=Activity+${index + 1}` }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION - Vibrant Rose Color */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div 
            // Stronger border and shadow
            className="p-10 md:p-12 rounded-3xl border-4 border-amber-300 max-w-5xl mx-auto shadow-2xl"
            data-aos="zoom-in"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Be Part of Our Mission 💖
            </h3>
            <p className="text-xl font-light mb-10 text-rose-100 max-w-3xl mx-auto">
              Your contribution helps us rebuild lives, restore hope, and drive sustainable change across marginalized communities.
            </p>
            <a 
              href="/donate" 
              // Rose to Violet Gradient Button on Hover
              className="inline-flex items-center px-12 py-4 text-xl font-bold text-rose-700 bg-white rounded-full shadow-2xl transition duration-500 transform hover:scale-105 hover:bg-gradient-to-r from-violet-500 to-rose-500 hover:text-white hover:shadow-rose-900/50"
            >
              <DollarSign className="w-6 h-6 mr-3" /> Donate Now
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}