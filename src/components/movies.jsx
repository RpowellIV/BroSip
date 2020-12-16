import { Container, Row, Col}from 'react-bootstrap'
import RecordedReview from './recordedReview'

const Movies = props => {

    return(
    <main>
        <Container>
            <br></br>
            <Row>
                <Col>
                    <RecordedReview lookup="Demon Knight" linkTo="/Movies/Demon+Knight" poster="https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg"/>
                </Col>
                <Col>
                    <RecordedReview lookup="Babadook" linkTo="/Movies/Babadook" poster="https://64.media.tumblr.com/59bd87ac2f16c1196301bd42c88fb564/tumblr_osi48pJOSG1s80h8lo1_1280.jpg"/>
                </Col>
                <Col>
                    <RecordedReview lookup="The 36th Chamber" linkTo="/Movies/The+36th+Chamber" poster="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_36th_Chamber_of_Shaolin.jpg/220px-The_36th_Chamber_of_Shaolin.jpg"/>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <RecordedReview lookup="Blue Iguana" linkTo="/Movies/Blue+Iguana" poster="https://m.media-amazon.com/images/M/MV5BN2Y0ZmEwODAtODQzOC00ZjcwLTg5MjMtMWM3OTM0YmUzYWQ2XkEyXkFqcGdeQXVyNzM5Mjg3ODg@._V1_.jpg"/>
                </Col>
                <Col>
                    <RecordedReview lookup="The 36th Chamber" linkTo="/Movies/The+36th+Chamber" poster="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_36th_Chamber_of_Shaolin.jpg/220px-The_36th_Chamber_of_Shaolin.jpg"/>
                </Col>
                <Col>
                    <RecordedReview lookup="The 36th Chamber" linkTo="/Movies/The+36th+Chamber" poster="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/The_36th_Chamber_of_Shaolin.jpg/220px-The_36th_Chamber_of_Shaolin.jpg"/>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <RecordedReview lookup="Demon Knight" poster="https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg"/>
                </Col>
                <Col>
                    <RecordedReview lookup="Demon night" poster="https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg"/>
                </Col>
                <Col>
                    <RecordedReview lookup="Demon Knight" poster="https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg"/>
                </Col>
            </Row>
        </Container>
    </main>
    )
}

export default Movies;