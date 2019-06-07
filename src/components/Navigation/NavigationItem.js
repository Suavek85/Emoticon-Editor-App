import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Navigation = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Emoticon Editor</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#editor">Editor</Nav.Link>
          <NavDropdown title="Favs" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Option1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Option2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Option3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
