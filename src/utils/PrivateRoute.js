import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import LandingPage from '../landing/LandingPage';

const PrivateRoute = ({ path, exact, component }) => {
  const condition = true;

  return condition ? (<Route path={path} exact={exact} component={component} />)
    : (<Redirect to="/" />);
};

PrivateRoute.defaultProps = {
  component: PropTypes.func,
  path: string,
  exact: string,
};

PrivateRoute.propTypes = {
  component: LandingPage,
  path: '/',
  exact: 'true',
};

export default PrivateRoute;
