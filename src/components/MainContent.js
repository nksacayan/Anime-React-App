import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import flowers from "../images/flowers.jpg";

import GetApolloQuery from "../functions/ApolloQueryHandler";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function MainContent() {
  let id = getRndInteger(1, 1000);
  let data = GetApolloQuery(10);
  console.log(data);

  if (data === `loading`) {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img src={flowers} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Title</Card.Title>
            <Card.Text>This is where the anime summary goes.</Card.Text>
            <Card.Text>Genres...</Card.Text>
          </Card.ImgOverlay>
          <Button variant="primary">Randomize. Make this smaller lmao</Button>
        </Card>
      </>
    );
  } else if (typeof data === "string" && data.includes("Error")) {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img src={flowers} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Oops!</Card.Title>
            <Card.Text>
              This anime couldn't be found. Please try again.
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
          <Button variant="primary">Randomize. Make this smaller lmao</Button>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img src={data.Media.coverImage.extraLarge} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{data.Media.title.english}</Card.Title>
            <Card.Text>
              {data.Media.description.replaceAll("<br>", "")}
            </Card.Text>
            <Card.Text>{data.Media.genres.join(", ")}</Card.Text>
          </Card.ImgOverlay>
          <Button variant="primary">Randomize. Make this smaller lmao</Button>
        </Card>
      </>
    );
  }
}
export default MainContent;
