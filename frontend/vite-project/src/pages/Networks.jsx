import React from "react";
// All necessary icons are imported
import { Zap, Droplet, Shield, Globe, Handshake, Users, TrendingUp, DollarSign, ArrowRight, CheckCircle, Brain, LayoutGrid, Award, Briefcase, MapPin, Hospital, Leaf } from 'lucide-react';

// --- Helper Component for Animated Counter (Restyled) ---
const StatCounter = ({ target, title, icon: Icon, delay }) => {
  return (
    <div 
      // Restyled with Violet background and Rose/Amber highlights
      className="flex flex-col items-center p-8 bg-violet-700 text-white rounded-2xl shadow-xl border-b-4 border-amber-400 transition duration-500 hover:shadow-2xl hover:scale-[1.03]"
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <Icon className="w-10 h-10 text-rose-300 mb-3" />
      <div className="text-5xl font-extrabold mb-2 tracking-tight">
        {target}+
      </div>
      <p className="text-sm font-bold text-amber-400 uppercase tracking-widest text-center">{title}</p>
    </div>
  );
};

// --- Helper Component for Network Cards (Restyled) ---
const NetworkCard = ({ icon: Icon, title, description, delay }) => (
  <div
    // Modern card style with violet top border and rose hover effect
    className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-rose-500 transform transition duration-500 hover:shadow-violet-400/50 hover:scale-[1.02] flex flex-col h-full group overflow-hidden relative"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Subtle Amber highlight on top-right */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200 opacity-20 rounded-bl-3xl transition duration-500 group-hover:w-20 group-hover:h-20"></div>

    <div className="flex items-center mb-4">
      {/* Icon styled with Rose/Violet theme */}
      <div className="p-3 bg-violet-100 rounded-full mr-4 shadow-md flex-shrink-0">
        <Icon className="w-7 h-7 text-rose-600 transition duration-300 group-hover:text-violet-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
    </div>
    
    <p className="text-gray-700 text-base mt-2">{description}</p>
  </div>
);


export default function Networks() {
  
  const networkMemberships = [
    {
      icon: Zap,
      title: "Start Network (Ready Pakistan)",
      description: "A vital collaborative network focused on early response, innovation, and effective humanitarian coordination during crises.",
      delay: "0"
    },
    {
      icon: Users,
      title: "National Humanitarian Network (NHN)",
      description: "A platform that advocates for effective humanitarian practices, policy influence, and standard setting across Pakistan.",
      delay: "150"
    },
    {
      icon: Award,
      title: "Humanitarian Response Forum (HRF)",
      description: "Engages in joint relief activities, collective advocacy, and coordinated national crisis response efforts.",
      delay: "300"
    },
    {
      icon: Droplet,
      title: "Women Action Forum (WAF)",
      description: "Dedicated to promoting gender equality, women’s rights, and advocating for feminist socio-political reform.",
      delay: "450"
    },
    {
      icon: Leaf,
      title: "PPCHI (Climate/Humanitarian)",
      description: "Provincial Platform on Climate Change and Humanitarian Issues, working on climate advocacy and disaster management.",
      delay: "600"
    },
    {
      icon: Hospital,
      title: "District Health Forum, Dadu",
      description: "Collaborates directly on improving local health systems, disease surveillance, and emergency health responses.",
      delay: "750"
    }
  ];

  const partnersList = [
    "WaterAid Pakistan", "HANDS", "TRDP", "SPO", "PODA", "DDMA (District Disaster Management Authority)", 
    "USAID-SGAFP", "Scope Pakistan", "UN-WOMEN / SPO", "REEDS Pakistan", "Directorate of Youth Affairs Govt. of Sindh", "District Government"
  ];

  const impactStats = [
    { icon: Handshake, target: 20, title: "Collaborations", delay: "0" },
    { icon: LayoutGrid, target: 100, title: "Joint Relief Projects", delay: "100" },
    { icon: Users, target: 50000, title: "People Impacted", delay: "200" },
    { icon: Briefcase, target: 30, title: "Policy Advocacy Sessions", delay: "300" },
  ];


  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 pt-16">
      
      {/* 1. HERO SECTION - Rose/Violet Gradient Overlay */}
      <section
        className="relative h-[45vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fieldWork/image1.jpg')", // Ensure this path is correct
        }}
      >
        {/* Gradient Overlay: Rose to Violet */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-violet-700 opacity-80"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white tracking-tight"
            data-aos="fade-right"
          >
            Our <span className="text-amber-300">Networks</span> & Collaborations
          </h1>
          <h2 
            className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-rose-100"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Together, we create sustainable change through strong partnerships and shared vision.
          </h2>
        </div>
      </section>

      {/* 2. ABOUT OUR NETWORKS - Enhanced Layout and Styling */}
      <section id="about-networks" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            
            {/* Left Side (Text) */}
            <div className="md:col-span-7" data-aos="fade-right">
              <span className="text-base font-bold text-rose-600 uppercase tracking-widest mb-3 block">Leveraging Collective Strength</span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Why Networks are Vital to NDO’s Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The **Nari Development Organization (NDO)** is a proud member of multiple humanitarian and development networks working to improve women’s empowerment, health, disaster preparedness, and climate resilience across Sindh.
              </p>
              
              <p className="text-xl text-gray-700 italic border-l-4 border-violet-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
                Through these vital networks, NDO exchanges knowledge, participates in crucial policy advocacy, standardizes best practices, and collaborates on national-level initiatives to maximize the reach and impact of our programs.
              </p>
            </div>
            
            {/* Right Side (Image/Illustration) */}
            <div className="md:col-span-5 relative" data-aos="fade-left">
              <div className="w-full h-96 bg-violet-100 rounded-3xl shadow-2xl flex items-center justify-center p-8 border-4 border-rose-400">
                {/* Network Illustration Placeholder with Rose-colored Globe */}
                <Globe className="w-full h-full text-rose-400 opacity-60 p-4 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom CSS for Globe animation (Framer Motion simulation) */}
        <style jsx global>
          {`
            @keyframes spin-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 20s infinite linear;
            }
          `}
        </style>
      </section>

      {/* 3. OUR NETWORK MEMBERSHIPS */}
      <section id="memberships" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900" data-aos="fade-down">
              Our Core Network Memberships 🌐
            </h3>
            <p className="text-xl text-gray-700 mt-3 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
              Engaging with leading platforms for knowledge sharing and joint action.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {networkMemberships.map((network, index) => (
              <NetworkCard key={index} {...network} delay={network.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLABORATION IMPACT SECTION (STATS) - Rose Background */}
      <section className="py-20 bg-rose-600 text-white relative overflow-hidden">
        {/* Subtle Violet background shape for visual interest */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 10% 90%, #8A2BE2, transparent 50%), radial-gradient(circle at 90% 10%, #E75480, transparent 50%)' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-10" data-aos="fade-down">Impact Through Partnership 💪</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <StatCounter key={index} {...stat} delay={stat.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR KEY PARTNERS (Logo Showcase) - Enhanced Grid */}
      <section id="key-partners" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900" data-aos="fade-down">
              Our Strategic Implementation Partners 🤝
            </h3>
            <p className="text-xl text-gray-700 mt-3 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
              Working hand-in-hand with leading organizations to deliver on-the-ground change.
            </p>
          </div>

          {/* Partner Grid - Modernized with Amber hover border */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {partnersList.map((partner, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-xl shadow-lg border-2 border-transparent flex items-center justify-center h-28 transition duration-500 transform hover:scale-[1.05] hover:shadow-xl group hover:border-amber-500"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Logo Placeholder - Text with Violet/Rose highlight */}
                <span className="text-lg font-semibold text-gray-500 group-hover:text-violet-700 transition duration-300 text-center px-1">
                  {/* Using only the first word or main acronym for cleaner visual separation */}
                  {partner.split(' ')[0]}
                </span>
                {/* Optional: Add a subtle Rose color dot/icon */}
                <CheckCircle className="w-5 h-5 text-rose-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-1 right-1"/>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) SECTION - Soft background for transition */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <div 
            // Enhanced CTA box style
            className="p-10 md:p-12 rounded-3xl border-4 border-violet-400 bg-white max-w-5xl mx-auto shadow-2xl"
            data-aos="zoom-in"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Let’s Work Together to Create Lasting Impact
            </h3>
            <p className="text-xl font-medium text-gray-700 mb-10">
              Join hands with NDO to empower communities and rebuild lives across Sindh.
            </p>
            <a 
              href="/contact" 
              // Button with Rose/Violet Gradient
              className="inline-flex items-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-rose-600 to-violet-600 rounded-full shadow-xl transition duration-500 transform hover:scale-105 hover:shadow-rose-900/50"
            >
              <Handshake className="w-6 h-6 mr-3" /> Become a Partner
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}