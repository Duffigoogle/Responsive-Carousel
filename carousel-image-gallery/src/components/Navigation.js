import React from 'react';
// import { Nav } from 'react-bootstrap';
import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function Navigation() {
    return (
        <Router>
                    {/* <Nav className="mr-auto justify-content-center" variant="tabs" defaultActiveKey="/home" >
                        <Nav.Link href="/home">Places</Nav.Link>
                        <Nav.Link href="#beaches">Beaches</Nav.Link>
                        <Nav.Link href="#parks">Parks</Nav.Link>
                        <Nav.Link href="#museums">Museums</Nav.Link>
                        <Nav.Link href="#food">Food</Nav.Link>
                    </Nav> */}
                    <nav className='nav-top'>
                        <ul>
                            <li><NavLink to="/">Places</NavLink></li>
                            <li><NavLink to="/beaches">Beaches</NavLink></li>
                            <li><NavLink to="/parks">Parks</NavLink></li>
                            <li><NavLink to="/museums">Museums</NavLink></li>
                            <li><NavLink to="/food">Food</NavLink></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'> <Places />  </Route>
                        <Route path='/beaches'> <Beaches /> </Route>
                        <Route path='/parks'> <Parks /> </Route>
                        <Route path='/museums'> <Museums/> </Route>
                        <Route path='/food'> <Food /></Route>
                        <Route path='*'> <NotFound /></Route>
                    </Switch>
        </Router>
    );
}

export default Navigation

function Places() {
    return (
        <div>
            <h2>Places</h2>
            {/* <Gallery title='PLACES' fetchURL={} /> */}
        </div>
    );
}

function Beaches() {
    return (
        <div>
            <h2>Places</h2>
        </div>
    );
}

function Parks() {
    return (
        <div>
            <h2>Places</h2>
        </div>
    );
}

function Museums() {
    return (
        <div>
            <h2>Places</h2>
        </div>
    );
}

function Food() {
    return (
        <div>
            <h2>Places</h2>
        </div>
    );
}

function NotFound() {
    return (
        <div>
            <h2>404 Error</h2>
        </div>
    );
}