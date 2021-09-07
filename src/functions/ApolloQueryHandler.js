import { gql, useQuery } from "@apollo/client";

const ANIME_QUERY = gql`
  query AnimeQuery {
    Media(id: 1, type: ANIME, format: TV) {
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

function GetApolloQuery() {
  const { loading, error, data } = useQuery(ANIME_QUERY);

  if (loading) return `loading`;
  if (error) return `Error! ${error}`;

  return data;
}

export default GetApolloQuery;
