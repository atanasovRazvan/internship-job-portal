import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import AppRouter from './RouterLogic';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
