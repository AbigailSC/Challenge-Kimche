import React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./components/Home/Home";
import { GlobalStyle } from "./styles/globalStyles";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <Home/>
  </ApolloProvider>
);
export default App;
