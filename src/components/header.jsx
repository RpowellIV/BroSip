import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


const Header = props => {

    return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">BROS SIP...</Navbar.Brand>
            <Nav className="mainHead">
            <div className='navs'>
                <Link exact path to='/Movies'>MOVIES</Link>
                <Link exact path to='/Music'>MUSIC</Link>
                <Link to='/Upcoming'>UPCOMING</Link>
                <Link to='/Requests'>REQUESTS</Link>
                {/* <Link to='/FormTest'>TEST LINK</Link> */}
            </div>
            </Nav>
            </Navbar>
    )
}


export default Header;