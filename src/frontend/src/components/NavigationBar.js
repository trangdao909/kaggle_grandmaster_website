import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .kaggle{
    color: #20BEFF;
    font-weight: bold;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar  >
      <Navbar.Brand href="https://www.kaggle.com/">
        <span className="kaggle">Kaggle </span>Competition Dashboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/overview">Overview</Link>
            </Nav.Link>
          </Nav.Item>          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)