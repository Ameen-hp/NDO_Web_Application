import React from "react";

const thematicAreas = [
  { id: 1, title: "Integrated Health Services (IHS)", description: "Thematic Area 3: Providing maternal & child health, nutrition, preventive care, and community-based health programs." },
  { id: 2, title: "Youth Leadership Development (YLD)", description: "Thematic Area 4: Empowering young people as agents of change through leadership training, skills development, and civic engagement." },
  { id: 3, title: "Climate Change and DRR", description: "Addressing disaster risk reduction and climate change adaptation for resilient communities." },
  { id: 4, title: "Emergency Response and Coordination", description: "Thematic Area 6: Rapid response and coordination during natural disasters and emergencies." },
  { id: 5, title: "Climate Change Adaptation", description: "Thematic Area 7: Implementing adaptive measures to reduce climate-related risks in communities." },
];

const values = [
  { id: 1, title: "Respect", description: "Treat everyone with dignity and mutual respect." },
  { id: 2, title: "No Discrimination", description: "Uphold equality and inclusivity for all." },
  { id: 3, title: "Accountability & Transparency", description: "Maintain integrity and openness in all operations." },
  { id: 4, title: "Gender Equality", description: "Promote equal opportunities for women and men." },
];

export default function ValuesAndThematicAreas() {
  return (
    <div className="container mx-auto px-4 md:px-0 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">NDO Thematic Areas & Values</h1>

      {/* Thematic Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Thematic Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thematicAreas.map((area) => (
            <div key={area.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.id} className="bg-yellow-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-800">{value.title}</h3>
              <p className="text-gray-800">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
