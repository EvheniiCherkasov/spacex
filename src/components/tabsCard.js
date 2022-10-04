import {Col, Row, Nav, Container, Tab} from 'react-bootstrap';
import CardShuttle from "./cardShuttle";


const TabsCard = ({dragons}) => {


    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Dragon 1">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            {dragons.map((dragon) =>
                                <Nav.Item>
                                    <Nav.Link key={dragon.id} eventKey={dragon.name}>{dragon.name}</Nav.Link>
                                </Nav.Item>)}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {dragons.map((dragon) =>
                                <Tab.Pane key={dragon.id} eventKey={dragon.name}>
                                    <CardShuttle dragon={dragon}/>
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default TabsCard;