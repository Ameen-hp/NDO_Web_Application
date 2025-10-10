import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail,
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  Droplet
} from 'lucide-react';

const NDO_COLORS = {
  rose: '#E75480',
  violet: '#8A2BE2',
  amber: '#FFC107',
  darkViolet: '#4B0082',
  darkerViolet: '#3A0060',
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.2, staggerChildren: 0.1, duration: 0.8, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const iconHover = {
  scale: 1.15,
  boxShadow: `0 0 15px ${NDO_COLORS.amber}99`,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const AnimatedLink = ({ to, children }) => (
  <motion.a
    href={to}
    className="relative text-gray-200 transition-colors duration-300 group inline-block py-0.5"
    variants={itemVariants}
    whileHover={{ color: NDO_COLORS.rose }}
  >
    {children}
    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] transition-all duration-500 group-hover:w-full group-hover:left-0"
      style={{ backgroundColor: NDO_COLORS.amber }}
    ></span>
  </motion.a>
);

const ContactItem = ({ Icon, text }) => (
  <motion.div
    className="flex items-start text-gray-300 transition duration-300 p-0.5 rounded-lg"
    variants={itemVariants}
    whileHover={{ x: 5, color: NDO_COLORS.rose }}
  >
    <Icon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: NDO_COLORS.amber }} />
    <span className="text-sm md:text-base">{text}</span>
  </motion.div>
);

const SocialIcon = ({ Icon, link, label }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-300"
    style={{ backgroundColor: NDO_COLORS.rose }}
    whileHover={iconHover}
    variants={itemVariants}
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61568162452988", label: "Facebook" },
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
      {/* Top Section */}
      <div
        className="py-3 px-6 md:px-10 text-center text-white"
        style={{ backgroundColor: NDO_COLORS.violet }}
      >
        <motion.div variants={itemVariants} className="flex justify-center items-center mb-2">
          <Droplet className="w-8 h-8 mr-2 transform hover:scale-110 transition duration-300" style={{ color: NDO_COLORS.amber }} />
          <h2 className="text-2xl font-bold tracking-tight">
            Nari Development Organization (NDO)
          </h2>
        </motion.div>
        <motion.p variants={itemVariants} className="text-sm md:text-base font-medium text-gray-100">
          Empowering Women • Building Communities • Creating Change
        </motion.p>
      </div>

      {/* Middle Section */}
      <div
        className="py-5 px-6 md:px-10 text-white"
        style={{ backgroundColor: NDO_COLORS.darkViolet }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <motion.h4 variants={itemVariants} className="text-lg font-bold mb-2 border-b pb-1" style={{ color: NDO_COLORS.rose, borderColor: NDO_COLORS.violet }}>
              Quick Links
            </motion.h4>
            {quickLinks.map((link) => (
              <AnimatedLink key={link.name} to={link.to}>{link.name}</AnimatedLink>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2 md:border-l md:border-violet-700 md:pl-6">
            <motion.h4 variants={itemVariants} className="text-lg font-bold mb-2 border-b pb-1" style={{ color: NDO_COLORS.rose, borderColor: NDO_COLORS.violet }}>
              Contact Us
            </motion.h4>
            <ContactItem Icon={MapPin} text="Near Irrigation dept office, Johi, Dadu, Sindh, Pakistan" />
            <ContactItem Icon={Phone} text="+92-333-XXXXXXX" />
            <ContactItem Icon={Mail} text="info@ndo.org.pk" />
          </div>

          {/* Follow Us */}
          <div className="flex flex-col space-y-2 lg:pl-6">
            <motion.h4 variants={itemVariants} className="text-lg font-bold mb-2 border-b pb-1" style={{ color: NDO_COLORS.rose, borderColor: NDO_COLORS.violet }}>
              Follow Us
            </motion.h4>
            <p className="text-gray-300 text-sm">Connect with us on our social platforms.</p>
            <div className="flex space-x-3 mt-1">
              {socialLinks.map((social) => (
                <SocialIcon key={social.label} Icon={social.Icon} link={social.link} label={social.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="py-2 px-6 md:px-10 text-center text-gray-400"
        style={{ backgroundColor: NDO_COLORS.darkerViolet }}
      >
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-xs md:text-sm mb-0.5">
          © {currentYear} Nari Development Organization (NDO). All Rights Reserved.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="text-[11px] md:text-xs">
          Developed by <span className="relative font-semibold group" style={{ color: NDO_COLORS.amber }}>
            Muhammad Ameen | MERN Stack Developer
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent transition-all duration-500 group-hover:shadow-lg group-hover:shadow-amber-400/30" style={{ backgroundColor: NDO_COLORS.amber }}></span>
          </span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
