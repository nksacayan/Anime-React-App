import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AnimeCardSuccess({ data }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={data.Media.coverImage.extraLarge} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{data.Media.title.english}</Card.Title>
        <Card.Text>{data.Media.description.replaceAll("<br>", "")}</Card.Text>
        <Card.Text>{data.Media.genres.join(", ")}</Card.Text>
      </Card.ImgOverlay>
      <Button variant="primary">Randomize. Make this smaller lmao</Button>
    </Card>
  );
}

export default AnimeCardSuccess;
