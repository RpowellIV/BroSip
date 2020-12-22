import {React, useState, useEffect} from 'react';
import { Container, Jumbotron }from 'react-bootstrap'
import imdb from '../api/imdb'
import ThumbsUpDown from './functions/thumbsUpDown'


function WatchReview(props) {

    const [currentMovie, setCurrentMovie] = useState('WATCH THE REVIEW')
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
            <div className="mainPic infoText revText" >
                <div className='apiInfo'>
                    <h1>{currentMovie}</h1>
                    <h4>{moivePlot}</h4>
                    <h6>RELEASED: {movieRelease} </h6>
                </div>
                <Jumbotron fluid>
                    <Container className="mainPic">
                        <h1>BROS SIP AND TALK S#@% about...</h1>
                            <h2>{currentMovie}</h2>
                    <iframe width="590" height="332" src={props.tube} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>{props.blerb}</p>
                        <br></br>
                        <div>
                        <ThumbsUpDown movie={currentMovie}/>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        )
    }  

export default WatchReview;