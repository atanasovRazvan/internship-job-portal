import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../landing/LandingPage';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({
  path, exact, component, roleRequired,
}) => {
  const { userRole } = useContext(AuthContext);

  return (
    (userRole === roleRequired)
      ? (<Route path={path} exact={exact} component={component} />)
      : null
  );
};

PrivateRoute.defaultProps = {
  component: LandingPage,
  path: '/',
  exact: true,
  roleRequired: null,
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
  roleRequired: PropTypes.string,
};

export default PrivateRoute;
