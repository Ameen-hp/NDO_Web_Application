import React from "react";
import { Zap, Droplet, Shield, Globe, Handshake, Users, TrendingUp, DollarSign, ArrowRight, CheckCircle, Hospital, Utensils, BookOpen, MapPin, Search } from 'lucide-react';

// --- Helper Component for Animated Counter ---
const StatCounter = ({ target, title, icon: Icon, delay }) => {
  // Mocking the animated counter functionality with Framer Motion (using data-aos for simulation)
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

// --- Helper Component for Program Cards ---
const ProgramCard = ({ icon: Icon, title, description, items, delay }) => (
  <div
    className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-emerald-500 transform transition duration-500 hover:shadow-2xl hover:border-emerald-700 flex flex-col h-full"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-center mb-5">
      <div className="p-3 bg-emerald-100 rounded-full mr-4">
        <Icon className="w-8 h-8 text-emerald-700" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    
    <p className="text-gray-600 mb-4">{description}</p>
    
    <ul className="space-y-3 text-sm text-gray-700 list-none mt-auto">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1 mr-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);


export default function Programs() {
  
  // Data for Major Program Areas
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
        "Partnered with organizations like UN-WOMEN/SPO, HANDS, and Start Network Pakistan."
      ],
      delay: "400"
    }
  ];

  // Data for Impact Stats
  const impactStats = [
    { icon: TrendingUp, target: 8000, title: "Farmers Trained", delay: "0" },
    { icon: Droplet, target: 600, title: "Families Supported with WASH", delay: "100" },
    { icon: Hospital, target: 310, title: "Health Sessions Conducted", delay: "200" },
    { icon: MapPin, target: 100, title: "Sanitation Units Built", delay: "300" },
  ];

  // Data for Networks and Partners
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
    <div className="font-sans antialiased text-gray-800 bg-gray-50 pt-16">
      
      {/* 1. HERO SECTION */}
      <section
  className="relative h-[45vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gray-900 bg-cover bg-center"
  style={{
    backgroundImage: "url('../../public/images/fieldWork/image11.jpg')",
  }}
>
  {/* Green overlay */}
  <div className="absolute inset-0 bg-emerald-700 opacity-40"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 text-white" data-aos="fade-in">
    <h1 
      className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
      data-aos="fade-down"
    >
      Our Programs & Networks
    </h1>
    <h2 
      className="max-w-3xl mx-auto text-lg md:text-xl font-light"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      Empowering lives through relief, rehabilitation, and sustainable development.
    </h2>
  </div>
</section>


      {/* 2. MAJOR PROGRAM AREAS */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 block" data-aos="fade-down">Our Pillars of Work</span>
            <h3 className="text-4xl font-bold text-gray-900" data-aos="fade-down" data-aos-delay="100">
              Thematic Program Areas
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {programsData.map((program, index) => (
              <ProgramCard key={index} {...program} delay={program.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS (Moved up for better flow) */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-10" data-aos="fade-down">Measuring Our Footprint</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <StatCounter key={index} {...stat} delay={stat.delay} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. NETWORKS & PARTNERS */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 block" data-aos="fade-down">Collaboration is Key</span>
            <h3 className="text-4xl font-bold text-gray-900" data-aos="fade-down" data-aos-delay="100">
              Our Valuable Networks and Partners
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Networks Column */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-lg" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-emerald-700 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-900">National and International Networks</h4>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg">
                {partners.networks.map((network, index) => (
                  <li key={`net-${index}`} className="flex items-center group">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 transition duration-300 group-hover:text-emerald-700" />
                    <span className="group-hover:text-gray-900 transition duration-300">{network}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners Column */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-lg" data-aos="fade-left">
              <div className="flex items-center mb-6">
                <Handshake className="w-8 h-8 text-emerald-700 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-900">Strategic Implementation Partners</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {partners.partners.map((partner, index) => (
                  <div key={`par-${index}`} className="p-4 bg-white rounded-lg shadow-md border border-gray-100 flex items-center transition duration-300 hover:shadow-xl hover:border-emerald-500">
                    {/* Placeholder for Logo */}
                    <BookOpen className="w-6 h-6 text-emerald-600 mr-3 opacity-70" />
                    <span className="text-sm font-medium text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY / VISUAL SECTION */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900" data-aos="fade-down">
              Visualizing Our Work in the Field
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.05] hover:shadow-2xl aspect-square"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={`images/ProgramsPictures/image${index + 1}.jpg`} 
                  alt={`NDO Field Activity ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/2E8B57/ffffff?text=Activity+${index + 1}` }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div 
            className="p-10 rounded-3xl border-4 border-emerald-400 max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <h3 className="text-4xl font-bold mb-4">
              Be Part of Our Mission
            </h3>
            <p className="text-xl font-light mb-8 text-emerald-100">
              Your contribution helps us rebuild lives, restore hope, and drive sustainable change across marginalized communities.
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center px-10 py-4 text-xl font-bold text-emerald-700 bg-white rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-100"
            >
              <DollarSign className="w-6 h-6 mr-3" /> Donate Now
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
