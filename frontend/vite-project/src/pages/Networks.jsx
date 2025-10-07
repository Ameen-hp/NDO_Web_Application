import React from "react";
import { Zap, Droplet, Shield, Globe, Handshake, Users, TrendingUp, DollarSign, ArrowRight, CheckCircle, Brain, LayoutGrid, Award, Briefcase, MapPin, Hospital, Leaf } from 'lucide-react';

// --- Helper Component for Animated Counter (Simulates Framer Motion with data-aos) ---
const StatCounter = ({ target, title, icon: Icon, delay }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-emerald-600 transition duration-500 hover:shadow-xl hover:scale-[1.02]"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <Icon className="w-8 h-8 text-emerald-700 mb-2" />
      <div className="text-4xl font-extrabold text-gray-900 mb-1">
        {target}+
      </div>
      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider text-center">{title}</p>
    </div>
  );
};

// --- Helper Component for Network Cards ---
const NetworkCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-transparent hover:border-emerald-600 transform transition duration-500 hover:scale-[1.05] hover:shadow-2xl flex flex-col h-full"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-emerald-100 rounded-full mr-4">
        <Icon className="w-7 h-7 text-emerald-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    
    <p className="text-gray-600 text-sm mt-2">{description}</p>
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
      
      {/* 1. HERO SECTION */}
      <section
  className="relative h-[45vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden bg-gray-900 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/fieldWork/image1.jpg')", // Replace with your local or hosted image
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-600 opacity-80"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 text-white">
    <h1 
      className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white"
      data-aos="fade-right" // Or replace with Framer Motion slide-in
    >
      Our Networks & Collaborations
    </h1>
    <h2 
      className="max-w-4xl mx-auto text-lg md:text-xl font-light text-emerald-100"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      Together, we create sustainable change through strong partnerships and shared vision.
    </h2>
  </div>
</section>


      {/* 2. ABOUT OUR NETWORKS */}
      <section id="about-networks" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left Side (Text) */}
            <div className="md:col-span-7" data-aos="fade-right">
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 block">Leveraging Collective Strength</span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Why Networks are Vital to NDO’s Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The **Nari Development Organization (NDO)** is a proud member of multiple humanitarian and development networks working to improve women’s empowerment, health, disaster preparedness, and climate resilience across Sindh.
              </p>
              
              <p className="text-gray-600 italic border-l-4 border-emerald-500 pl-4 py-2">
                Through these vital networks, NDO exchanges knowledge, participates in crucial policy advocacy, standardizes best practices, and collaborates on national-level initiatives to maximize the reach and impact of our programs.
              </p>
            </div>
            
            {/* Right Side (Image/Illustration) */}
            <div className="md:col-span-5 relative" data-aos="fade-left">
              <div className="w-full h-80 bg-emerald-50 rounded-3xl shadow-2xl flex items-center justify-center p-8">
                {/* Network Illustration Placeholder */}
                <Globe className="w-full h-full text-emerald-400 opacity-70 p-4 animate-spin-slow" />
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
      <section id="memberships" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900" data-aos="fade-down">
              Our Core Network Memberships
            </h3>
            <p className="text-lg text-gray-600 mt-3" data-aos="fade-down" data-aos-delay="100">
              Engaging with leading platforms for knowledge sharing and joint action.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkMemberships.map((network, index) => (
              <NetworkCard key={index} {...network} delay={network.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLABORATION IMPACT SECTION (STATS) */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-10" data-aos="fade-down">Impact Through Partnership</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <StatCounter key={index} {...stat} delay={stat.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR KEY PARTNERS (Logo Showcase) */}
      <section id="key-partners" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900" data-aos="fade-down">
              Our Strategic Implementation Partners
            </h3>
            <p className="text-lg text-gray-600 mt-3" data-aos="fade-down" data-aos-delay="100">
              Working hand-in-hand with leading organizations to deliver on-the-ground change.
            </p>
          </div>

          {/* Logo Carousel Simulation using responsive grid and hover effects */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {partnersList.map((partner, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-100 rounded-xl shadow-md flex items-center justify-center h-24 transition duration-300 transform hover:scale-[1.05] group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Logo Placeholder - Text with Grayscale/Color effect */}
                <span className="text-lg font-semibold text-gray-500 group-hover:text-emerald-700 transition duration-300 text-center">
                    {/* Using only the first word or main acronym for cleaner visual separation */}
                    {partner.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
          {/* Note: Auto-scroll animation is omitted for simplicity in a single file component but would use CSS keyframes or a Framer Motion loop. */}

        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) SECTION */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <div 
            className="p-10 rounded-3xl border-4 border-emerald-300 max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Let’s Work Together to Create Lasting Impact
            </h3>
            <p className="text-xl font-medium text-gray-700 mb-8">
              Join hands with NDO to empower communities and rebuild lives across Sindh.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 text-xl font-bold text-white bg-emerald-600 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-emerald-700"
            >
              <Handshake className="w-6 h-6 mr-3" /> Become a Partner
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
