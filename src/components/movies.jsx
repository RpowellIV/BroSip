import { Container, Row, Col, Media }from 'react-bootstrap'

const Movies = props => {

    return(
    <main>
        <Container>
            <Row>
                <Col>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="holder.js/64x64"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                                <h5>Media Heading</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                        </Media.Body>
                    </Media>
                </Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </main>
    )
}

export default Movies;