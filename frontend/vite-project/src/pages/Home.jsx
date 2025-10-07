import { Droplet, HeartHandshake, School, User, ChevronRight, Scale, Users, CheckCircle, Banknote, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import image38 from "../../public/images/image38.jpg"
// --- Custom Components/Placeholders (Simplified for this response) ---

// Placeholder for an Animated Counter component (requires state/effect in a real app)
const ImpactCounter = ({ number, title, icon: Icon }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl">
    <Icon className="w-10 h-10 text-emerald-500 mb-3" />
    {/* In a real app, this h2 would be animated using a library */}
    <h2 className="text-4xl font-bold text-emerald-600 mb-1" data-count={number}>
      {number}+
    </h2>
    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{title}</p>
  </div>
);

// Helper for Thematic Area Cards
const ProgramCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-emerald-400 transform hover:scale-[1.02] transition duration-500 group"
    data-aos="fade-up" // AOS Placeholder
    data-aos-delay={delay} // AOS Placeholder
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4 transition duration-500 group-hover:bg-emerald-400">
      <Icon className="w-6 h-6 text-emerald-500 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
    <a href="#" className="mt-3 inline-flex items-center text-emerald-600 hover:text-emerald-800 text-sm font-medium transition duration-300">
      Learn More <ChevronRight className="w-4 h-4 ml-1" />
    </a>
  </div>
);

// --- Main Home Component ---
export default function Home() {
  const ICON_SIZE = 20;

  return (
    <div className="font-poppins antialiased text-gray-800 bg-gray-50 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-gradient-to-br from-emerald-50 to-white pt-24 pb-32">
        {/* Floating Shapes Bonus */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-yellow-50 rounded-full opacity-50 blur-3xl animate-pulse-slow delay-500"></div>

        <div className="container mx-auto px-4 text-center">
          {/* NDO Logo Placeholder */}
          <div data-aos="zoom-in" className="w-20 h-20 mx-auto mb-6 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
            <HeartHandshake className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight" data-aos="fade-up">
            Bringing <span className="text-emerald-600">Light</span> and <span className="text-emerald-600">Hope</span> to Sindh, Pakistan
          </h1>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 mb-10" data-aos="fade-up" data-aos-delay="200">
            Empowering Women, Protecting Rights, and Delivering Relief in Health, Education, and WASH.
          </p>
          
          <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="#about" 
              className="px-8 py-3 text-lg font-semibold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105"
            >
              About Us
            </a>
            <a 
              href="#donate" 
              className="px-8 py-3 text-lg font-semibold text-emerald-600 border-2 border-emerald-600 bg-white rounded-full shadow-lg hover:bg-emerald-50 transition duration-300 transform hover:scale-105"
            >
              Donate Now
            </a>
          </div>
        </div>
      </header>

      {/* 2. ABOUT NDO SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                **Nari Development Organization (NDO)** is a non-profit NGO working to empower women, protect basic human rights, and support poor and marginalized communities across Sindh, Pakistan.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed border-l-4 border-emerald-500 pl-4 bg-gray-50 p-4 rounded-md">
                We focus on creating sustainable change through community-based initiatives in primary healthcare, education, livelihood support, and water, sanitation, and hygiene (WASH).
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-8">Our Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                NDO effectively collaborates with leading organizations including **Sindh Development Society (SDS), WaterAid Pakistan, HANDS**, and others to deliver critical services such as WASH assistance, health promotion, and crucial emergency relief and rehabilitation projects for flood and drought victims.
              </p>
            </div>
            
            {/* Image/Visual Placeholder */}
            <div className="relative" data-aos="fade-left">
              <div className="w-full h-96 bg-gray-100 rounded-3xl shadow-2xl overflow-hidden">
                {/* Image Placeholder with Soft Gradient */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image38})` }}>
                  <div className="absolute inset-0 bg-emerald-500 opacity-20 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4 bg-white rounded-lg shadow-xl translate-x-4 translate-y-4 border-t-4 border-emerald-500">
                <p className="text-lg font-bold text-emerald-600">Woman-Led, Community-Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPROACH / THEMATIC AREAS SECTION */}
      <section id="approach" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down">Our Approach to Sustainable Change</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12" data-aos="fade-down" data-aos-delay="100">
            We employ an integrated, rights-based approach to tackle root causes of poverty and inequality in marginalized communities.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ProgramCard
              icon={Users}
              title="Local Collaboration"
              description="Partnership with local departments, CSOs, and international organizations for maximum reach and impact."
              delay="0"
            />
            <ProgramCard
              icon={Droplet}
              title="Comprehensive WASH Projects"
              description="Providing safe water, hygiene kits, and constructing latrines to ensure better health and dignity for families."
              delay="100"
            />
            <ProgramCard
              icon={HeartHandshake}
              title="Women & Health Focus"
              description="Awareness programs on Menstrual Hygiene Management (MHM) and access to integrated health services."
              delay="200"
            />
            <ProgramCard
              icon={School}
              title="Infrastructure & Education"
              description="Rehabilitation of schools and community infrastructure to create safe and functional learning environments."
              delay="300"
            />
            <ProgramCard
              icon={Scale}
              title="Legal Empowerment"
              description="Advocating for women's basic human rights and legal protection, fostering democracy and governance."
              delay="400"
            />
            <ProgramCard
              icon={CheckCircle}
              title="Anticipatory Action"
              description="Implementing flood and drought anticipatory action programs to protect lives and livelihoods before disaster strikes."
              delay="500"
            />
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATISTICS (Animated Counters) */}
      <section className="py-20 bg-emerald-700">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Our Impact So Far</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <ImpactCounter icon={User} number={120000} title="Lives Touched" />
            <ImpactCounter icon={Droplet} number={7500} title="Families with WASH Access" />
            <ImpactCounter icon={School} number={25} title="Schools Rehabilitated" />
            <ImpactCounter icon={HeartHandshake} number={40} title="Projects Completed" />
          </div>
        </div>
      </section>

      {/* 5. DONATE SECTION */}
      <section id="donate" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down">Be a Beacon of Hope</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 mb-10" data-aos="fade-down" data-aos-delay="100">
              **"Your small contribution can bring light and hope to flood-affected families in Sindh."**
            </p>
          
            {/* Donation Card with Soft Animation */}
            <div 
              className="bg-emerald-50 border-4 border-emerald-300 p-8 md:p-12 rounded-3xl shadow-2xl transition duration-500 hover:shadow-emerald-400/50 transform hover:scale-[1.01] relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {/* Soft Background Animation */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-50 blur-xl animate-slow-spin"></div>
              
              <h3 className="text-3xl font-extrabold text-emerald-600 mb-6 flex items-center justify-center">
                <Banknote className="w-8 h-8 mr-3" /> Donate Today
              </h3>

              <div className="space-y-4 text-left p-4 border-2 border-dashed border-emerald-300 rounded-xl bg-white bg-opacity-90">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900 block">Bank Account Title:</span> Nari Development Organization
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900 block">Bank:</span> National Bank of Pakistan
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900 block">Account No:</span> <span className="text-2xl font-mono text-emerald-700 tracking-wider">1234-567890-001</span>
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-gray-900 block">Branch Code:</span> 0567
                </p>
              </div>

              <button 
                className="mt-8 w-full md:w-auto px-10 py-4 text-xl font-bold text-white bg-emerald-600 rounded-full shadow-lg shadow-emerald-500/50 hover:bg-emerald-700 transition duration-300 transform hover:scale-105 animate-pulse-once"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NETWORKS & PARTNERS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10" data-aos="fade-up">Our Trusted Network & Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80" data-aos="fade-up" data-aos-delay="200">
            {/* Logos and Names Placeholder */}
            {[
              "WaterAid Pakistan", "HANDS", "SPO", "TRDP", "Start Network", "NHN", "PPCHI", "AASHA Pakistan", "HRF"
            ].map((name, index) => (
              <div key={index} className="flex flex-col items-center hover:opacity-100 transition duration-300 group">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:shadow-lg">
                    {/* Placeholder for Logo */}
                    <HeartHandshake className="w-8 h-8 text-emerald-400 group-hover:text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" data-aos="fade-down">Voices of Change</h2>
          {/* Testimonial Slider Placeholder */}
          <div className="max-w-3xl mx-auto p-8 bg-emerald-50 rounded-xl shadow-inner border-t-8 border-emerald-500" data-aos="zoom-in">
            <p className="text-xl italic text-gray-700 mb-6">
              "NDO's WASH program changed everything for my family. We finally have safe water and the hygiene training saved my children from constant sickness. They brought hope when we had none."
            </p>
            <p className="font-semibold text-lg text-emerald-600">- Shareefa Bibi, Flood Victim & Beneficiary</p>
          </div>
        </div>
      </section>

 
    </div>
  );
}