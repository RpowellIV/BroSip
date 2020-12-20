import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userRating } from '../../redux/actions'
import { Container, Row, Col }from 'react-bootstrap'
import RecordedReview from '../recordedReview'


const Movies = ({ movie, rating }) => {

    const [addMovie, setAddMovie] = useState('"TEST"')
    const [newRate, setNewRate] = useState('')  

    useEffect(() => {


        const listedMovie = movie.map((movieInfo, index) => {
        const { lookup, rating, linkTo, poster, id } = movieInfo;
        console.log(movieInfo.rating)
        let newRate = movieInfo.rating
        let changeRate;
            if(newRate > 0) {
                changeRate = newRate
            } else {
                changeRate = 'Not yet rated'
            }
            console.log(movieInfo)
            return (
                <ol><RecordedReview key={id} rating={rating} lookup={lookup} linkTo={linkTo} poster={poster} newRate={newRate}/></ol>
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
    movie: state.userRating.movie,
    rating: state.userRating.rating
})


export default connect(mapStatetoProps)(Movies);