import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { Container, Jumbotron, Row, Col, Media }from 'react-bootstrap'
import Axios from 'axios'

class DKnight extends React.Component {

    state = {
        movie: [], 
        isReady: false
            }

        // id = useParams();

componentDidMount() {
    console.log('It Mounted')
  }

    render() {


        return (
            <div className="mainPic" >
                This Works
                <Jumbotron fluid>
                    <Container>
                        <h1>BROTHER SIP AND TALK SHIT about...DEMON'S KNIGHT</h1>
                    <iframe width="590" height="332" src="https://www.youtube.com/embed/Keow0Vackx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>
                        Welcome to Brothers Sip and Talk Shit, where we discuss all things horror and foreign...films. Over our next drink, we discuss cult classic "Tales From The Crypt: DEMONS KNIGHT"...Shout out to Jada for being a beast in this Black directed horror flop turned hit....and Billy Zane...did his thing!
                        </p>
                    </Container>
                </Jumbotron>
                {/* <h3>ID: {id}</h3> */}
            </div>
        )
    }  



}

export default DKnight;