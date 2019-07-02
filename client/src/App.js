import React from 'react';
import './App.css';
import logo from './logo.png';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="Spacex"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
