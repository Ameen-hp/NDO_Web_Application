import React, { useState, useEffect } from "react";
import { Droplet, Users, HeartHandshake, BookOpen, MapPin, Target, Zap, TrendingUp, Handshake, CheckCircle, Scale, DollarSign, ArrowRight } from 'lucide-react';

// --- MOCK Component for Animated Counter ---
const ImpactCounter = ({ target, title, icon: Icon, delay }) => {
  // In a real application, this would use a library or useEffect to animate from 0 to target
  return (
    <div 
      className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border-t-4 border-emerald-500 transition duration-500 hover:shadow-2xl"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <Icon className="w-10 h-10 text-emerald-600 mb-3" />
      <div className="text-5xl font-extrabold text-gray-900 mb-1">
        {target}+
      </div>
      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">{title}</p>
    </div>
  );
};

// --- Helper Component for Approach Cards ---
const ApproachCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-emerald-500 transform hover:scale-[1.03] transition duration-500 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 mb-4 transition duration-500 group-hover:bg-emerald-600 group-hover:shadow-lg">
      <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);


export default function About() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        {/* Background Animation: Floating Shapes */}
        <div className="absolute inset-0 opacity-40">
          <Droplet className="w-20 h-20 text-emerald-100 absolute top-1/4 left-1/4 animate-float-slow" />
          <HeartHandshake className="w-16 h-16 text-emerald-100 absolute bottom-1/3 right-1/4 animate-float-medium" />
          <Users className="w-24 h-24 text-emerald-100 absolute top-10 right-10 animate-float-fast" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 leading-tight"
            data-aos="fade-down"
          >
            Empowering Women. Building Hope.
          </h1>
          <h2 
            className="max-w-4xl mx-auto text-xl md:text-2xl text-emerald-700 font-medium"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Nari Development Organization (NDO) is committed to uplifting poor and marginalized communities through rights-based development initiatives in Sindh, Pakistan.
          </h2>
        </div>
      </section>

      {/* 2. ABOUT NDO (WHO WE ARE) */}
      <section id="who-we-are" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            {/* Text Content */}
            <div className="md:col-span-7" data-aos="fade-right">
              <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2 block">Who We Are</span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Driving Sustainable Change in Sindh, Pakistan
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                **NDO is a non-profit, non-governmental organization** based in Sindh, Pakistan. Our core purpose is to protect basic human rights and serve the most vulnerable segments of society, focusing intensely on women and youth empowerment. We aim to create a peaceful, prosperous, and equitable society.
              </p>
              
              <div className="p-5 bg-emerald-50 rounded-xl border-l-4 border-emerald-600">
                <p className="font-semibold text-gray-800 italic">
                  We work to empower women, improve livelihoods, promote quality education, provide integrated healthcare, and protect human rights across our target districts.
                </p>
              </div>

              <p className="text-gray-600 mt-6 text-sm">
                Our success is built on collaboration with trusted local and international partners, including WaterAid Pakistan, HANDS, TRDP, and many others, to ensure maximum reach and efficiency in service delivery.
              </p>
            </div>
            
            {/* Image/Visual */}
            <div className="md:col-span-5 relative" data-aos="fade-left">
              <div className="w-full h-80 bg-gray-200 rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Placeholder Image for Community work */}
                <img 
                  src="../../public/images/CommunityWork.jpg" 
                  alt="Women working in community" 
                  className="w-full h-full object-cover transform transition duration-1000 hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/2E8B57/ffffff?text=NDO+Community+Work" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPROACH SECTION (HOW WE WORK) */}
      <section id="approach" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2 block" data-aos="fade-down">Our Methodology</span>
          <h3 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down" data-aos-delay="100">
            Our Approach: Rights-Based and People-Centered Development
          </h3>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-12" data-aos="fade-down" data-aos-delay="200">
            NDO adopts a **rights-based approach** that integrates social, cultural, political, and economic dimensions of development. We aim to empower both privileged and marginalized communities by building their capacity, raising awareness, and promoting advocacy.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ApproachCard
              icon={Users}
              title="Community Mobilization"
              description="Establishing CBOs and COs (Community Organizations) to ensure local ownership and grassroots decision-making."
              delay="0"
            />
            <ApproachCard
              icon={Scale}
              title="Awareness & Advocacy"
              description="Conducting campaigns and seminars on human rights, health (MHM), and social issues to drive public discourse and policy change."
              delay="100"
            />
            <ApproachCard
              icon={Handshake}
              title="Partnership Building"
              description="Collaborating with NGOs, government departments, and donors for effective resource mobilization and program synergy."
              delay="200"
            />
            <ApproachCard
              icon={BookOpen}
              title="Capacity Building"
              description="Providing vocational training, skill development (e.g., tailoring, literacy), and leadership training for women and youth."
              delay="300"
            />
            <ApproachCard
              icon={Zap}
              title="Emergency Response"
              description="Delivering prompt emergency relief (food, shelter, WASH kits) and initiating anticipatory actions for flood and drought victims."
              delay="400"
            />
            <ApproachCard
              icon={CheckCircle}
              title="Integrated Service Delivery"
              description="Offering holistic services in WASH, Health, Education, and Livelihoods within a single, coherent program framework."
              delay="500"
            />
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHICAL OUTREACH & 5. IMPACT HIGHLIGHTS */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6">
          
          {/* Geographical Outreach */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div data-aos="fade-right">
              <h3 className="text-4xl font-bold mb-4">Where We Work</h3>
              <p className="text-lg mb-6">
                Our operations are focused on the most marginalized and hard-to-reach areas of Sindh province. We are actively present in **Kamber Shehdadkot, Dadu, and Jamshoro districts**, ensuring our interventions create deep, localized impact where it is needed most.
              </p>
              <div className="flex items-center text-emerald-200">
                <MapPin className="w-6 h-6 mr-2" />
                <span className="font-semibold">Sindh Province: Kamber Shehdadkot, Dadu, Jamshoro</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white p-4 rounded-xl shadow-xl border-4 border-emerald-500" data-aos="zoom-in">
              <img 
                src="https://www.freeworldmaps.net/asia/pakistan/sindh/sindh-map.jpg" 
                alt="Geographical outreach map of Sindh" 
                className="w-full h-auto rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://maps.app.goo.gl/Lxe8kEMVuAyVkKK26" }} 
              />
            </div>
          </div>

          <hr className="border-emerald-600 my-10" />

          {/* Impact Highlights */}
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-10">Our Impact at a Glance</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ImpactCounter icon={Users} target={10000} title="Lives Impacted" delay="0" />
              <ImpactCounter icon={Droplet} target={600} title="Families in Flood Relief" delay="100" />
              <ImpactCounter icon={TrendingUp} target={8000} title="Farmers Trained" delay="200" />
              <ImpactCounter icon={HeartHandshake} target={300} title="Women Skilled" delay="300" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & Footer Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div 
            className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-emerald-500 max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Join the Movement for Change
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Together, we can build stronger communities and brighter futures for women and families in Sindh. Your support makes our work possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="/contact" 
                className="px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105"
              >
                Join Us
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 text-lg font-bold text-emerald-600 border-2 border-emerald-600 bg-white rounded-full shadow-lg hover:bg-emerald-50 transition duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <DollarSign className="w-5 h-5 mr-2" /> Donate Now
              </a>
            </div>
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <a href="/programs" className="inline-flex items-center text-lg font-semibold text-emerald-700 hover:text-emerald-900 transition duration-300 group">
              Learn more about our impact and programs
              <ArrowRight className="w-5 h-5 ml-2 transition duration-300 transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Required CSS for subtle animations */}
      <style jsx global>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes float-medium {
            0% { transform: translateY(0px) rotate(-5deg); }
            50% { transform: translateY(-15px) rotate(0deg); }
            100% { transform: translateY(0px) rotate(-5deg); }
          }
          @keyframes float-fast {
            0% { transform: translateY(0px) rotate(10deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(10deg); }
          }

          .animate-float-slow {
            animation: float-slow 10s infinite ease-in-out;
          }
          .animate-float-medium {
            animation: float-medium 8s infinite ease-in-out;
          }
          .animate-float-fast {
            animation: float-fast 12s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
