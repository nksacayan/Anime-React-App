import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import AnimeDisplay from "./AnimeDisplay";

import Button from "react-bootstrap/Button";

const RANDOM_ANIME_QUERY = gql`
  query RandomAnimeQuery($random: Int) {
    Page(page: $random, perPage: 1) {
      pageInfo {
        total
      }
      media(
        type: ANIME
        isAdult: false
        status_not: NOT_YET_RELEASED
        format: TV
      ) {
        id
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
  }
`;
// Link to discord convo
// https://discord.com/channels/210521487378087947/281216402684116993/807678363250589759
// you run this once without passing a random variable. You take the value of pageInfo.total,
// generate a random number with that as the upper bound, you run the same query again,
// but pass your random number as the random variable, you take the Page.media[0] value as your random anime.

const MIN = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function MainContent() {
  const [id, setID] = useState(1);
  const [idMax, setIDMax] = useState(3);
  const { loading, error, data } = useQuery(RANDOM_ANIME_QUERY, {
    variables: { random: id },
  });

  let buttonJSX = (
    <Button
      variant="primary"
      onClick={() => {
        setIDMax(data.Page.pageInfo.total);
        let randomID = getRandomInt(MIN, idMax);
        setID(randomID);
      }}
    >
      Find Another Anime
    </Button>
  );

  let animeCard;
  if (loading) {
    animeCard = (
      <AnimeDisplay
        animeTitle={"Loading"}
        animeDescription={
          "If this takes too long try refreshing, my random search isn't great"
        }
      />
    );
  } else if (error) {
    animeCard = <AnimeDisplay buttonJSX={buttonJSX} />;
  } else {
    console.log(data);
    animeCard = (
      <AnimeDisplay
        animeImage={data.Page.media[0].coverImage.extraLarge}
        animeTitle={
          data.Page.media[0].title.english
            ? data.Page.media[0].title.english
            : "No title found"
        }
        animeDescription={
          data.Page.media[0].description
            ? data.Page.media[0].description.replaceAll("<br>", "")
            : "No description found"
        }
        animeGenres={
          data.Page.media[0].genres
            ? data.Page.media[0].genres.join(", ")
            : "No genres found"
        }
        buttonJSX={buttonJSX}
      />
    );
  }

  return <>{animeCard}</>;
}
export default MainContent;
