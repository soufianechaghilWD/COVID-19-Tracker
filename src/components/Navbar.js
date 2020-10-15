import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar light  expand="md" className="nav">
        <NavbarBrand href="#" ><h4 className="nav__brand">COVID-19 Tracker</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
            <NavItem >
              <NavLink href="#"><h6 className="nav__items">News</h6></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h6 className="nav__items">Map</h6></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><h6 className="nav__items">Contact</h6></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Example;