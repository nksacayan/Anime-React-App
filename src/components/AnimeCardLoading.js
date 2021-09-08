import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import flowers from "../images/flowers.jpg";

function AnimeCardLoading() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={flowers} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Title</Card.Title>
        <Card.Text>This is where the anime summary goes.</Card.Text>
        <Card.Text>Genres...</Card.Text>
      </Card.ImgOverlay>
      <Button variant="primary">Randomize. Make this smaller lmao</Button>
    </Card>
  );
}

export default AnimeCardLoading;
