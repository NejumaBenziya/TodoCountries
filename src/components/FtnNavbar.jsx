import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function FtnNavbar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">React Model</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default FtnNavbar;