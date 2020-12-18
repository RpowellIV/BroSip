import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Card, Button }from 'react-bootstrap'
import imdb from '../api/imdb'
import Rating from 'react-rating'
import { userRating } from '../redux/actions'

function RecReview(props) {

    const [recReview, setRecReview] = useState('UPCOMING REVIEW')
    const [movieRelease, setMovieRelease] = useState('RELEASED')
    const [moivePlot, setMoviePlot] = useState('PLOT HERE')

    useEffect(() => {

        const id = props.lookup
        console.log(id)
        
        imdb.get(id)
            .then(res => {
                console.log(res.data)
                console.log(res.data.Ratings[1])
                setRecReview(res.data.Title)
                setMovieRelease(res.data.Released)
                setMoviePlot(res.data.Plot)
            })
         
        setRecReview("NO REVIEW AVAILABLE")
     }, [])

        return (
            <div className="mainPic infoText" >
                <div className='apiInfo'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.poster} />
                    <Card.Body>
                        <Card.Title>{recReview}</Card.Title>
                        <Card.Text>{moivePlot}</Card.Text>
                        <Card.Text>RELEASED: {movieRelease}</Card.Text>
                        <Button variant="primary">See more</Button>
                        {/* <br></br>
                        <br></br>
                        <Rating stop={3} onChange={(value) => props.userRating(value, recReview) }/> */}
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }  

export default RecReview;