import React, {useState} from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Modal, Form} from "react-bootstrap";

function NavBar() {

    const [show, setShow] = useState(false);

    const handelClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className="mb-4" expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand style={{fontSize: '30px'}}>Dragons</Navbar.Brand>
                    <Nav className="ms-md-auto">
                        <Button variant="warning" className="me-2 mt-2 mb-2" onClick={handleShow}>Sing In</Button>
                        <Button variant="warning" className="me-2 mt-2 mb-2" onClick={handleShow}>Sign Out</Button>
                    </Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">We'll never share your email with anyone
                                    else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    );
}

export default NavBar;