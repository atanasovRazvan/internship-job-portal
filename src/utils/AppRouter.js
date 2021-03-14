import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import NotFoundPage from '../not-found/NotFound';
import PrivateRoute from './PrivateRoute';
import LandingPage from '../landing/LandingPage';
import JobDetails from '../job-details/JobDetails';
import NavbarLayout from './NavbarLayout';
import AuthenticatedRoute from './AuthenticatedRoute';
import SwitchRoute from './SwitchRoute';
import JobListPage from '../job-feed/JobListPage';
import UsersTable from '../admin-page/UsersTable';

const AppRouter = () => (
  <Router>
    <Switch>
      <AuthenticatedRoute exact path="/" component={LandingPage} />
      <Route path="/home" component={SwitchRoute} />
      <NavbarLayout>
        <PrivateRoute exact path="/jobs" component={JobListPage} roleRequired="user" />
        <PrivateRoute exact path="/job/:id" component={JobDetails} roleRequired="user" />
        <PrivateRoute exact path="/users" component={UsersTable} roleRequired="sys_admin" />
      </NavbarLayout>
      <Route path="/notfound" component={NotFoundPage} />
      <Redirect to="/notfound" />
    </Switch>
  </Router>
);

export default AppRouter;
