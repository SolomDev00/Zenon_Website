import { Container } from "react-bootstrap";
import "../../Components/Website/OurTeam/TeamStyle.css";
import TeamGate from "../../Components/Website/OurTeam/TeamGate";

export default function OurTeam() {
  return (
    <section id="ourTeam">
      <Container>
        <div className="main-title">
          <h2>مـؤسسين الشركة</h2>
        </div>
        <TeamGate />
      </Container>
    </section>
  );
}
