import { gql, useQuery } from "@apollo/client";

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

function GetApolloQuery(id) {
  const { loading, error, data } = useQuery(ANIME_QUERY, { variables: { id } });

  if (loading) return `loading`;
  if (error) {
    console.error(error);
    return `Error!`;
  }

  return data;
}

export default GetApolloQuery;
