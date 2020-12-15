import {React, useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import { Container, Jumbotron, Row, Col, Media }from 'react-bootstrap'
import imdb from '../api/imdb'


function DKnight(props) {

    const [currentMovie, setCurrentMovie] = useState('CURRENT MOVIE')
    const [movieRelease, setMovieRelease] = useState('RELEASED')
    const [moivePlot, setMoviePlot] = useState('PLOT HERE')

    useEffect(() => {

        const id = window.location.href.split('Movies/')[1]
        console.log(id)
        
        imdb.get(id)
            .then(res => {
                console.log(res.data)
                console.log(res.data.Ratings[1])
                setCurrentMovie(res.data.Title)
                setMovieRelease(res.data.Released)
                setMoviePlot(res.data.Plot)
            })
         
        setCurrentMovie("NO REVIEW AVAILABLE")
     }, [])

        return (
            <div className="mainPic infoText" >
                <div className='apiInfo'>
                    <h1>{currentMovie}</h1>
                    <h4>{moivePlot}</h4>
                    <h6>RELEASED: {movieRelease} </h6>
                </div>
                <Jumbotron fluid>
                    <Container>
                        <h1>BROS SIP AND TALK S#@% about...</h1>
                            <h2>{currentMovie}</h2>
                    <iframe width="590" height="332" src="https://www.youtube.com/embed/Keow0Vackx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>
                        Welcome to Brothers Sip and Talk S#@%, where we discuss all things horror and foreign...films. Over our next drink, we discuss cult classic "Tales From The Crypt: DEMON KNIGHT"...Shout out to Jada for being a beast in this Black directed horror flop turned hit....and Billy Zane...did his thing!
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }  

export default DKnight;