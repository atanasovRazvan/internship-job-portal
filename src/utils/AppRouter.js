import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import NotFoundPage from '../not-found/NotFound';
import PrivateRoute from './PrivateRoute';
import HomePage from '../home-page/Home';
import LandingPage from '../landing/LandingPage';
import JobDetails from '../job-details/JobDetails';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/notfound" component={NotFoundPage} />
      <PrivateRoute path="/home" component={HomePage} />
      <PrivateRoute path="/job/:id" component={JobDetails} />
      <Redirect to="/notfound" />
    </Switch>
  </Router>
);

export default AppRouter;
