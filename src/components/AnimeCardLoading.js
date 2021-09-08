import Card from "react-bootstrap/Card";

import flowers from "../images/flowers.jpg";

function AnimeCardLoading() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={flowers} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Loading</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default AnimeCardLoading;
