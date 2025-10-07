import React from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, Phone, Mail, 
    Facebook, Twitter, Instagram, Youtube, Linkedin,
    Droplet 
} from 'lucide-react';

// --- Framer Motion Variants ---

// Master container fade-in and slide-up
const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

// Item variants for the links and contact details
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// Social Icon hover effect
const iconHover = {
    scale: 1.15,
    boxShadow: "0 0 15px rgba(190, 242, 100, 0.8)", // Lime glow
    transition: { type: "spring", stiffness: 400, damping: 10 }
};

// --- Helper Components ---

// Component for Quick Links with animated underline
const AnimatedLink = ({ to, children }) => {
    return (
        <motion.a
            href={to}
            className="relative text-gray-200 hover:text-lime-400 transition-colors duration-300 group inline-block py-1"
            variants={itemVariants}
        >
            {children}
            {/* Animated Underline */}
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-lime-400 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
        </motion.a>
    );
};

// Component for Contact Items with hover glow
const ContactItem = ({ Icon, text }) => (
    <motion.div 
        className="flex items-start text-gray-300 transition duration-300 p-1 rounded-lg"
        variants={itemVariants}
        whileHover={{ x: 5, color: '#d9f99d' }} // Slight shift and glow
    >
        <Icon className="w-5 h-5 mr-3 mt-1 text-lime-400 flex-shrink-0" />
        <span className="text-sm md:text-base">{text}</span>
    </motion.div>
);

// Component for Social Icons with circular gradient and hover effect
const SocialIcon = ({ Icon, link, label }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 hover:bg-gradient-to-r hover:from-lime-400 hover:to-lime-500 text-white transition-all duration-300"
        variants={itemVariants}
        whileHover={iconHover}
    >
        <Icon className="w-5 h-5" />
    </motion.a>
);


// --- Main Footer Component ---

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { Icon: Facebook, link: "https://facebook.com/ndo", label: "Facebook" },
        { Icon: Twitter, link: "https://twitter.com/ndo", label: "Twitter (X)" },
        { Icon: Instagram, link: "https://instagram.com/ndo", label: "Instagram" },
        { Icon: Youtube, link: "https://youtube.com/ndo", label: "YouTube" },
        { Icon: Linkedin, link: "https://linkedin.com/company/ndo", label: "LinkedIn" },
    ];
    
    const quickLinks = [
        { name: "Home", to: "/home" },
        { name: "About", to: "/about" },
        { name: "Programs", to: "/programs" },
        { name: "Networks", to: "/networks" },
        { name: "Gallery", to: "/gallery" },
        { name: "Contact", to: "/contact" },
        { name: "Donate", to: "/donate" },
    ];

    return (
        <motion.footer 
            className="font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {/* 1. Top Section - Organization Identity */}
            <div className="bg-gradient-to-r from-green-700 to-green-900 py-6 px-6 md:px-12 text-center text-white">
                <motion.div 
                    variants={itemVariants}
                    className="flex justify-center items-center mb-3"
                >
                    <Droplet className="w-10 h-10 text-lime-400 mr-3 transform hover:rotate-6 transition duration-300" />
                    <h2 className="text-3xl font-extrabold">
                        Nari Development Organization (NDO)
                    </h2>
                </motion.div>
                <motion.p 
                    variants={itemVariants}
                    className="text-md text-lime-100 font-medium"
                >
                    Empowering Women &bull; Building Communities &bull; Creating Change
                </motion.p>
            </div>

            {/* 2. Middle Section - Quick Links & Contact Info (3 Columns) */}
            <div className="bg-green-800 py-6 px-6 md:px-12 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
                    
                    {/* Column 1: Quick Links */}
                    <div className="flex flex-col space-y-3 lg:pr-8">
                        <motion.h4 variants={itemVariants} className="text-xl font-bold text-lime-400 mb-2 border-b border-green-700 pb-2">
                            Quick Links
                        </motion.h4>
                        <div className="flex flex-col space-y-1">
                            {quickLinks.map((link) => (
                                <AnimatedLink key={link.name} to={link.to}>{link.name}</AnimatedLink>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="flex flex-col space-y-3 lg:px-8 border-t md:border-t-0 md:border-l border-green-700 pt-4 md:pt-0">
                        <motion.h4 variants={itemVariants} className="text-xl font-bold text-lime-400 mb-2 border-b border-green-700 pb-2">
                            Contact Us
                        </motion.h4>
                        <ContactItem 
                            Icon={MapPin} 
                            text="Near Irrigation department office. Johi, District Dadu, Sindh, Pakistan" 
                        />
                        <ContactItem 
                            Icon={Phone} 
                            text="+92-333-XXXXXXX" 
                        />
                        <ContactItem 
                            Icon={Mail} 
                            text="info@ndo.org.pk" 
                        />
                    </div>
                    
                    {/* Column 3: Follow Us */}
                    <div className="flex flex-col space-y-3 lg:pl-8 border-t md:border-t-0 lg:border-l border-green-700 pt-4 md:pt-0">
                        <motion.h4 variants={itemVariants} className="text-xl font-bold text-lime-400 mb-2 border-b border-green-700 pb-2">
                            Follow Us
                        </motion.h4>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <SocialIcon 
                                    key={social.label}
                                    Icon={social.Icon}
                                    link={social.link}
                                    label={social.label}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. Bottom Section - Copyright & Credits */}
            <div className="bg-green-950 py-3 px-6 md:px-12 text-center text-gray-400">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm mb-1"
                >
                    &copy; {currentYear} Nari Development Organization (NDO). All Rights Reserved.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-xs"
                >
                    Developed by <span className="relative text-lime-400 font-semibold cursor-pointer group">
                        Muhammad Ameen | MERN Stack Developer
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent transition-all duration-500 group-hover:bg-lime-400/50 group-hover:shadow-lg group-hover:shadow-lime-400/30"></span>
                    </span>
                </motion.p>
            </div>
        </motion.footer>
    );
}

export default Footer;
