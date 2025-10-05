import React from "react";
import { FaHandsHelping } from "react-icons/fa"; // example icon from react-icons

export default function Hero() {
  return (
    <section className="relative bg-blue-700 text-white py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Nari Development Organization (NDO)
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-200">
          Empowering Women, Supporting Communities, and Fighting Poverty
        </p>

        {/* Call-to-action button */}
        <a
          href="/donate"
          className="inline-flex items-center bg-yellow-400 text-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
        >
          <FaHandsHelping className="mr-2 text-2xl" />
          Donate Now
        </a>

        {/* Optional small note or tagline */}
        <p className="mt-6 text-gray-200 text-lg">
          Join us in making a difference in the lives of rural women and children.
        </p>
      </div>

      {/* Optional decorative wave / shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
