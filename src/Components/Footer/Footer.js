import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css"

const Footer = () => {

    return (
        <Container className="footer-container"  fluid>
            <Container className="footer">
                <p>SpaceX Dragon</p>
                <p>Copyright</p>
            </Container>
        </Container>
    )
}

export default Footer;