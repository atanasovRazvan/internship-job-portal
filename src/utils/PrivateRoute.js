import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../landing/LandingPage';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ path, exact, component }) => {
  const { username } = useContext(AuthContext);

  return username ? (<Route path={path} exact={exact} component={component} />)
    : (<Redirect to="/" />);
};

PrivateRoute.defaultProps = {
  component: LandingPage,
  path: '/',
  exact: true,
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default PrivateRoute;
