import React, { useEffect, useRef } from "react";
import {
  Droplet,
  Users,
  HeartHandshake,
  BookOpen,
  MapPin,
  Zap,
  TrendingUp,
  Handshake,
  CheckCircle,
  Scale,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Quote
} from "lucide-react";

import { Briefcase, GraduationCap, Phone, UserCheck } from 'lucide-react'; 

// NOTE: Ensure you have included an animation library like 'AOS' (Animate On Scroll) 
// in your project for the 'data-aos' attributes to function.

// --- MOCK Component for Animated Counter (Amber Focus) ---
const ImpactCounter = ({ target, title, icon: Icon, delay }) => {
  return (
    <div
      className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border-t-4 border-amber-500 transition duration-500 hover:shadow-2xl hover:shadow-amber-200/50 transform hover:scale-[1.03]"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      {/* Amber Icon */}
      <Icon className="w-10 h-10 text-amber-600 mb-3 transition duration-300 group-hover:scale-110" />
      {/* Rose Text for the Count */}
      <div className="text-5xl font-extrabold text-rose-600 mb-1">{target}+</div>
      {/* Amber Text for the Title */}
      <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
        {title}
      </p>
    </div>
  );
};

// --- Helper Component for Approach Cards (Violet/Rose Focus) ---
const ApproachCard = ({ icon: Icon, title, description, delay }) => (
  <div
    // Violet border on hover, soft Rose background
    className="bg-rose-50 p-6 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-violet-600 transform hover:scale-[1.03] transition duration-500 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Violet circle background, Rose icon on hover */}
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-100 mb-4 transition duration-500 group-hover:bg-rose-500 group-hover:shadow-xl">
      <Icon className="w-7 h-7 text-violet-600 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-rose-700 transition duration-300">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function About() {
  // useEffect is required here to ensure that the AOS library is initialized
  // This is a common pattern when using data-aos attributes in a React project
  /*
  useEffect(() => {
    // If you use a library like AOS:
    AOS.init({ duration: 1000, once: true });
  }, []);
  */

 
  const members = [
    {
      name: "Azra Memon",
      designation: "CEO Nari development org",
      qualification: "Post Graduation",
      experience: "15 Years",
      cnic: "41202-2462941-6",
      contact: "03443230529",
      message:
        "As a  CEO at Nari development org, I am proud to lead an organization that uplifts women and fosters equality through rights-based initiatives.",
      img: "/images/commityMembers/Azra.png",
    },
    {
      name: "Nasreen babar",
      designation: "Focal person AALTP NDO Center.",
      qualification: "Post Graduation",
      experience: "12 Years",
      cnic: "41202-6131381-8",
      contact: "03337078863",
      message:
        "As  a Focal person AALTP  at  Nari Development Organization center., my mission is to strengthen community engagement and empower women through knowledge and opportunity.",
      img: "/images/commityMembers/Nasreen.png",
    },
    {
      name: "Marie Baloch",
      designation: "Joint secretary Nari Development Organization",
      qualification: "Post Graduation",
      experience: "14 Years",
      cnic: "41202-0414495-4",
      contact: "03113405629",
      message:
        "As a  Joint secretary at Nari Development Organization, I ensure transparent communication and smooth execution of NDO’s vision for social change.",
      img: "/images/commityMembers/Marie.png",
    },
    // {
    //   name: "Anwar Khatoon",
    //   designation: "Joint Secretary",
    //   qualification: "Graduation",
    //   experience: "8 Years",
    //   cnic: "41203-7480593-2",
    //   contact: "03443230529",
    //   message:
    //     "Serving as Joint Secretary allows me to coordinate efforts that bring positive transformation to rural communities.",
    //   img: "/images/commityMembers/anwar.jpg",
    // },
    {
      name: "Tahira",
      designation: "Treasurer Nari development organization",
      qualification: "Post Graduation",
      experience: "12 Years",
      cnic: "41202-6026881-8",
      contact: "03110885896",
      message:
        "As a  Treasurer at Nari development organization, I’m committed to maintaining financial transparency and accountability for every project NDO undertakes.",
      img: "/images/commityMembers/Tahira.png",
    },
  ];


  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 pt-16">

      {/* 1. HERO SECTION (Rose/Violet Gradient) */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-rose-50 to-violet-50">
        {/* Subtle Floating Violet/Rose Shapes for Elegance */}
        <div className="absolute inset-0 opacity-40">
          <Droplet className="w-20 h-20 text-violet-200 absolute top-1/4 left-1/4 animate-float-slow" />
          <HeartHandshake className="w-16 h-16 text-rose-200 absolute bottom-1/3 right-1/4 animate-float-medium" />
          <Users className="w-24 h-24 text-violet-200 absolute top-10 right-10 animate-float-fast" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Rose Highlight for Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-rose-700 mb-4 leading-tight" data-aos="fade-down">
            Empowering Women. Building Hope.
          </h1>
          {/* Violet Text for Tagline */}
          <h2 className="max-w-4xl mx-auto text-xl md:text-2xl text-violet-700 font-medium" data-aos="fade-down" data-aos-delay="200">
            Nari Development Organization (NDO) is committed to uplifting poor and marginalized communities through rights-based development initiatives in Sindh, Pakistan.
          </h2>
        </div>
      </section>

      {/* 2. ABOUT NDO (WHO WE ARE) - Two-Column Layout */}
      <section id="who-we-are" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7" data-aos="fade-right">
              {/* Rose Accent for Section Title */}
              <span className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-3 block">Who We Are</span>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Driving Sustainable Change in Sindh, Pakistan</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" data-aos="fade-right" data-aos-delay="100">
                {/* Amber Highlight for Key Text */}
                <b>NDO is a <span className="text-amber-600">non-profit, non-governmental organization</span></b> based in Sindh, Pakistan. Our core purpose is to protect basic human rights and serve the most vulnerable segments of society, focusing intensely on women and youth empowerment. We aim to create a peaceful, prosperous, and equitable society.
              </p>
              {/* Violet Accent Panel */}
              <div className="p-5 bg-violet-50 rounded-xl shadow-md border-l-4 border-violet-600" data-aos="zoom-in" data-aos-delay="200">
                <p className="font-semibold text-gray-800 italic">
                  We work to empower women, improve livelihoods, promote quality education, provide integrated healthcare, and protect human rights across our target districts.
                </p>
              </div>
              <p className="text-gray-600 mt-6 text-sm" data-aos="fade-right" data-aos-delay="300">
                Our success is built on collaboration with trusted local and international partners, including WaterAid Pakistan, HANDS, TRDP, and many others, to ensure maximum reach and efficiency in service delivery.
              </p>
            </div>
            {/* Image Section with Depth and Hover Effect */}
            <div className="md:col-span-5 relative" data-aos="fade-left">
              <div className="w-full h-96 bg-gray-200 rounded-3xl shadow-2xl shadow-rose-300/50 overflow-hidden relative transform transition duration-500 hover:shadow-rose-500/50 hover:scale-[1.02]">
                <img
                  src="../../public/images/CommunityWork.jpg"
                  alt="Women working in community"
                  className="w-full h-full object-cover transform transition duration-1000 hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x600/E75480/ffffff?text=NDO+Community+Work";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 3. APPROACH SECTION */}
      <section id="approach" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Violet Accent */}
          <span className="text-sm font-bold text-violet-500 uppercase tracking-widest mb-3 block" data-aos="fade-down">Our Methodology</span>
          <h3 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down" data-aos-delay="100">Our Approach: Rights-Based and People-Centered Development</h3>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-16" data-aos="fade-down" data-aos-delay="200">
            NDO adopts a <b><span className="text-rose-600">rights-based approach</span></b> that integrates social, cultural, political, and economic dimensions of development. We aim to empower both privileged and marginalized communities by building their capacity, raising awareness, and promoting advocacy.
          </p>

          {/* Approach Cards (Two-Column for small screens, Three for large) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ApproachCard icon={Users} title="Community Mobilization" description="Establishing CBOs and COs (Community Organizations) to ensure local ownership and grassroots decision-making." delay="0" />
            <ApproachCard icon={Scale} title="Awareness & Advocacy" description="Conducting campaigns and seminars on human rights, health (MHM), and social issues to drive public discourse and policy change." delay="100" />
            <ApproachCard icon={Handshake} title="Partnership Building" description="Collaborating with NGOs, government departments, and donors for effective resource mobilization and program synergy." delay="200" />
            <ApproachCard icon={BookOpen} title="Capacity Building" description="Providing vocational training, skill development (e.g., tailoring, literacy), and leadership training for women and youth." delay="300" />
            <ApproachCard icon={Zap} title="Emergency Response" description="Delivering prompt emergency relief (food, shelter, WASH kits) and initiating anticipatory actions for flood and drought victims." delay="400" />
            <ApproachCard icon={CheckCircle} title="Integrated Service Delivery" description="Offering holistic services in WASH, Health, Education, and Livelihoods within a single, coherent program framework." delay="500" />
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 4. GEOGRAPHICAL OUTREACH & IMPACT HIGHLIGHTS (Violet Background) */}
      <section className="py-24 bg-violet-700 text-white">
        <div className="container mx-auto px-6">
          {/* Two-Column Outreach Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div data-aos="fade-right">
              <h3 className="text-4xl font-bold mb-4">Where We Work</h3>
              <p className="text-lg mb-6">Our operations are focused on the most marginalized and hard-to-reach areas of Sindh province. We are actively present in <b>Kamber Shehdadkot, Dadu, and Jamshoro districts</b>, ensuring our interventions create deep, localized impact where it is needed most.</p>
              {/* Rose Accent for Location Pin */}
              <div className="flex items-center text-rose-200">
                <MapPin className="w-6 h-6 mr-2 animate-pulse-slow" />
                <span className="font-semibold">Sindh Province: Kamber Shehdadkot, Dadu, Jamshoro</span>
              </div>
            </div>
            {/* Map Image with Rose/Amber Border and Zoom Animation */}
            <div className="bg-white p-3 rounded-xl shadow-2xl border-4 border-rose-500 transform transition duration-500 hover:border-amber-500" data-aos="zoom-in">
              <img src="https://www.freeworldmaps.net/asia/pakistan/sindh/sindh-map.jpg" alt="Geographical outreach map of Sindh" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <hr className="border-violet-600 my-12" />

          {/* Impact Highlights (Animated Counters) */}
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

      {/* --- */}

      {/* 5. EXECUTIVE COMMITTEE SECTION (Rose Accents) */}
     {/* // NOTE: Make sure to import the required icons (like GraduationCap, Briefcase, etc.)
// from a library like 'lucide-react' or similar. */}

<section
  id="committee"
  className="relative py-32 bg-slate-50 overflow-hidden"
>
  {/* Background Shape */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full"
    >
      <defs>
        <linearGradient id="vibrantGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "rgba(99, 102, 241, 1)" }} />
          <stop offset="100%" style={{ stopColor: "rgba(236, 72, 153, 1)" }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#vibrantGradient)"
        fillOpacity="0.8"
        d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,128C960,96,1056,96,1152,112C1248,128,1344,160,1392,176L1440,192L1440,0L0,0Z"
      ></path>
    </svg>
  </div>

  {/* Content */}
  <div className="container mx-auto px-6 relative z-10">
    <h2
      className="text-6xl font-extrabold text-center text-indigo-700 mb-6 tracking-tighter"
      data-aos="fade-up"
    >
      The <span className="text-pink-600">Executive</span> Council
    </h2>

    <p
      className="text-center text-slate-600 max-w-4xl mx-auto text-xl mb-24 font-light italic"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      "Visionary leadership drives our mission. Meet the highly qualified women
      leaders who guide <b>NDO</b> toward impactful and sustainable change."
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16 justify-items-center">
      {members.map((member, i) => (
        <div
          key={i}
          className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-200 transform transition duration-500 ease-out hover:scale-[1.03] hover:shadow-indigo-400/70 group"
          data-aos="zoom-in"
          data-aos-delay={i * 150}
        >
          {/* Image Section */}
          <div className="relative w-full h-96 sm:h-[420px] overflow-hidden bg-slate-100 flex justify-center items-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-auto h-full object-contain transition duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://placehold.co/500x600/A0AEC0/ffffff?text=No+Image';
              }}
            />

            {/* Designation Bar */}
            <div className="absolute bottom-0 left-0 right-0 py-4 bg-pink-600/95 text-white text-center shadow-lg">
              <p className="text-xl md:text-2xl font-semibold tracking-wide uppercase">
                {member.designation}
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 md:p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-6 mt-2 transition duration-300 group-hover:text-pink-500">
              {member.name}
            </h3>

            {/* Member Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-left py-6 border-y border-slate-100 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase text-amber-600 tracking-wider">
                    Qualification
                  </p>
                  <p className="text-base text-gray-700 font-medium">
                    {member.qualification}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase text-amber-600 tracking-wider">
                    Experience
                  </p>
                  <p className="text-base text-gray-700 font-medium">
                    {member.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase text-indigo-600 tracking-wider">
                    CNIC
                  </p>
                  <p className="text-base text-gray-700 font-medium">
                    {member.cnic}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase text-indigo-600 tracking-wider">
                    Contact
                  </p>
                  <p className="text-base text-gray-700 font-medium">
                    {member.contact}
                  </p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="relative p-6 bg-slate-50 rounded-xl shadow-inner border border-slate-200">
              <Quote className="w-8 h-8 text-pink-400 absolute top-[-10px] left-[-10px] transform rotate-180 opacity-70" />
              <p className="text-gray-700 italic text-lg leading-relaxed font-serif">
                {member.message}
              </p>
              <Quote className="w-8 h-8 text-pink-400 absolute bottom-[-10px] right-[-10px] opacity-70" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* --- */}

      {/* 6. CALL TO ACTION (Amber CTA) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div 
            // Amber Accent Border
            className="bg-white p-10 rounded-3xl shadow-2xl shadow-amber-200/50 border-t-8 border-amber-500 max-w-4xl mx-auto" 
            data-aos="zoom-in"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Join the Movement for Change</h3>
            <p className="text-xl text-gray-700 mb-8">Together, we can build stronger communities and brighter futures for women and families in Sindh. Your support makes our work possible.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Primary CTA Button (Amber) */}
              <a href="/contact" className="px-8 py-4 text-lg font-bold text-white bg-amber-500 rounded-full shadow-lg shadow-amber-300/50 hover:bg-amber-600 transition duration-300 transform hover:scale-105 hover:shadow-amber-500/70">Join Us</a>
              
              {/* Secondary CTA Button (Rose Border) */}
              <a href="/contact" className="px-8 py-4 text-lg font-bold text-rose-600 border-2 border-rose-600 bg-white rounded-full shadow-lg hover:bg-rose-50 transition duration-300 transform hover:scale-105 flex items-center justify-center">
                <DollarSign className="w-5 h-5 mr-2" /> Donate Now
              </a>
            </div>
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            {/* Violet Link */}
            <a href="/programs" className="inline-flex items-center text-lg font-semibold text-violet-700 hover:text-violet-900 transition duration-300 group">
              Learn more about our impact and programs
              <ArrowRight className="w-5 h-5 ml-2 transition duration-300 transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}