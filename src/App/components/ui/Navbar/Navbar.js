import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {Container,Navbar as NavBar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = (props) => {
 
    return(
      <div className={styles.Navbar} data-testid="Navbar">
          <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      </div>
    );

}


export default Navbar;
