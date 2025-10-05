// src/components/Section.jsx
import React from "react";

export default function Section({ title, children }) {
  return (
    <section className="py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">{title}</h2>
      <div className="text-gray-700 text-lg">{children}</div>
    </section>
  );
}
