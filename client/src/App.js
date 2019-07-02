import React from 'react';
import './App.css';
import logo from './logo.png';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="Spacex"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
