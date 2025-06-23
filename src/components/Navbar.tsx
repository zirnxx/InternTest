import { Container, Navbar as RBNavbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { BsPersonFill, BsPersonPlusFill, BsGridFill } from 'react-icons/bs';
import {
  Home,
  Phone,
  Monitor,
  Factory,
  HeartPulse,
  Building2,
  Boxes
} from 'lucide-react';

const Navbar = () => (
  <RBNavbar bg="light" expand="lg" sticky="top" className="shadow-sm border-bottom">
    <Container>
      <RBNavbar.Brand href="/" className="d-flex align-items-center">
        <img
          src="/logo.jpg"
          alt="RizzMart Logo"
          height="30"
          className="me-2"
        />
        RizzMart
      </RBNavbar.Brand>

      <RBNavbar.Toggle />
      <RBNavbar.Collapse className="justify-content-between">
        <Nav className="me-auto">
          <Nav.Link href="/">
            <Home size={16} className="me-1 mb-1" />
            Beranda
          </Nav.Link>

          <NavDropdown title={<span><BsGridFill className="me-1 mb-1" />Kategori</span>} id="kategori-dropdown">
            <NavDropdown.Item href="#kategori-1">
              <Home size={16} className="me-2" />
              Peralatan Rumah Tangga
            </NavDropdown.Item>
            <NavDropdown.Item href="#kategori-2">
              <Monitor size={16} className="me-2" />
              Elektronik
            </NavDropdown.Item>
            <NavDropdown.Item href="#kategori-3">
              <Factory size={16} className="me-2" />
              Peralatan Industri
            </NavDropdown.Item>
            <NavDropdown.Item href="#kategori-4">
              <HeartPulse size={16} className="me-2" />
              Kesehatan
            </NavDropdown.Item>
            <NavDropdown.Item href="#kategori-5">
              <Building2 size={16} className="me-2" />
              Bahan Bangunan
            </NavDropdown.Item>
            <NavDropdown.Item href="#kategori-6">
              <Boxes size={16} className="me-2" />
              Lainnya
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#kontak">
            <Phone size={16} className="me-1 mb-1" />
            Kontak
          </Nav.Link>
        </Nav>

        <div>
          <Button variant="outline-primary" className="me-2 rounded-pill">
            <BsPersonFill className="me-1" />
            Login
          </Button>
          <Button variant="primary" className="rounded-pill">
            <BsPersonPlusFill className="me-1" />
            Register
          </Button>
        </div>
      </RBNavbar.Collapse>
    </Container>
  </RBNavbar>
);

export default Navbar;