import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">مجلس اتحاد العلماء</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">ہوم</Nav.Link>
            <Nav.Link href="#features">خصوصیات</Nav.Link>
            <Nav.Link href="#pricing">قیمتیں</Nav.Link>
            <Nav.Link href="#about">ہمارے بارے میں</Nav.Link>
            <Nav.Link href="#contact">رابطہ کریں</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
