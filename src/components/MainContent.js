import AnimeCardError from "./AnimeCardError";
import AnimeCardLoading from "./AnimeCardLoading";
import AnimeCardSuccess from "./AnimeCardSuccess";

import Button from "react-bootstrap/Button";

import GetApolloQuery from "../functions/ApolloQueryHandler";

let id = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomizeID() {
  id = getRandomInt(1, 1000);
  console.log(`Randomized the id to ${id}`);
}

function MainContent() {
  let data = GetApolloQuery(id);
  console.log(data);

  if (data === `loading`) {
    return <AnimeCardLoading />;
  } else if (typeof data === "string" && data.includes("Error")) {
    return (
      <>
        <AnimeCardError />
        <Button variant="primary" onClick={randomizeID}>
          Primary
        </Button>
      </>
    );
  } else {
    return (
      <>
        <AnimeCardSuccess data={data} />
        <Button variant="primary" onClick={randomizeID}>
          Primary
        </Button>
      </>
    );
  }
}
export default MainContent;
