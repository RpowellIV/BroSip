import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userRating } from '../../redux/actions'
import { Container, Row, Col }from 'react-bootstrap'
import RecordedReview from '../recordedReview'


const Movies = ({ movie, rating }) => {

    const [addMovie, setAddMovie] = useState('') 

    useEffect(() => {

        const listedMovie = movie.map((movieInfo, index) => {
        const { lookup, rating, linkTo, poster, id } = movieInfo;
        console.log(movieInfo.rating)

            return (
                <ol><RecordedReview key={id} movieIndex={index} rating={rating} id={id} lookup={lookup} linkTo={linkTo} poster={poster}/></ol>
            )
        });
        setAddMovie(listedMovie)    
    }, [])

    

    return(
    <main>
        <Container>
            <br></br>
            <div className='movieCard'>
                {addMovie}
            </div>
        </Container>
    </main>
    )
}


const mapStatetoProps = state => ({
    movie: state.userRating
})


export default connect(mapStatetoProps)(Movies);