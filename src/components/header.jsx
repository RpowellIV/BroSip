import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import {Navbar, Nav, Form} from 'react-bootstrap'
import MainDrop from './mainDrop'

const Header = props => {

    return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BROS SIP</Navbar.Brand>
            <Nav className="mainHead">
            <div className='navs'>
                <Link exact path to='/'>Home</Link>
                <Link exact path to='/Movies'>Movies</Link>
                <Link exact path to='/Music'>Music</Link>
                <Link to='/Upcoming'>Upcoming</Link>
                <Link to='/Requests'>Requests</Link>
                <Link to='/Test'><MainDrop/></Link>
            </div>
            </Nav>
            </Navbar>
    )
}

export default Header;