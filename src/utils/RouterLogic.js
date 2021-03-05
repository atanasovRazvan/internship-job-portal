import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import LandingPage from '../landing/LandingPage';
import NotFoundPage from './NotFound';
import PrivateRoute from './PrivateRoute';
import HomePage from '../home-page/Home';

const MyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/notfound" component={NotFoundPage} />
      <PrivateRoute path="/home" component={HomePage} />
      <Redirect to="/notfound" />
    </Switch>
  </Router>
);

export default MyRouter;
