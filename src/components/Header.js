/** @format */

import React from "react";
import apple_logo from "../images/icons/logo-sm.png";
import cart_icon from "../images/icons/cart-sm.png";
import search_icon from "../images/icons/search-icon-sm.png";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <div className='nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md'>
      <div className='container'>
        <Navbar className='w-100' collapseOnSelect expand='lg' variant='dark'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='nav-justified w-100 nav-fill flex-grow-1 justify-content-between'>
              <Navbar.Brand href='/'>
                <img src={apple_logo} alt='' />
              </Navbar.Brand>
              <Nav.Link className='nav-link' href='/mac'>
                Mac
              </Nav.Link>
              <Nav.Link href='/iphone'>iphone</Nav.Link>
              <Nav.Link href='/ipad'>ipad</Nav.Link>
              <Nav.Link href='/watch'>Watch</Nav.Link>
              <Nav.Link href='/tv'>Tv</Nav.Link>
              <Nav.Link href='/music'>Music</Nav.Link>
              <Nav.Link href='/support'>Support</Nav.Link>
              <Nav.Link href='/search'>
                <img src={search_icon} alt='' />
              </Nav.Link>
              <Nav.Link href='/cart'>
                <img src={cart_icon} alt='' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
