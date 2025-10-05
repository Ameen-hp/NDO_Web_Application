import Section from "./Section";
import Card from "../components/Card";

export default function Service() {
  const services = [
    {
      title: "Economic and Legal Empowerment of Women (ELEW)",
      description: "Enhancing women's economic opportunities, legal rights, vocational training, and advocacy."
    },
    {
      title: "Quality Education (QE)",
      description: "Providing access to formal/non-formal education, teacher training, curriculum enrichment, and MHM kits."
    },
    {
      title: "Integrated Health Services (IHS)",
      description: "Maternal & child healthcare, nutrition, preventive care, vaccination campaigns, and health awareness."
    },
    {
      title: "Youth Leadership Development (YLD)",
      description: "Career counseling, youth leadership, civic engagement, human rights awareness, and drawing competitions."
    },
    {
      title: "Water, Sanitation, and Hygiene (WASH)",
      description: "Safe drinking water, temporary pit latrines, hygiene sessions, MHM corners, and school WASH facilities."
    },
    {
      title: "Emergency Relief and Rehabilitation (ERR)",
      description: "Disaster preparedness & response, food & non-food distributions, medical camps, and community resilience building."
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-0">
      <Section title="Our Programs & Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <Card key={index} title={s.title} description={s.description} />
          ))}
        </div>
      </Section>

      <Section title="Accomplishments & Activities">
        <p>
          NDO has trained thousands of farmers, women, and youth in livelihood, leadership, governance, 
          and education programs. Projects include Better Cotton promotion, cage culture for fishers, 
          pro-women legislation advocacy, flood response, medical camps, safe WASH facilities, and more.
        </p>
      </Section>
    </div>
  );
}
