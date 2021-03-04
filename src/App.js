import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import LandingPage from './landing/LandingPage';
import NotFoundPage from './NotFound';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/notfound" component={NotFoundPage} />
          <Redirect to="/notfound" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
