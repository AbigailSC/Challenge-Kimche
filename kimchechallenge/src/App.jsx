import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './components/Home/Home';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default function App() {
  <ApolloProvider client={client}>
    <Home/>
  </ApolloProvider>;
}
