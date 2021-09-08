import Card from "react-bootstrap/Card";

function AnimeCardSuccess({ data }) {
  return (
    <Card>
      <Card.Img src={data.Media.coverImage.extraLarge} alt="Card image" />
      <Card.Body>
        <Card.Title>{data.Media.title.english}</Card.Title>
        <Card.Text>{data.Media.description.replaceAll("<br>", "")}</Card.Text>
        <Card.Text>{data.Media.genres.join(", ")}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AnimeCardSuccess;
