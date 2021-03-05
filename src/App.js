import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import MyRouter from './utils/RouterLogic';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <MyRouter />
    </ApolloProvider>
  );
}

export default App;
