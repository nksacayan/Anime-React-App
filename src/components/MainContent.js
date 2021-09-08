import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import AnimeCardError from "./AnimeCardError";
import AnimeCardLoading from "./AnimeCardLoading";
import AnimeCardSuccess from "./AnimeCardSuccess";

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

  useEffect(() => {
    console.log(id);
  });

  if (loading) {
    return <AnimeCardLoading />;
  } else if (error) {
    return (
      <>
        <AnimeCardError />
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
      </>
    );
  } else {
    return (
      <>
        <AnimeCardSuccess data={data} />
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
      </>
    );
  }
}
export default MainContent;
