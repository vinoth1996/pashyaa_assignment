import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="#home">Pune restaurants</Navbar.Brand>                
            <Nav className="ml-auto">
                <Link to="/">Home</Link>
                <Link to="/blog">blog</Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
