import Card from "react-bootstrap/Card";

import flowers from "../images/flowers.jpg";

function AnimeCardError() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={flowers} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Oops!</Card.Title>
        <Card.Text>This anime couldn't be found. Please try again.</Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default AnimeCardError;
