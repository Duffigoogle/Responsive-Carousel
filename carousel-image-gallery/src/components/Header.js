import React from 'react';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';



class Nav extends React.Component {
    render() {
        return ( 
                <Navbar expand='lg' variant='light' bg='dark' fixed="top">
                    <Container>
                        <Navbar.Brand href='#'><h5><u>Trippa</u><span>Shots</span></h5></Navbar.Brand>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit"> <FaSearch /> </Button>
                        </Form>
                    </Container> 
                </Navbar>
        );
    };
}

function Header() {
    return (
        <div className='header'>
            <Nav />
        </div>
    );
}

export default Header
