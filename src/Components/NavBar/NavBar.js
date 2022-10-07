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
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;