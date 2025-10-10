import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send, Heart, DollarSign, Users, Sparkles, Briefcase, Smile, Check, Handshake, Leaf } from 'lucide-react';

// --- Custom Styles for NDO Theme ---
const NDO_COLORS = {
    rose: '#E75480',
    violet: '#8A2BE2',
    amber: '#FFC107',
    softRose: 'rgb(247, 237, 240)', // Lighter Rose for backgrounds
    softViolet: 'rgb(240, 237, 247)', // Lighter Violet for backgrounds
};

// --- Components and Animation Utilities (Framer Motion Simulation) ---

// Custom hook to handle form submission simulation (DO NOT CHANGE LOGIC)
const useFormSubmit = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            // DO NOT CHANGE API ENDPOINT
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset(); // Reset form fields

                // Reset submission status after a short display time
                setTimeout(() => setIsSubmitted(false), 4000);
            } else {
                console.error("Failed to submit form:", response.statusText);
                alert("Failed to send your message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while sending your message.");
        } finally {
            setIsLoading(false);
        }
    };

    return { isSubmitted, isLoading, handleSubmit };
};


// Donation Amounts and Purposes (Kept as-is)
const donationAmounts = [500, 1000, 2500, 5000];
const donationPurposes = [
    "Women Empowerment", 
    "Disaster Relief", 
    "Health Support", 
    "Education & WASH"
];

// Impact Stats Data (Kept as-is)
const impactStats = [
    { count: "50,000+", label: "Beneficiaries Helped", icon: Users },
    { count: "800+", label: "Women Trained", icon: Briefcase },
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
    <div className="font-sans antialiased text-gray-800" style={{ background: `linear-gradient(135deg, ${NDO_COLORS.softRose} 5%, #ffffff 95%)` }}>
      
      {/* 1. HERO SECTION (Rose/Violet Theme) */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: NDO_COLORS.violet }}>
        
        {/* Background Image Placeholder with Violet/Rose Gradient Overlay */}
        <div className="absolute inset-0">
            <img 
                src="https://placehold.co/1200x800/8A2BE2/ffffff?text=Community+Support+Background" 
                alt="Community support background" 
                className="w-full h-full object-cover opacity-20" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x800/8A2BE2/ffffff?text=Community+Support+Background" }} 
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-700/80 to-violet-700/60"></div>


        <div className="container mx-auto px-4 py-20 relative z-10 text-white">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
            data-aos="fade-down"
          >
            Connect & Create Change
          </h1>
          <p 
            className="max-w-4xl mx-auto text-lg md:text-xl font-light text-rose-100"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            We are here to listen, collaborate, and grow. Reach out to NDO or support our mission today.
          </p>
        </div>
      </section>

      
      {/* 2. CONTACT SECTION (Two-Column Layout) */}
      <section id="contact-form" className="py-24" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
                <h3 className="text-4xl font-extrabold" style={{ color: NDO_COLORS.rose }}>
                    Get in Touch
                </h3>
                <div className="w-16 h-1 bg-violet-400 mx-auto rounded-full mt-3"></div>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    We welcome all inquiries about partnerships, volunteering, or general questions.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Contact Info (Left Side) */}
                <div 
                    className="space-y-8 p-10 rounded-2xl shadow-2xl transition duration-500 hover:shadow-rose-300/50" 
                    style={{ backgroundColor: NDO_COLORS.softViolet }}
                    data-aos="fade-right"
                >
                    <h4 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3" style={{ color: NDO_COLORS.violet }}>
                        NDO Details
                    </h4>
                    
                    {/* Contact Info Items - Rose/Amber Icons */}
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: NDO_COLORS.amber }} />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Address</p>
                            <p className="text-gray-700">NDO Office, District Dadu, Sindh, Pakistan</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: NDO_COLORS.amber }} />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Phone</p>
                            <p className="text-gray-700">+92-333-XXXXXXX</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: NDO_COLORS.amber }} />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Email</p>
                            <p className="text-gray-700">info@ndo.org.pk</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                        <Globe className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: NDO_COLORS.amber }} />
                        <div>
                            <p className="font-semibold text-lg text-gray-900">Website</p>
                            <p className="text-gray-700">www.ndo.org.pk</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form (Right Side) */}
                <div 
                    className="p-10 rounded-2xl shadow-2xl border-t-8 transition duration-500 hover:shadow-violet-300/50" 
                    style={{ borderColor: NDO_COLORS.rose, backgroundColor: NDO_COLORS.softRose }}
                    data-aos="fade-left"
                >
                    <h4 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: NDO_COLORS.violet }}>
                        Send Us a Message
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Custom Input Styles (Rose/Violet Focus) */}
                        {[
                            { id: "name", type: "text", placeholder: "Full Name", name: "name" },
                            { id: "email", type: "email", placeholder: "Email Address", name: "email" },
                            { id: "subject", type: "text", placeholder: "Subject", name: "subject" },
                        ].map((field) => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="sr-only">{field.placeholder}</label>
                                <input
                                    {...field}
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition duration-300 shadow-md"
                                />
                            </div>
                        ))}

                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                required
                                rows="5"
                                name="message"
                                className="w-full p-4 border border-gray-300 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition duration-300 shadow-md"
                            />
                        </div>

                        {/* Submit Button - Rose-to-Violet Gradient */}
                        <button
                            type="submit"
                            disabled={isLoading || isSubmitted}
                            className={`
                                w-full py-3 px-6 text-xl font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3
                                ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : 'bg-gradient-to-r from-rose-600 to-violet-600 hover:from-rose-700 hover:to-violet-700'} 
                                text-white transform hover:scale-[1.01] hover:shadow-2xl
                            `}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : isSubmitted ? (
                                <>
                                    <Check className="w-6 h-6" />
                                    <span>Message Sent!</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-6 h-6" />
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
                className="w-full h-80 rounded-2xl shadow-2xl overflow-hidden border-4 transition-all duration-700 transform hover:scale-[1.005] bg-gray-200"
                style={{ borderColor: NDO_COLORS.amber }}
                data-aos="zoom-in"
            >
                {/* Placeholder for Google Map Embed */}
                <iframe
                    title="NDO Office Location"
                    // KEEP ORIGINAL SRC, MOCKING FOR DEMO
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1062602758416!2d67.76566231500305!3d24.96023778401309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5062a00000001%3A0x673449339e3b4a20!2sDadu%20District%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1638217200000!5m2!1sen!2sus" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                ></iframe>
            </div>
        </div>
      </section>
      
      {/* 4. DONATE SECTION (Eye-catching CTA) */}
      <section id="donate" className="py-24" style={{ background: `linear-gradient(to right, ${NDO_COLORS.softRose}, ${NDO_COLORS.softViolet})` }}>
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
                <h3 className="text-4xl font-extrabold" style={{ color: NDO_COLORS.violet }}>Your Support Creates Hope</h3>
                <p className="text-xl text-gray-700 mt-3 max-w-3xl mx-auto">
                    Every contribution helps us empower women, rebuild lives, and create sustainable communities.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Emotional Image Placeholder */}
                <div 
                    className="h-80 md:h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-rose-400" 
                    data-aos="fade-right"
                >
                    <img 
                        src="images/empowerment/Empowerment.jpg" 
                        alt="Image of women or children helped by NDO" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/E75480/ffffff?text=Empowerment+Image" }} 
                    />
                </div>

                {/* Right: Donation Box */}
                <div 
                    className="p-8 rounded-2xl bg-white shadow-2xl border-t-8 border-violet-500"
                    data-aos="fade-left"
                >
                    <h4 className="text-3xl font-bold text-gray-900 mb-6 flex items-center" style={{ color: NDO_COLORS.rose }}>
                        <DollarSign className="w-7 h-7 mr-2" style={{ color: NDO_COLORS.amber }} /> Donate Today
                    </h4>
                    
                    {/* Donation Purpose Selector - Optional Enhancement */}
                    <h5 className="font-bold text-lg text-violet-700 mb-3">Choose Where Your Funds Go:</h5>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {donationPurposes.map((purpose, index) => (
                            <button
                                key={index}
                                className="text-sm px-4 py-2 rounded-full border border-violet-300 text-violet-700 bg-violet-50 hover:bg-violet-100 transition duration-300 shadow-sm"
                            >
                                {purpose}
                            </button>
                        ))}
                    </div>
                    
                    
                    {/* Bank Details */}
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <h5 className="font-bold text-lg" style={{ color: NDO_COLORS.rose }}>Or Transfer Directly</h5>
                        <div className="bg-rose-50 p-4 rounded-xl text-sm space-y-1 mt-3 border border-rose-200">
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
                            src={`https://placehold.co/150x150/${NDO_COLORS.rose.substring(1)}/ffffff?text=QR+Code`} 
                            alt="QR Code Placeholder" 
                            className="mx-auto border-4 rounded-lg shadow-lg"
                            style={{ borderColor: NDO_COLORS.amber }}
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS / IMPACT SECTION (Themed Stats) */}
      <section id="impact-stats" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-10" data-aos="fade-up">
                <span className="text-sm font-bold uppercase tracking-widest mb-2 block" style={{ color: NDO_COLORS.violet }}>Our Impact</span>
                <h3 className="text-4xl font-bold text-gray-900">Making a Tangible Difference</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {impactStats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="p-8 text-center bg-white rounded-2xl shadow-xl border-b-4 transition duration-300 hover:shadow-2xl hover:bg-violet-50"
                        style={{ borderColor: NDO_COLORS.rose }}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <stat.icon className="w-12 h-12 mx-auto mb-4" style={{ color: NDO_COLORS.amber }} />
                        <p className="text-5xl font-extrabold text-gray-900">{stat.count}</p>
                        <p className="text-xl font-medium text-gray-600 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* 6. FINAL CTA SECTION (Volunteer - Violet/Rose Theme) */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: NDO_COLORS.violet }}>
        
        {/* Animated Icons Background (Rose-tinted) */}
        <Heart className="absolute top-10 left-1/4 w-12 h-12 text-rose-500 floating-icon opacity-30" style={{ animationDelay: '0s' }} />
        <Leaf className="absolute bottom-5 right-1/3 w-10 h-10 text-rose-400 floating-icon opacity-30" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-1/2 right-10 w-16 h-16 text-rose-300 floating-icon opacity-30" style={{ animationDelay: '4s' }} />

        {/* Existing CSS for floating-icon kept for simulation */}
        <style jsx global>{`
             @keyframes float {
                 0% { transform: translate(0, 0); opacity: 0.3; }
                 50% { transform: translate(10px, 10px); opacity: 0.5; }
                 100% { transform: translate(0, 0); opacity: 0.3; }
             }
             .floating-icon {
                 animation: float 8s ease-in-out infinite;
             }
         `}</style>


        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold text-white mb-4">
            Let’s Build a Better Tomorrow Together.
          </h3>
          <p className="text-xl font-medium text-violet-100 mb-8 max-w-3xl mx-auto">
            Your time and dedication can be the most valuable gift. Volunteer with NDO today!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 text-xl font-bold rounded-full shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-rose-300/50"
            style={{ backgroundColor: NDO_COLORS.rose, color: 'white' }}
          >
            <Users className="w-6 h-6 mr-3 text-amber-300" /> Volunteer with Us
          </a>
        </div>
      </section>
      
    </div>
  );
}