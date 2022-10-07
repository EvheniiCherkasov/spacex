import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";


const Forms = ({titel, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <Form className="text-center">
                <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Enter email"/>
                    <Form.Text className="text-muted">We'll never share your email with anyone
                        else.</Form.Text>
                </Form.Group>
                <Form.Group className="mt-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  value={pass}
                                  onChange={(e) => setPass(e.target.value)}
                                  placeholder="Enter password"/>
                </Form.Group>

                <Button className="mt-2" variant="warning" onClick={() => handleClick(email, pass)}>
                    {titel}
                </Button>
            </Form>
        </>
    )
}

export {Forms}