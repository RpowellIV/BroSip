import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Card, Button }from 'react-bootstrap'
import {connect} from 'react-redux'
import imdb from '../api/imdb'
import ThumbsUpDown from './functions/thumbsUpDown'
import Rating from 'react-rating'
import { userRating } from '../redux/actions'



const RecordedReview = props => {

    const [recReview, setRecReview] = useState('REVIEW')
    const [movieRelease, setMovieRelease] = useState('RELEASED')
    const [moivePlot, setMoviePlot] = useState('PLOT HERE')
    const [likeIt, setLikeIt] = useState('')
    const [userRate, setUserRate] = useState('-1')
    

    useEffect(() => {

        const id = props.lookup
        let value = props.rating
        console.log(value)
        console.log(id)
        
        imdb.get(id)
            .then(res => {
                console.log(res.data)
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
                            <Card.Title name="movie">{recReview}</Card.Title>
                            <Card.Text>{moivePlot}</Card.Text>
                            <Card.Text>RELEASED: {movieRelease}</Card.Text>
                            <Button variant="Secondary"><Link to={props.linkTo}>LISTEN TO OUR REVIEW</Link></Button>
                            <Card.Text>What's your rating?
                                <br></br>
                                <Rating stop={3} onChange={(value) => props.userRating(value, recReview) }/>
                                <p>USER RATE: {props.newRate}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }  

const mapDispatchToProps = dispatch => ({
    userRating: (userRate, recReview) => dispatch(userRating(userRate, recReview))
})

export default connect( null, mapDispatchToProps )(RecordedReview);