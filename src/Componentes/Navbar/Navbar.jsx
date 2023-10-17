import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import './style.css';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='container-style'>
        <img src='./logo.png' alt='logo' className='logo-style'/>
          <Navbar.Brand href="./index.js">Aromas del Sur</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Top-10.js">Top 10</Nav.Link>
            <Nav.Link href="./Ofertas.js">Ofertas</Nav.Link>
            <Nav.Link href="./Sobre-nosotros">Sobre Nosotros</Nav.Link>
          </Nav>
        </Container>
        <div><CartWidget /> </div>
      </Navbar>
    </>
    
  );
}

export default ColorSchemesExample;