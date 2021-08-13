import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container bg="light">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </Container>
  );
}

export default Footer;
