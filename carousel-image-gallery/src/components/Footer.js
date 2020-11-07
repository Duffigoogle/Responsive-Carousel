import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div className='footer'>
            <Navbar bg='light' className='justify-content-center'>
                <Navbar.Brand>
                    <h6 className='footer-content'> Designed by <u><i>Duffigoogle</i></u> &copy;2020.</h6>
                </Navbar.Brand>
            </Navbar>
            
        </div>
    )
}

export default Footer
