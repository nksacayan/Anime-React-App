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

function MainContent() {
  const [id, setID] = useState(1);
  const { loading, error, data } = useQuery(ANIME_QUERY, { variables: { id } });

  if (loading) {
    return <AnimeCardLoading />;
  } else if (error) {
    return (
      <>
        <AnimeCardError />
        <Button variant="primary">Primary</Button>
      </>
    );
  } else {
    return (
      <>
        <AnimeCardSuccess data={data} />
        <Button variant="primary">Primary</Button>
      </>
    );
  }
}
export default MainContent;
