import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function navBar() {
    return (
        <div>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/css/mdb.min.css" />
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/js/mdb.min.js"></script> */}

            <Navbar id="nav" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Austin Jerich</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Overview</Nav.Link>
                    <Nav.Link href="#edu">Education</Nav.Link>
                    <Nav.Link href="#exp">Experience</Nav.Link>
                    <Nav.Link href="#cont">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}


export default navBar