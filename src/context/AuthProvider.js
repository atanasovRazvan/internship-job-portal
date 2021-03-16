import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../utils/CustomHooks';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useLocalStorage('userId', null);
  const [username, setUsername] = useLocalStorage('username', null);
  const [userRole, setUserRole] = useLocalStorage('userRole', null);

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
