import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../landing/LandingPage';
import { AuthContext } from '../context/AuthProvider';

const AuthenticatedRoute = ({
  path, exact, component,
}) => {
  const { userRole } = useContext(AuthContext);

  return (
    userRole === null
      ? (<Route path={path} exact={exact} component={component} />)
      : (<Redirect to="/home" />)
  );
};

AuthenticatedRoute.defaultProps = {
  component: LandingPage,
  path: '/',
  exact: true,
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default AuthenticatedRoute;
