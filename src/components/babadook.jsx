import {React, useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import { Container, Jumbotron, Row, Col, Media }from 'react-bootstrap'
import imdb from '../api/imdb'
import WatchReview from './watchReview'


function Babadook(props) {

        return (
            <WatchReview 
                tube="https://www.youtube.com/embed/av90aM9cWDI" 
                blerb="Welcome to Brothers Sip and Talk Shit, where we discuss all  things horror and foreign films. Over our first drink we discuss 'THE BABADOOK'."
            />
        )
    }  

export default Babadook;