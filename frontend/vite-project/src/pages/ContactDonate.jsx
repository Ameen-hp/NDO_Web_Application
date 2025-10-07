import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send, Heart, DollarSign, Users, Sparkles, Briefcase, Smile, Check, Handshake, Leaf } from 'lucide-react';

// --- Components and Animation Utilities (Framer Motion Simulation) ---

// Custom hook to handle form submission simulation
const useFormSubmit = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      e.target.reset(); // Reset form fields
      
      // Reset submission status after a short display time
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return { isSubmitted, isLoading, handleSubmit };
};

// Donation Amounts
const donationAmounts = [500, 1000, 2500, 5000];
const donationPurposes = [
    "Women Empowerment", 
    "Disaster Relief", 
    "Health Support", 
    "Education & WASH"
];

// Impact Stats Data
const impactStats = [
    { count: "50,000+", label: "Beneficiaries Helped", icon: Users },
    { count: "800+", label: "Women Trained", icon: Briefcase },
    // Handshake is now correctly imported
    { count: "100+", label: "Successful Partnerships", icon: Handshake }, 
];


export default function ContactDonate() {
  const { isSubmitted, isLoading, handleSubmit } = useFormSubmit();
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');

  const finalDonationAmount = selectedAmount === 'Custom' ? (customAmount || 0) : selectedAmount;

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    if (amount !== 'Custom') {
        setCustomAmount('');
    }
  };


  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-gray-900">
        
        {/* Background Image Placeholder with Green Gradient Overlay */}
        <div className="absolute inset-0">
            <img 
                src="https://placehold.co/1200x800/065F46/ffffff?text=Helping+Hands" 
                alt="Community support background" 
                className="w-full h-full object-cover opacity-30" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x800/065F46/ffffff?text=Helping+Hands" }} 
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/80 to-emerald-900/60"></div>


        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            data-aos="fade-down" // Framer Motion Simulation: Fade-in and Slide
          >
            Get in Touch & Make a Difference
          </h1>
          <h2 
            className="max-w-4xl mx-auto text-lg md:text-xl font-light text-emerald-100"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Together, we can empower communities and bring hope to those in need.
          </h2>
        </div>
      </section>

      
      {/* 2. CONTACT SECTION (Two-Column Layout) */}
      <section id="contact-form" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
                <h3 className="text-4xl font-bold text-emerald-800">Contact Us</h3>
                <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                    We’re always here to collaborate, listen, and help. Reach out to Nari Development Organization (NDO) for project inquiries, volunteer opportunities, or partnerships.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Contact Info (Left Side) */}
                <div className="space-y-8 p-8 rounded-2xl bg-white shadow-xl h-fit" data-aos="fade-right">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Our Details</h4>
                    
                    {/* Contact Info Items */}
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Address</p>
                            <p className="text-gray-600">NDO Office, District Dadu, Sindh, Pakistan</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Phone</p>
                            <p className="text-gray-600">+92-333-XXXXXXX</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Email</p>
                            <p className="text-gray-600">info@ndo.org.pk</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <Globe className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Website</p>
                            <p className="text-gray-600">www.ndo.org.pk</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form (Right Side) */}
                <div className="p-8 rounded-2xl bg-white shadow-xl" data-aos="fade-left">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Send Us a Message</h4>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                required
                                className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                required
                                className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                required
                                rows="5"
                                className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-200"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || isSubmitted}
                            className={`
                                w-full py-3 px-6 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2
                                ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600'} 
                                text-white transform hover:scale-[1.01]
                            `}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : isSubmitted ? (
                                <>
                                    <Check className="w-5 h-5" />
                                    <span>Message Sent!</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </div>
      </section>
      
      {/* 3. INTERACTIVE MAP SECTION (Placeholder) */}
      <section id="map" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-up">Find Our Office</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Find us on the map and visit our local office for collaboration or donations.
            </p>

            <div 
                className="w-full h-80 rounded-2xl shadow-2xl overflow-hidden border-4 border-emerald-300 transition-all duration-700 transform hover:scale-[1.005] bg-gray-200"
                data-aos="zoom-in" // Framer Motion Simulation: Fade and Scale
                data-aos-duration="1000"
            >
                {/* Placeholder for Google Map Embed */}
                <iframe
                    title="NDO Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1062602758416!2d67.76566231500305!3d24.96023778401309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5062a00000001%3A0x673449339e3b4a20!2sDadu%20District%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1638217200000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70 hover:opacity-100 transition duration-500"
                ></iframe>
            </div>
        </div>
      </section>
      
      {/* 4. DONATE SECTION (Eye-catching CTA) */}
      <section id="donate" className="py-24 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
                <h3 className="text-4xl font-extrabold text-emerald-800">Your Support Creates Hope</h3>
                <p className="text-xl text-gray-700 mt-3 max-w-3xl mx-auto">
                    Every contribution helps us empower women, rebuild lives, and create sustainable communities.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Emotional Image Placeholder */}
                <div 
                    className="h-80 md:h-96 rounded-2xl shadow-2xl overflow-hidden" 
                    data-aos="fade-right"
                >
                    <img 
                        src="https://placehold.co/600x600/059669/ffffff?text=Empowerment+Image" 
                        alt="Image of women or children helped by NDO" 
                        className="w-full h-full object-cover" 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/059669/ffffff?text=Empowerment+Image" }} 
                    />
                </div>

                {/* Right: Donation Box */}
                <div 
                    className="p-8 rounded-2xl bg-white shadow-2xl border-4 border-emerald-300"
                    data-aos="fade-left"
                >
                    <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <DollarSign className="w-7 h-7 mr-2 text-emerald-600" /> Donate Today
                    </h4>
                    
                    {/* Amount Selection */}
                    <p className="font-semibold text-gray-700 mb-3">Select Amount (PKR)</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {donationAmounts.map((amount) => (
                            <button
                                key={amount}
                                onClick={() => handleAmountSelect(amount)}
                                className={`
                                    px-5 py-2 rounded-full font-bold transition duration-300 transform
                                    ${selectedAmount === amount 
                                        ? 'bg-emerald-600 text-white shadow-lg ring-4 ring-emerald-300 scale-105' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                                    }
                                `}
                            >
                                {amount.toLocaleString()}
                            </button>
                        ))}
                        <button
                            onClick={() => handleAmountSelect('Custom')}
                            className={`
                                px-5 py-2 rounded-full font-bold transition duration-300 transform
                                ${selectedAmount === 'Custom' 
                                    ? 'bg-emerald-600 text-white shadow-lg ring-4 ring-emerald-300 scale-105' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                                }
                            `}
                        >
                            Custom
                        </button>
                    </div>

                    {selectedAmount === 'Custom' && (
                        <input
                            type="number"
                            placeholder="Enter Custom Amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-xl mb-6 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        />
                    )}

                    <form className="space-y-4">
                        {/* Purpose Dropdown */}
                        <select 
                            className="w-full p-3 border border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition duration-200"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Select Donation Purpose</option>
                            {donationPurposes.map(purpose => (
                                <option key={purpose} value={purpose}>{purpose}</option>
                            ))}
                        </select>
                        
                        {/* Name and Email */}
                        <input type="text" placeholder="Your Name" required className="w-full p-3 border rounded-xl focus:border-emerald-500" />
                        <input type="email" placeholder="Your Email" required className="w-full p-3 border rounded-xl focus:border-emerald-500" />
                        
                        {/* Donate Button (Glowing Hover Simulation) */}
                        <button
                            type="submit"
                            className="w-full relative py-4 text-xl font-bold text-white rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.01] overflow-hidden group"
                            style={{
                                background: 'linear-gradient(90deg, #047857 0%, #10B981 100%)',
                                zIndex: 1
                            }}
                        >
                            {/* Glowing effect using pseudo-element or shadow */}
                            <span 
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{
                                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.7)',
                                    opacity: '0',
                                    transition: 'opacity 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0'}
                            ></span>
                            <span className="relative z-10 flex items-center justify-center">
                                <Heart className="w-6 h-6 mr-3" /> 
                                Donate PKR {finalDonationAmount.toLocaleString() || '0'} Now
                            </span>
                        </button>
                    </form>
                    
                    {/* Bank Details */}
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <h5 className="font-bold text-lg text-emerald-700 mb-3">Or Transfer Directly</h5>
                        <div className="bg-emerald-50 p-4 rounded-xl text-sm space-y-1">
                            <p><strong>Bank Name:</strong> Habib Bank Limited (HBL)</p>
                            <p><strong>Account Title:</strong> Nari Development Organization</p>
                            <p><strong>Account No:</strong> 0123-4567890-01</p>
                            <p><strong>IBAN:</strong> PK12HABB00000001234567890</p>
                        </div>
                    </div>
                    
                    {/* QR Code Placeholder */}
                    <div className="text-center mt-6">
                        <p className="font-semibold text-gray-700 mb-3">Scan QR to Donate</p>
                        <img 
                            src="https://placehold.co/150x150/047857/ffffff?text=QR+Code" 
                            alt="QR Code Placeholder" 
                            className="mx-auto border-4 border-emerald-500 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS / IMPACT SECTION (Animated Stats) */}
      <section id="impact-stats" className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-10" data-aos="fade-up">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 block">Our Impact</span>
                <h3 className="text-4xl font-bold text-gray-900">Making a Tangible Difference</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {impactStats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="p-8 text-center bg-gray-50 rounded-2xl shadow-lg border-b-4 border-emerald-500 transition duration-300 hover:shadow-xl hover:bg-emerald-50"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                        <p className="text-5xl font-extrabold text-gray-900">{stat.count}</p>
                        <p className="text-xl font-medium text-gray-600 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* 6. FINAL CTA SECTION (Volunteer) */}
      <section className="py-20 bg-emerald-700 relative overflow-hidden">
        
        {/* Animated Icons Background (CSS Keyframe Simulation) */}
        <style jsx global>{`
            @keyframes float {
                0% { transform: translate(0, 0); opacity: 0.2; }
                50% { transform: translate(10px, 10px); opacity: 0.4; }
                100% { transform: translate(0, 0); opacity: 0.2; }
            }
            .floating-icon {
                animation: float 8s ease-in-out infinite;
            }
        `}</style>
        
        <Heart className="absolute top-10 left-1/4 w-12 h-12 text-emerald-500 floating-icon" style={{ animationDelay: '0s' }} />
        <Leaf className="absolute bottom-5 right-1/3 w-10 h-10 text-emerald-400 floating-icon" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-1/2 right-10 w-16 h-16 text-emerald-300 floating-icon" style={{ animationDelay: '4s' }} />


        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold text-white mb-4">
            Let’s Build a Better Tomorrow Together.
          </h3>
          <p className="text-xl font-medium text-emerald-100 mb-8 max-w-3xl mx-auto">
            Your time and dedication can be the most valuable gift. Volunteer with NDO today!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 text-xl font-bold text-emerald-800 bg-white rounded-full shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-emerald-300/50"
          >
            <Users className="w-6 h-6 mr-3" /> Volunteer with Us
          </a>
        </div>
      </section>
      
    </div>
  );
}
