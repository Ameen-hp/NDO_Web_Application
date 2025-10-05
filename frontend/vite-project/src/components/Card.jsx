import Card from "./Card";
import { FaHeartbeat, FaUsers, FaWater } from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-12 grid md:grid-cols-3 gap-6">
      <Card
        icon={<FaHeartbeat />}
        title="Integrated Health Services"
        description="Providing accessible and comprehensive healthcare for women and children."
      />
      <Card
        icon={<FaUsers />}
        title="Youth Leadership Development"
        description="Empowering young people to become agents of change in their communities."
      />
      <Card
        icon={<FaWater />}
        title="WASH Programs"
        description="Ensuring access to safe water, sanitation, and hygiene education."
      />
    </section>
  );
}
