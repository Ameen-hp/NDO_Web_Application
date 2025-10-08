import React, { useEffect } from 'react';
import { Droplet, HeartHandshake, School, User, ChevronRight, Scale, Users, CheckCircle, Banknote, MapPin } from 'lucide-react';

// Placeholder image URL for the about section
const image38 = "https://images.unsplash.com/photo-1542810634-71277d95ae35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// --- Custom Components/Placeholders ---
const ImpactCounter = ({ number, title, icon: Icon }) => (
  <div
    className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl transition duration-500 transform hover:scale-[1.05] hover:shadow-violet-600/30"
    data-aos="fade-up"
    data-aos-once="true"
  >
    <Icon className="w-12 h-12 text-amber-500 mb-3 transition duration-300 group-hover:text-amber-600" />
    <h2 
      className="text-5xl font-extrabold text-violet-700 mb-2"
      data-count={number}
    >
      {number.toLocaleString()}+
    </h2>
    <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">{title}</p>
  </div>
);

const ProgramCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className="relative bg-white p-7 rounded-2xl shadow-2xl border-t-8 border-amber-400/80 transform hover:scale-[1.03] transition duration-500 group overflow-hidden cursor-pointer"
    data-aos="fade-up"
    data-aos-delay={delay}
    style={{ background: 'linear-gradient(145deg, #ffffff, #fefce8)' }} 
  >
    <div className="absolute inset-0 bg-violet-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out z-0"></div>
    <div className="relative z-10">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 mb-4 transition duration-500 group-hover:bg-violet-600 shadow-lg">
        <Icon className="w-7 h-7 text-amber-600 transition duration-500 group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 transition duration-300 group-hover:text-violet-700">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
      <a href="#" className="mt-4 inline-flex items-center text-amber-500 font-semibold transition duration-300 group-hover:text-rose-500 transform hover:translate-x-1">
        Explore <ChevronRight className="w-5 h-5 ml-1" />
      </a>
    </div>
  </div>
);

const TestimonialCarousel = ({ quote, name, location }) => (
  <div className="max-w-3xl mx-auto p-10 bg-rose-50/70 rounded-3xl shadow-2xl border-8 border-double border-amber-400/50" data-aos="zoom-in" data-aos-delay="100">
    <p className="text-2xl italic text-gray-800 mb-6 relative">
      <span className="text-6xl text-rose-500 absolute -top-4 -left-6 opacity-70 font-serif">“</span>
      {quote}
      <span className="text-6xl text-rose-500 absolute -bottom-8 -right-6 opacity-70 font-serif rotate-180">“</span>
    </p>
    <p className="font-bold text-lg text-violet-700 mt-6">- {name}, <span className="font-medium text-amber-600">{location}</span></p>
  </div>
);

// --- Main Home Component ---
export default function Home() {

  useEffect(() => {
    // Initialize AOS if needed
    // if (typeof window !== 'undefined' && window.AOS) {
    //   window.AOS.init({ once: true, duration: 1000, easing: 'ease-out-cubic' });
    // }
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 overflow-x-hidden scroll-smooth">

      {/* 1. HERO SECTION */}
      <header className="relative bg-gradient-to-br from-rose-50 via-white to-violet-50 pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-amber-200 rounded-full opacity-40 blur-3xl animate-pulse-slow delay-500"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div data-aos="zoom-in" className="w-24 h-24 mx-auto mb-6 bg-violet-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 transform hover:rotate-6 transition duration-500">
            <HeartHandshake className="w-12 h-12 text-white animate-bounce-slow" />
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4 leading-tight" data-aos="fade-up">
            Bringing <span className="text-rose-500 drop-shadow-md">Light</span> and <span className="text-amber-500 drop-shadow-md">Hope</span> to Sindh, Pakistan
          </h1>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="200">
            Empowering Women, Protecting Rights, and Delivering Relief in Health, Education, and WASH.
          </p>

          <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="#about" 
              className="group px-10 py-4 text-lg font-bold text-white bg-rose-500 rounded-full shadow-xl shadow-rose-400/50 hover:bg-rose-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            >
              About Us <ChevronRight className="w-5 h-5 ml-2 transition duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#donate" 
              className="group px-10 py-4 text-lg font-bold text-rose-500 border-2 border-rose-500 bg-white rounded-full shadow-xl hover:bg-rose-50 transition duration-300 transform hover:scale-105 hover:border-rose-600 flex items-center justify-center"
            >
              Donate Now <Banknote className="w-5 h-5 ml-2 transition duration-300 group-hover:text-amber-500" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. ABOUT NDO SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div data-aos="slide-right" data-aos-easing="ease-out-quad">
              <h2 className="text-5xl font-extrabold text-violet-700 mb-6">Who We Are <MapPin className="inline w-8 h-8 text-amber-500" /></h2>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                <strong>Nari Development Organization (NDO)</strong> is a non-profit NGO working to empower women, protect basic human rights, and support poor and marginalized communities across Sindh, Pakistan.
              </p>

              <div className="text-gray-700 text-lg mb-6 leading-relaxed border-l-8 border-rose-500 pl-6 bg-rose-50 p-6 rounded-lg shadow-inner" data-aos="fade-up" data-aos-delay="200">
                <p className='font-medium'>
                  We focus on creating sustainable change through community-based initiatives in primary healthcare, education, livelihood support, and <strong>water, sanitation, and hygiene (WASH)</strong>.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-violet-700 mb-3 mt-8" data-aos="fade-up" data-aos-delay="300">Our Collaboration</h3>
              <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                NDO effectively collaborates with leading organizations including <strong>Sindh Development Society (SDS), WaterAid Pakistan, HANDS</strong>, and others to deliver critical services such as WASH assistance, health promotion, and crucial emergency relief and rehabilitation projects for flood and drought victims.
              </p>
            </div>

            <div className="relative group" data-aos="fade-left" data-aos-delay="100">
              <div className="w-full h-96 bg-gray-100 rounded-3xl shadow-2xl shadow-violet-400/50 overflow-hidden transform group-hover:scale-[1.02] transition duration-500">
                <div 
                  className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${image38})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-violet-500/10 transition duration-500 group-hover:bg-rose-500/10"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-6 bg-white rounded-xl shadow-2xl translate-x-4 translate-y-4 border-b-4 border-amber-400 transform group-hover:translate-x-6 group-hover:translate-y-6 transition duration-500">
                <p className="text-xl font-bold text-rose-500">Woman-Led, Community-Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPROACH / THEMATIC AREAS SECTION */}
      <section id="approach" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-violet-700 mb-4" data-aos="fade-down">Our Approach to Sustainable Change</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-16" data-aos="fade-down" data-aos-delay="100">
            We employ an integrated, rights-based approach to tackle root causes of poverty and inequality in marginalized communities.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProgramCard icon={Users} title="Local Collaboration" description="Partnership with local departments, CSOs, and international organizations for maximum reach and impact." delay="0" />
            <ProgramCard icon={Droplet} title="Comprehensive WASH Projects" description="Providing safe water, hygiene kits, and constructing latrines to ensure better health and dignity for families." delay="100" />
            <ProgramCard icon={HeartHandshake} title="Women & Health Focus" description="Awareness programs on Menstrual Hygiene Management (MHM) and access to integrated health services." delay="200" />
            <ProgramCard icon={School} title="Infrastructure & Education" description="Rehabilitation of schools and community infrastructure to create safe and functional learning environments." delay="300" />
            <ProgramCard icon={Scale} title="Legal Empowerment" description="Advocating for women's basic human rights and legal protection, fostering democracy and governance." delay="400" />
            <ProgramCard icon={CheckCircle} title="Anticipatory Action" description="Implementing flood and drought anticipatory action programs to protect lives and livelihoods before disaster strikes." delay="500" />
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATISTICS */}
      <section className="py-24 bg-violet-600 bg-opacity-95 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-40 h-40 bg-rose-400 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-amber-400 rounded-full opacity-15 blur-3xl animate-float delay-1000"></div>

        <div className="container mx-auto px-6 text-white relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-16" data-aos="fade-up">Our Impact So Far</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <ImpactCounter icon={User} number={120000} title="Lives Touched" />
            <ImpactCounter icon={Droplet} number={7500} title="Families with WASH Access" />
            <ImpactCounter icon={School} number={25} title="Schools Rehabilitated" />
            <ImpactCounter icon={HeartHandshake} number={40} title="Projects Completed" />
          </div>
        </div>
      </section>

      {/* 5. DONATE SECTION */}
      <section id="donate" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `radial-gradient(circle at 10% 20%, rgba(246, 173, 221, 0.2) 0%, rgba(255, 237, 213, 0.2) 100%)` }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-violet-700 mb-6" data-aos="fade-down">Be a Beacon of Hope</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl italic text-gray-700 mb-12" data-aos="fade-down" data-aos-delay="100">
              "Your small contribution can bring light and hope to flood-affected families in Sindh."
            </p>

            <div className="bg-rose-50/80 border-8 border-double border-amber-300 p-8 md:p-14 rounded-3xl shadow-2xl shadow-rose-200/50 transition duration-500 hover:shadow-violet-400/50 relative overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
              
              <h3 className="text-4xl font-extrabold text-violet-700 mb-8 flex items-center justify-center">
                <Banknote className="w-10 h-10 mr-3 text-amber-500" /> Donate Today
              </h3>

              <div className="space-y-4 text-left p-6 border-4 border-dashed border-rose-300 rounded-xl bg-white bg-opacity-95 shadow-lg">
                <p className="text-lg text-gray-800">
                  <span className="font-semibold text-violet-700 block">Bank Account Title:</span> Nari Development Organization
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold text-violet-700 block">Bank:</span> National Bank of Pakistan
                </p>
                <p className="text-xl text-gray-800">
                  <span className="font-semibold text-violet-700 block">Account No:</span> <span className="text-3xl font-mono text-rose-500 tracking-wider font-extrabold">1234-567890-001</span>
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold text-violet-700 block">Branch Code:</span> 0567
                </p>
              </div>

              <button className="mt-10 w-full md:w-3/4 px-12 py-5 text-2xl font-extrabold text-white bg-rose-500 rounded-full shadow-2xl shadow-rose-400/50 hover:bg-rose-600 transition duration-300 transform hover:scale-[1.07] active:scale-100 hover:shadow-violet-400/50">
                Give Now 💖
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NETWORKS & PARTNERS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-violet-700 mb-12" data-aos="fade-up">Our Trusted Network & Partners</h2>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6 justify-items-center opacity-90" data-aos="fade-up" data-aos-delay="200">
            {["WaterAid Pakistan", "HANDS", "SPO", "TRDP", "Start Network", "NHN", "PPCHI", "AASHA Pakistan", "HRF"].map((name, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transform hover:scale-[1.05] transition duration-300"
              >
                <img 
                  src={`https://via.placeholder.com/80?text=${name.split(' ')[0]}`} 
                  alt={name} 
                  className="w-20 h-20 object-contain mb-2" 
                />
                <span className="text-gray-700 font-semibold text-sm text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
