import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar
      variant="dark"
      bg="dark"
      expand="lg"
      className="justify-content-center"
    >
      <Navbar.Brand href="">Pick My Anime</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}

export default MyNavbar;
