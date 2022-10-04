import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <Container fluid style={{backgroundColor: 'gray', color: '#fff', minHeight: '100%'}}>
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '10px',
                margin: '0 auto',
                alignItems: 'center',
                flexDirection: "column"
            }}>
                <p>SpaceX Dragon</p>
                <p>Copyright</p>
            </Container>
        </Container>
    )
}

export default Footer;