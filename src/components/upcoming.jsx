import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { newRequest } from '../redux/actions'
import { Container, Col, Row, Card }from 'react-bootstrap'
import RecReview from './recorded'

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


        return (
        <div className='viewIt'>
            <h1>UPCOMING REVIEWS</h1>
            <Container>
                <Row>
                    <Col><RecReview lookup='Candyman' poster='https://posterspy.com/wp-content/uploads/2020/10/candyman-genzo-1280.jpg'/></Col>
                    <Col><RecReview lookup='One Cut of the Dead' poster='https://img.reelgood.com/content/movie/31fd69ed-706d-421b-9049-18f846b7e682/poster-780.jpg'/></Col>
                    <Col><RecReview lookup='BBOY' poster='http://www.impawards.com/2013/posters/bboy_for_life.jpg'/></Col>
                </Row>
                <Row>
                    <Col><li><RecReview lookup='Pelo Malo' poster='https://i.pinimg.com/originals/1c/2c/33/1c2c33f06e76e00c5f742294b52caf99.jpg'/></li></Col>
                    <Col><li><RecReview lookup='Suspiria' poster='https://images-na.ssl-images-amazon.com/images/I/61Bf6f68DcL._AC_SL1000_.jpg'/></li></Col>
                    <Col><RecReview lookup='Nosferatu' poster='https://m.media-amazon.com/images/M/MV5BMTAxYjEyMTctZTg3Ni00MGZmLWIxMmMtOGM2NTFiY2U3MmExXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR89,0,630,1200_AL_.jpg'/></Col>
                </Row>
            </Container>

        <div className='movieCard'>
            <li><RecReview lookup='Candyman' poster='https://posterspy.com/wp-content/uploads/2020/10/candyman-genzo-1280.jpg'/></li>
            <li><RecReview lookup='One Cut of the Dead' poster='https://lh3.googleusercontent.com/proxy/frDI3Nd5LOP0g6mrS6oOe-pncMGf5uWxpFoT0Rwrs1iZrfLPLVnvI6jlb4ueiRaztHGvIVOXHpyy_Zm1d3vXBdinBod2wPVexzlIdJ4sBUvDBPm8kA9A_floxwfhLPkceRtHEpunBp-MLZgXlKIkZw'/></li>
            <li><RecReview lookup='BBOY' poster='http://www.impawards.com/2013/posters/bboy_for_life.jpg'/></li>
            <li><RecReview lookup='Pelo Malo' poster='https://i.pinimg.com/originals/1c/2c/33/1c2c33f06e76e00c5f742294b52caf99.jpg'/></li>
            <li><RecReview lookup='Suspiria' poster='https://images-na.ssl-images-amazon.com/images/I/61Bf6f68DcL._AC_SL1000_.jpg'/></li>
            <li><RecReview lookup='Nosferatu' poster='https://m.media-amazon.com/images/M/MV5BMTAxYjEyMTctZTg3Ni00MGZmLWIxMmMtOGM2NTFiY2U3MmExXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR89,0,630,1200_AL_.jpg'/></li>
        </div>
            <h1>HERE ARE YOUR REQUESTS!</h1>
            <Container className='movieCard'>
                <Row>
                {addRequest}
                </Row>
            </Container>
            
        </div>
    );

}

const mapStatetoProps = state => ({
    info: state.request.info
})

export default connect(mapStatetoProps)(Upcoming)