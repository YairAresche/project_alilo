import './Carousel.css'

import Carousel from 'react-bootstrap/Carousel';
import imgCarousel from '../../assets/carousel4.jpg'
import imgCarousel2 from '../../assets/carousel2.jpg'
import imgCarousel3 from '../../assets/carousel3.jpg'

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="imgCarousel d-block w-100"
                    src={imgCarousel}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgCarousel2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgCarousel3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;