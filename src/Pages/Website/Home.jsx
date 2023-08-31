import NavBar from "../../Components/Website/NavBar";
import banner1 from "../../Assets/Images/banner_1.jpg";
import banner2 from "../../Assets/Images/banner_2.jpg";
import banner3 from "../../Assets/Images/banner_3.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import About from "./About";
import OurTeam from "./OurTeam";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="home">
        <Container>
          <Row>
            <Col>
              <div className="left">
                <h2>أهلا بك ، منصة درَب ترحب بك ..</h2>
                <p>
                  أمتلك موقعاً الكترونيـا فريد من نوعه.. نصنع الحقيقة من الخيال!
                </p>
                <Button className="view-more" variant="outline-primary">
                  آستكشف المزيد!
                </Button>
              </div>
            </Col>
            <Col>
              <div className="right">
                <img className="banner" src={banner1} alt="profile" />
                <img className="bannerIndex" src={banner3} alt="profile" />
                <img className="bannerIndex2" src={banner2} alt="profile" />
              </div>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#20253d"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,229.3C560,256,640,256,720,224C800,192,880,128,960,122.7C1040,117,1120,171,1200,186.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
      <About />
      <OurTeam />
      <Services />
    </>
  );
}
