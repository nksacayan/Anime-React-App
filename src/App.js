import "./App.css";
import MyNavbar from "./components/Navbar";
import MainContent from "./components/MainContent";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ApolloQueryHandler from "./components/ApolloQueryHandler";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MyNavbar />
      <MainContent />
      <ApolloQueryHandler />
    </ApolloProvider>
  );
}

export default App;
