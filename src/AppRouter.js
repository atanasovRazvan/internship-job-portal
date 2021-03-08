import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import LandingPage from './landing/LandingPage';
import NotFoundPage from './NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/notfound" component={NotFoundPage} />
      <Redirect to="/notfound" />
    </Switch>
  </Router>
);

export default AppRouter;
