import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import AppRouter from './utils/RouterLogic';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
