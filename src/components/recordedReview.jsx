import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Card, Button }from 'react-bootstrap'
import imdb from '../api/imdb'
import ThumbsUpDown from './functions/thumbsUpDown'
import Rating from './functions/rateIt'


function RecordedReview(props) {

    const [recReview, setRecReview] = useState('REVIEW')
    const [movieRelease, setMovieRelease] = useState('RELEASED')
    const [moivePlot, setMoviePlot] = useState('PLOT HERE')
    const [likeIt, setLikeIt] = useState('')


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
                            <Button variant="Secondary"><Link to={props.linkTo}>CHECKOUT OUT REVIEW</Link></Button>
                            <Card.Text>What's your rating? 
                                <Rating
                                    emptySymbol={<span className="icon-text">-</span>}
                                    fullSymbol={[1,2,3,4,5].map(n => <span className="icon-text">{n}</span>)}
                                    />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }  



export default RecordedReview;