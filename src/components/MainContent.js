import logo from "../images/logo192.png";
import Container from "react-bootstrap/Container";

function MainContent() {
  return (
    <Container>
      <h2>Here's an h2</h2>
      <p>Here's a p</p>
      <img src={logo} alt="Placeholder" />

      <h3>Here's an h3</h3>
      <p>Some more p</p>
      <h3>Here's an h3</h3>
      <p>Some more p</p>
      <h3>Here's an h3</h3>
      <p>Some more p</p>
    </Container>
  );
}

export default MainContent;
