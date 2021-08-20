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

function ApolloQueryHandler({ id }) {
  const { loading, error, data } = useQuery(ANIME_QUERY);

  if (loading) return `loading`;
  if (error) return `Error! ${error}`;

  console.log(data);

  return <p>Here</p>;
}

export default ApolloQueryHandler;
