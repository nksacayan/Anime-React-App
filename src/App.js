import "./App.css";
import MyNavbar from "./components/Navbar";
import MainContent from "./components/MainContent";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MyNavbar />
      <MainContent />
    </ApolloProvider>
  );
}

export default App;
