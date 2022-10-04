import {Carousel} from "react-bootstrap";

import Container from "react-bootstrap/Container";


function Slider({dragon}) {

    return (
        <Container>
            <Carousel>
                {dragon.img.map((img) =>
                    <Carousel.Item key={img} style={{height: '500px'}}>
                        <img
                            style={{
                                "objectFit": 'cover',
                                "width": '100%',
                                "height": '100%'
                            }}
                            className="d-block w-100"
                            src={img}
                            alt="first slide"
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </Container>
    );
}

export default Slider;
