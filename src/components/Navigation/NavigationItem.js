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
          <NavDropdown title="Face Colors" id="basic-nav-dropdown">
            <NavDropdown.Item id='orange' onClick={props.changeFaceColor} href="#action/3.1">Orange</NavDropdown.Item>
            <NavDropdown.Item id='pink' onClick={props.changeFaceColor}  href="#action/3.2">Pink</NavDropdown.Item>
            <NavDropdown.Item  id='brown' onClick={props.changeFaceColor} href="#action/3.3">Brown</NavDropdown.Item>
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
