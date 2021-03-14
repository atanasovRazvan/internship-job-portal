import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import useLocalStorage from '../utils/CustomHooks';
import { GET_USER } from '../sources';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useLocalStorage('userId', null);
  const [username, setUsername] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const { data, error } = useQuery(GET_USER, { variables: { id: userId } });

  useEffect(() => {
    if (!error && data) {
      setUsername(data.user?.username);
      setUserRole(data.user?.userRole.name);
    }
  }, [data]);

  const value = {
    userId,
    username,
    userRole,
    setUsername,
    setUserId,
    setUserRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {
  children: null,
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
