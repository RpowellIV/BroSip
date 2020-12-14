import { React, useState } from 'react'
import { Form, Button }from 'react-bootstrap'
import {connect} from 'react-redux'
import { newRequest } from '../redux/actions'


const Requests = props => {

    const [email, setEmail] = useState('')   
    const [request, setRequest] = useState('')

    const handleChange = e => {
        if (e.target.name === 'email') setEmail(e.target.value);
        if (e.target.name === 'request') setRequest(e.target.value);
      }

    const handleSubmit = () => {
        props.newRequest(email, request);
        setEmail('');
        setRequest('');
        alert('REQUEST RECIEVED!')
      }

        return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} name="email" type="email" value={email} placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>WHAT DO YOU WANT US TO REVIEW NEXT?</Form.Label>
                    <Form.Control onChange={handleChange} name="request" value={request} as="textarea" rows={10} />
                </Form.Group>
                <Button onClick={handleSubmit} variant="secondary" size="lg" block>
                   SUBMIT REQUEST!
                </Button>
            </Form>
        </div>
    );

}


const mapDispatchToProps = dispatch => ({
    newRequest: (email, request) => dispatch(newRequest(email, request))
})


export default connect( null, mapDispatchToProps )( Requests )