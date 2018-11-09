import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
      return (
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Link to="/">
              <Navbar.Brand>
                <Image src="assets/logo.png" className="nav-logo" responsive />
              </Navbar.Brand>
              </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
           <Nav pullRight>
            <NavItem eventKey={1} componentClass={ Link } href="/" to="/">
              Start
            </NavItem>
            <NavItem eventKey={2} componentClass={ Link } href="/programma" to="/programma">
              Programma
            </NavItem>
            <NavItem eventKey={3} componentClass={ Link } href="/nieuws" to="/nieuws">
              Nieuws
            </NavItem>
           </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}
