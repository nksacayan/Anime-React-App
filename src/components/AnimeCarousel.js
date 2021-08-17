import Carousel from "react-bootstrap/Carousel";
import flowers from "../images/flowers.jpg";
import castle from "../images/castle.jpg";
import grass from "../images/grass.jpg";

function AnimeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={flowers} alt="First slide" />
        <Carousel.Caption>
          <h3>Anime name here</h3>
          <p>A little something</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={castle} alt="First slide" />
        <Carousel.Caption>
          <h3>Anime name here</h3>
          <p>A little something</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={grass} alt="First slide" />
        <Carousel.Caption>
          <h3>Anime name here</h3>
          <p>A little something</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AnimeCarousel;
