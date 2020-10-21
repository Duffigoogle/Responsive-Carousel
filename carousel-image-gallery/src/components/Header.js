import React from 'react';
import { Container, Navbar } from 'react-bootstrap';



class Nav extends React.Component {
    render() {
        return (
            <Container>
                <Navbar expand='lg' variant='light' bg='light'>
                        <Navbar.Brand href='#'>Trippa</Navbar.Brand>
                </Navbar>
                {/* Add social media icons */}
            </Container>    
        );
    };
}

function Header() {
    return (
        <div>
            <Nav />
            <h1>TrippaShots</h1>
            {/* Search Form */}
            {/* Navigation */}
            {/* Carousel */}
            {/* Gallery */}
        </div>
    );
}

export default Header
