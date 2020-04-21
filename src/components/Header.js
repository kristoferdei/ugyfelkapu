import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Header  extends  React.Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Ügyfélkapu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link tag={Link} href="/ugyek">Ügyek</Nav.Link>
                        <Nav.Link tag={Link} href="/munkatarsak">Munkatársak</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;