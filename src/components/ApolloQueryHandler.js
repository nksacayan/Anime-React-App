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

  // return <p>{JSON.stringify(data)}</p>;
  return (
    <>
      <h3>Title: {data.title}</h3>
      <p>Description : {data.description}</p>
      <img alt="Anime" src={data.coverImage} />
      <p>
        JSON:
        <br />
        {JSON.stringify(data)}
      </p>
    </>
  );
}

export default ApolloQueryHandler;
