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
                            src="https://64.media.tumblr.com/48f30edf22ec858957e7f30de40321fc/tumblr_pn7lwlKGHs1ssmbizo1_640.jpg"
                            alt="Demon Knight"
                        />
                        <Media.Body>
                                <h5>DEMON KNIGHT</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                        </Media.Body>
                    </Media>
                </Col>
                <Col><Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://gonewiththetwins.com/new/wp-content/uploads/2018/12/demonknight.jpg"
                            alt="Demon Knight"
                        />
                        <Media.Body>
                                <h5>DEMON KNIGHT</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                        </Media.Body>
                    </Media></Col>
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