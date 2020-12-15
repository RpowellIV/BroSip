import {React, useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import { Container, Jumbotron, Row, Col, Media }from 'react-bootstrap'
import imdb from '../api/imdb'
import WatchReview from './watchReview'


function ThirtySix(props) {

        return (
            <WatchReview 
                tube="https://www.youtube.com/embed/NNFiYApSXjA" 
                blerb="Welcome to Brothers Sip and Talk Shit, where we discuss all  things horror and foreign films. Over our first next drink we discuss acclaimed martial arts film, 'The 36th Chamber of Shaolin'. Ironically recorded when all the BLM protests got into gear. It's more relevant than you think..."
            />
        )
    }  

export default ThirtySix;