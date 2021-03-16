import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import NotFoundPage from '../not-found/NotFound';
import LandingPage from '../landing/LandingPage';
import AuthenticatedRoute from './AuthenticatedRoute';
import JobListPage from '../job-feed/JobListPage';
import SwitchRoute from './SwitchRoute';
import NavbarLayout from './NavbarLayout';
import isRouteAvailable from './RouteAvailabilityHelper';
import JobDetails from '../job-details/JobDetails';
import UsersTable from '../admin-page/UsersTable';

const routes = [
  { path: '/jobs', component: JobListPage, isAvailable: () => isRouteAvailable('/jobs') },
  { path: '/job/:id', component: JobDetails, isAvailable: () => isRouteAvailable('/job/:id') },
  { path: '/users', component: UsersTable, isAvailable: () => isRouteAvailable('/users') },
  { path: '/yourjobs', component: JobListPage, isAvailable: () => isRouteAvailable('/yourjobs') },
];

const AppRouter = () => (
  <Router>
    <NavbarLayout />
    <Switch>
      <AuthenticatedRoute exact path="/" component={LandingPage} />
      <Route path="/home" component={SwitchRoute} />
      {routes.map((route) => (route.isAvailable()
        ? (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        )
        : null))}
      <Route path="/notfound" component={NotFoundPage} />
      <Redirect from="*" to="/notfound" />
    </Switch>
  </Router>
);

export default AppRouter;
