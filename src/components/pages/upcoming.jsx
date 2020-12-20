import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { newRequest } from '../../redux/actions'
import { Container, Col, Row, Card }from 'react-bootstrap'
import RecReview from '../recorded'

const Upcoming = ({ info }) => {
    console.log(info)

    const [addRequest, setAddRequest] = useState('NO REQUEST MADE') 

        useEffect(() => {
        
        if(info.length>0) {
            const requestAdd = info.map((newInfo, index) => {
                const { email, request, date } = newInfo;
                return (

                    <Card key={`date-index`}>
                        <Card.Header>DATE REQUESTED: {date} </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    {request}{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    REQUESTED BY: <cite title="Source Title">{email}</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                )
                    
            });
            setAddRequest(requestAdd)
            }
    }, [])

    const addMovie = [
        {
            lookup:'Candyman',
            poster:'https://posterspy.com/wp-content/uploads/2020/10/candyman-genzo-1280.jpg'
        },
        {
            lookup:'One Cut of the Dead',
            poster:'https://img.reelgood.com/content/movie/31fd69ed-706d-421b-9049-18f846b7e682/poster-780.jpg'
        },
        {
            lookup:'BBOY',
            poster:'https://i.pinimg.com/564x/1a/c7/11/1ac71101bf7bd721f27d40a7c7eceb8e.jpg'
        },
        {
            lookup:'Pelo Malo',
            poster:'https://i.pinimg.com/originals/1c/2c/33/1c2c33f06e76e00c5f742294b52caf99.jpg'
        },
        {
            lookup:'Suspiria',
            poster:'https://images-na.ssl-images-amazon.com/images/I/61Bf6f68DcL._AC_SL1000_.jpg'
        },
        {
            lookup:'Nosferatu',
            poster:'https://m.media-amazon.com/images/M/MV5BMTAxYjEyMTctZTg3Ni00MGZmLWIxMmMtOGM2NTFiY2U3MmExXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR89,0,630,1200_AL_.jpg'
        },
        {
            lookup:'',
            poster:''
        }];

    const listedMovie = addMovie.map((movie) => {
        return <ol><RecReview key={movie.lookup} lookup={movie.lookup} poster={movie.poster}/></ol>
    })


        return (
        <main>
            <div>
                <Container>
                    <h1 className='revText'>UPCOMING REVIEWS</h1>
                    <div className='movieCard'>
                        {listedMovie}
                    </div>
                </Container>
            </div>
            <br></br>
            <div>
                <Container>
                    <h1 className='revText'>HERE ARE YOUR REQUESTS!</h1>
                        <div className='movieCard'>
                            {addRequest}
                        </div>
                </Container>
            </div>
        </main>
    );

}

const mapStatetoProps = state => ({
    info: state.request.info
})

export default connect(mapStatetoProps)(Upcoming)