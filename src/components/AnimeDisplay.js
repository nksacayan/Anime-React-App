import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AnimeDisplay({
  animeImage,
  animeTitle,
  animeDescription,
  animeGenres,
  buttonJSX,
}) {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <Image src={animeImage} alt="Anime Cover" width="85%" thumbnail />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{animeTitle}</Card.Title>
                <Card.Text>{animeDescription}</Card.Text>
                <Card.Text>{animeGenres}</Card.Text>
              </Card.Body>
              {buttonJSX}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnimeDisplay;
