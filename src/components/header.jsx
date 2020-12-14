import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import MovieDrop from './movieDrop'
import MusicDrop from './musicDrop'

const Header = props => {

    return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">BROS SIP...</Navbar.Brand>
            <Nav className="mainHead">
            <div className='navs'>
                <Link exact path to='/Movies'><MovieDrop/></Link>
                <Link exact path to='/Music'><MusicDrop/></Link>
                <Link to='/Upcoming'>Upcoming</Link>
                <Link to='/Requests'>Requests</Link>
            </div>
            </Nav>
            </Navbar>
    )
}


export default Header;