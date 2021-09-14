import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Layout from '../components/layout'
//import MyModal from '../elements/MyModal'
import Modal from 'react-bootstrap/Modal';

//const contactPage = () => {
function ContactPage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <Layout pageTitle="Contact Us">

            <ListGroup>
                <ListGroup.Item>Email: info@languageshop.club</ListGroup.Item>
                <ListGroup.Item>Phone: +61 406 175 613 Australia</ListGroup.Item>
            </ListGroup>

            <h4>Or fill out the form below</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email-input" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone-input" placeholder="Phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name-input" placeholder="Name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="interest">
                    <FloatingLabel controlId="floatingSelect" label="What are you interested in">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="Group Lessons">Group Lessons</option>
                            <option value="Private Lessons">Private Lessons</option>
                            <option value="Free Lesson">Free Lesson</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="otherComments">
                    <FloatingLabel controlId="floatingTextarea2" label="Additional message">
                        <Form.Control
                            as="textarea"
                            placeholder="Additional message"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Button variant="primary" color="primary" onClick={handleShow}>
                    Submit
                </Button>


            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>



        </Layout>

    );

}



export default ContactPage;

