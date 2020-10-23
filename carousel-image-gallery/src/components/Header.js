import React from 'react';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';



class Nav extends React.Component {
    render() {
        return (
            <Container>
                <Navbar expand='lg' variant='light' bg='light'>
                        <Navbar.Brand href='#'><h2><u>Trippa</u><span>Shots</span></h2></Navbar.Brand>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit"> <FaSearch /> </Button>
                        </Form>
                </Navbar>
                {/* Add social media icons */}
                {/* FcSearch */}
                
            </Container>    
        );
    };
}

function Header() {
    return (
        <div>
            <Nav />
            <h1>TrippaShots</h1>
        </div>
    );
}

export default Header
