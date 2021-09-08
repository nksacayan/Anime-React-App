import AnimeCardError from "./AnimeCardError";
import AnimeCardLoading from "./AnimeCardLoading";
import AnimeCardSuccess from "./AnimeCardSuccess";

import GetApolloQuery from "../functions/ApolloQueryHandler";

let id = 1;

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function randomizeID() {
//   id = getRandomArbitrary(1, 1000);
//   console.log(`Randomized the id to ${id}`);
// }

function MainContent() {
  let data = GetApolloQuery(id);
  console.log(data);

  if (data === `loading`) {
    return <AnimeCardLoading />;
  } else if (typeof data === "string" && data.includes("Error")) {
    return <AnimeCardError />;
  } else {
    return <AnimeCardSuccess data={data} />;
  }
}
export default MainContent;
