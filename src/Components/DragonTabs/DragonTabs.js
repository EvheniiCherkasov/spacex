import {Col, Row, Nav, Container, Tab} from 'react-bootstrap';
import DragonCard from "../DragonCard/DragonCard";

const DragonTabs = ({dragons}) => {

    return (
        <Container fluid="lg">
            <Tab.Container className="p-0" id="left-tabs-example" defaultActiveKey="Dragon 1">
                <Row>
                    <Col className="p-md-1" sm={2}>
                        <Nav variant="pills" className="flex-column">
                            {dragons.map((dragon) =>
                                <Nav.Item key={dragon.id}>
                                    <Nav.Link eventKey={dragon.name}>{dragon.name}</Nav.Link>
                                </Nav.Item>)}
                        </Nav>
                    </Col>
                    <Col className="p-0" sm={10}>
                        <Tab.Content>
                            {dragons.map((dragon) =>
                                <Tab.Pane key={dragon.id} eventKey={dragon.name}>
                                    <DragonCard dragon={dragon}/>
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default DragonTabs;