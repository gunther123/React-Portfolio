import React from 'react';
import {  Container, Navbar, Nav } from 'react-bootstrap';

function Navigation(props) {
    const {
        page = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header>
            <Navbar className= "justify-content-start" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Steven Slocum</Navbar.Brand>
                    <Nav className="ml-auto">
                    {page.map((page) => (
                            <Nav.Link key={page.name}>
                                <span onClick={() => { setCurrentPage(page); }}>{page.name}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Navigation;