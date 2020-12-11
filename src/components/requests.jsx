import React from 'react'
import { Form, Button }from 'react-bootstrap'

const Requests = props => {
        return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>WHAT DO YOU WANT US TO REVIEW NEXT?</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>
                <Button variant="secondary" size="lg" block>
                   SUBMIT REQUEST!
                </Button>
            </Form>
        </div>
    );

}

export default Requests