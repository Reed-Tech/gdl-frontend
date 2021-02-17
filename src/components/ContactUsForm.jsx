import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'


const ContactUsForm = (props) => {



    return (
        <div className='contactUsForm'>
            <p>Send us a message</p>
            <Form>
                <Form.Group>
                    <Form.Control as="select">
                        <option>Buy Shares</option>
                        <option>Make Inquiry</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col sm='auto'>
                            <Form.Control required placeholder="First name" className='contactUsForm_firstName'/>
                        </Col>
                        <Col sm='auto' >
                            <Form.Control required placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control required type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control required as="textarea" rows={6} placeholder="Message" />
                </Form.Group>
                <Button variant='dark'>SEND MESSAGE</Button>
            </Form>
        </div>
    )
}

export default ContactUsForm
