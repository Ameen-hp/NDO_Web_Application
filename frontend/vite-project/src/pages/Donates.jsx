// src/pages/Donate.jsx
import React, { useState } from "react";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call your payment API or backend
    alert(`Thank you ${form.name} for donating $${form.amount}!`);
    setForm({ name: "", email: "", amount: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 md:px-0 py-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Donate to NDO</h1>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Amount (USD)</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Amount to Donate"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave a message"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Donate Now
          </button>
        </form>

        <div className="mt-8 bg-blue-50 p-4 rounded">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Payment Info</h2>
          <p className="text-gray-700 mb-1">Bank Name: ABC Bank</p>
          <p className="text-gray-700 mb-1">Account Number: 123456789</p>
          <p className="text-gray-700 mb-1">IBAN: PK12ABCD123456789</p>
          <p className="text-gray-700">Or use an online payment gateway integration here</p>
        </div>
      </div>
    </div>
  );
}
