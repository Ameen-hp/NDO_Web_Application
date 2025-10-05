// src/pages/Home.jsx
// import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Service"; // Service component
import Section from "../components/Section";
import ValuesAndThematic from "../components/ValueAndThematicAreas";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Mission, Vision, Core Objectives using Section component */}
      <Section title="Our Mission">
        Empowering marginalized groups by ending poverty, ensuring justice, 
        and strengthening women-led grassroots organizations in democracy and governance.
      </Section>

      <Section title="Our Vision">
        Creating a democratic society where everyone can access justice 
        and enjoy basic rights free from social, economic, political, or religious discrimination.
      </Section>

      <Section title="Core Objectives">
        <ul className="list-disc list-inside">
          <li>Engage community support systems with a focus on children's and women's rights.</li>
          <li>Create an empowering environment for women and girls by reducing gender inequality.</li>
          <li>Provide high-quality healthcare and preventive services.</li>
          <li>Ensure access to formal and non-formal education for all children.</li>
          <li>Deliver timely assistance to disaster victims and build climate-resilient communities.</li>
        </ul>
      </Section>

      {/* Values & Thematic Areas Section */}
      <ValuesAndThematic />

      {/* Networks & Partners Section */}
      <Partners />
    </div>
  );
}
