import { Container, Row, Col, Media, Carousel, ResponsiveEmbed } from 'react-bootstrap'

const Music = props => {

    return(
        
    <main>
        
        <Container>
            <Row>
               
                <Carousel>
                
                    <Carousel.Item>
                    <ResponsiveEmbed aspectRatio="16by9">
                    <iframe width="200%" height="200%" src="https://www.youtube.com/embed/8igssCEcgZo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ResponsiveEmbed>
                        <Carousel.Caption>
                        <h3>B.I.G. just a tastemaker?</h3>
                        <p>The discussion begins with as debate on "Notorious Thugs"...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                
                    <Carousel.Item>
                    <ResponsiveEmbed aspectRatio="16by9">
                    <iframe width="200%" height="200%" src="https://youtube.com/embed/yxofOgBgBDU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ResponsiveEmbed>

                        <Carousel.Caption>
                        <h3>Notorious B.I.G. = Drake = Beyoncé = ?</h3>
                        <p>Is tastemaker a bad word?</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Row>
        </Container>
    </main>
    )
}

export default Music;