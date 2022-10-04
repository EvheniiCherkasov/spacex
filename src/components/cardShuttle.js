import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Slider from "./slider";

function CardShuttle({dragon}) {
    return (
        <Container className="mt-4 mb-4">
            <Row>
                <Col md={7}>
                    <Slider dragon={dragon}/>
                </Col>
                <Col md={5}>
                    <h2 className="mt-2">{dragon.name}</h2>
                    <p>{dragon.description}</p>
                    <ul className="me-0" style={{paddingInlineStart: '3.5%', 'direction': 'ltr'}}>
                        <li>Height w trunk | metres : {dragon.height}</li>
                        <li>Dry mass | kg: {dragon.mass}</li>
                        <li>First flight : {dragon.years}</li>
                    </ul>
                    <Button href={dragon.wiki} variant="warning">Wikipedia</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CardShuttle;
