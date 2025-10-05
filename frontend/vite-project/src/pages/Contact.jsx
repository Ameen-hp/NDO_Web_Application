import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Your message has been sent.`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-bold py-3 rounded hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-lg h-full min-h-[400px] flex items-center justify-center">
          <p className="text-gray-700">Map will be embedded here (Google Maps/Leaflet)</p>
        </div>
      </div>
    </div>
  );
}
