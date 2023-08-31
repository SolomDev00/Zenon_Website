import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/Images/logo_ar.png";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scorll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
            >
              الرئيسية
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              href="#about"
              onClick={() => onUpdateActiveLink("about")}
            >
              من نحن ؟
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
              href="#services"
              onClick={() => onUpdateActiveLink("services")}
            >
              خدماتنا
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "ourteam" ? "active navbar-link" : "navbar-link"
              }
              href="#ourteam"
              onClick={() => onUpdateActiveLink("ourteam")}
            >
              شركاءنا
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link
            id="contact"
            className={
              activeLink === "contact" ? "active navbar-link" : "navbar-link"
            }
            href="#contact"
            onClick={() => onUpdateActiveLink("contact")}
          >
            تواصل معنا
          </Nav.Link>
        </Nav>
        {/* <Nav>
          <span className="profile">
            <DropdownButton split id="dropdown-basic-button" title="إسلام وائل">
              <DropdownItem>حسـابي</DropdownItem>
              <DropdownItem>الإعـدادات</DropdownItem>
              <DropdownItem>تسجيل الخروج</DropdownItem>
            </DropdownButton>
            <img className="profile-img" src={profile} alt="profile" />
          </span>
        </Nav> */}
      </Container>
    </Navbar>
  );
}
