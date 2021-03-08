import React, { useCallback, useEffect, useState } from 'react';

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pendingAuthentication, setPendingAuthentication] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(loginCallback, [username, password]);
  const logout = useCallback(logoutCallBack, []);
  useEffect(authEffect, [pendingAuthentication]);

  const value = {
    username, setUsername,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

  function loginCallback(username, password) {
    if (username !== '' && password != '') {
      setPendingAuthentication(true);
      setUsername(username);
      setPassword(password);
    }
  }
};

export default AuthProvider;
