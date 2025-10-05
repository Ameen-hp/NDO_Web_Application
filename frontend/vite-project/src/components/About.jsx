import Section from "./Section";

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Section title="About NDO">
        <p>
          NDO is a woman-led, professionally managed indigenous organization dedicated to rural development
          and humanitarian work. It focuses on enhancing the technical and managerial skills of local communities
          while addressing their specific needs. NDO empowers rural women and children through healthcare, education,
          food security, livelihoods, WASH, disaster management, and more.
        </p>
      </Section>

      <Section title="Registration Authority">
        <p>
          Founded in 2006, registered with the Office of the District Officer, Social Welfare and Community
          Development Department under registration number DO/SW/CDD/VA/DU/99 in 2009.
        </p>
      </Section>

      <Section title="Organization’s Strengths">
        <ul className="list-disc list-inside">
          <li>Deep understanding of local customs, traditions, and livelihood practices.</li>
          <li>Strong community presence and expertise in mobilizing capacity.</li>
          <li>Dedicated local leadership and high trust within communities.</li>
          <li>Established collaborations with District and Provincial Governments.</li>
          <li>Extensive network of trained volunteers including women, men, youth, and children.</li>
        </ul>
        <p className="mt-4">
          NDO has responded to emergencies such as floods in 2010, 2011, 2020, and 2022, providing essential 
          food, hygiene kits, MHM kits, and constructing women-friendly WASH facilities. Awareness sessions 
          on reproductive health, personal hygiene, and safe practices were organized.
        </p>
      </Section>

      <Section title="Approach">
        <p>
          NDO follows a rights-based approach, integrating human rights of all communities into development. 
          Activities include capacity-building workshops, consultative meetings, awareness campaigns, partnership 
          building, and service delivery in infrastructure, healthcare, and disaster relief.
        </p>
      </Section>

      <Section title="Geographical Outreach">
        <p>
          NDO operates in districts Kamber Shahdadkot, Dadu, and Jamshoro in Sindh province.
        </p>
      </Section>
    </div>
  );
}
