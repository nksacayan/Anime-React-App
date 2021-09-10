import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import AnimeCardError from "./AnimeCardError";
import AnimeCardLoading from "./AnimeCardLoading";
import AnimeDisplay from "./AnimeDisplay";

import Button from "react-bootstrap/Button";

const ANIME_QUERY = gql`
  query AnimeQuery($id: Int) {
    Media(id: $id, type: ANIME, format: TV) {
      title {
        english
      }
      description
      genres
      coverImage {
        extraLarge
      }
    }
  }
`;

const MIN = 1;
const MAX = 1000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function MainContent() {
  const [id, setID] = useState(1);
  const { loading, error, data } = useQuery(ANIME_QUERY, { variables: { id } });

  // Re-randomize ID if anime not found
  useEffect(() => {
    console.log(id);
    if (error) {
      setID(getRandomInt(MIN, MAX));
    }
  }, [id, error]);

  let buttonJSX = (
    <Button
      variant="primary"
      onClick={() => {
        let randomID = getRandomInt(MIN, MAX);
        console.log("Random id = " + randomID);
        setID(randomID);
        console.log("Randomized id to: " + id);
      }}
    >
      Primary
    </Button>
  );

  let animeCard;
  if (loading) {
    return <AnimeCardLoading />;
  } else if (error) {
    animeCard = <AnimeCardError />;
  } else {
    console.log(data);
    animeCard = (
      <AnimeDisplay
        animeImage={data.Media.coverImage.extraLarge}
        animeTitle={data.Media.title.english}
        animeDescription={data.Media.description.replaceAll("<br>", "")}
        animeGenres={data.Media.genres.join(", ")}
        buttonJSX={buttonJSX}
      />
    );
  }

  return <>{animeCard}</>;
}
export default MainContent;
