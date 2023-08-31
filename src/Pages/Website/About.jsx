import { Container } from "react-bootstrap";
import Certi from "../../Components/Website/TimeLine/Certi";

export default function About() {
  return (
    <>
      <section id="about">
        <Container>
          <Certi />
        </Container>
      </section>
      <svg
        style={{ background: "#20253d" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0a0844"
          fillOpacity="1"
          d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,229.3C560,256,640,256,720,224C800,192,880,128,960,122.7C1040,117,1120,171,1200,186.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
