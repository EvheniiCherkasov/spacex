import {Carousel} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Slider.css"

function Slider({dragon}) {

    return (
        <Container>
            <Carousel>
                {dragon.img.map((img) =>
                    <Carousel.Item key={img} className="carousel-item">
                        <img className="carousel-img d-block w-100"
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
