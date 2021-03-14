import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const SwitchRoute = () => {
  const { userRole } = useContext(AuthContext);

  if (userRole === 'user') {
    return (<Redirect to="/jobs" />);
  }

  if (userRole === 'sys_admin') {
    return (<Redirect to="/users" />);
  }

  if (userRole === 'company_user') {
    return (<Redirect to="/yourjobs" />);
  }

  return (<Redirect to="/" />);
};

export default SwitchRoute;
