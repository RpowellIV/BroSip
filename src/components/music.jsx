import { Container, Row, Col, Media, Carousel, ResponsiveEmbed } from 'react-bootstrap'

const Music = props => {

    return(
        
    <main>
        
        <Container>
            <Row>
                <Col>
                    <Media>
                        <Media.Body>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8igssCEcgZo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
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
            </Row>
            <Row>
               
                <Carousel>
                
                    <Carousel.Item>
                    <Media>
                        <Media.Body>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8igssCEcgZo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                                <h5>Media Heading</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                        </Media.Body>
                    </Media>
                    </Carousel.Item>
                
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    </main>
    )
}

export default Music;