import { Container } from "react-bootstrap";
import "./LoadingStyle.css";

export default function Loading() {
  return (
    <Container className="loaderContainer">
      <span className="loader"></span>
    </Container>
  );
}
