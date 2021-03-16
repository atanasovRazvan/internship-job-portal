import React, { useContext } from 'react';
import NavBar from '../home-page/NavBar';
import { AuthContext } from '../context/AuthProvider';

const NavbarLayout = () => {
  const { userRole } = useContext(AuthContext);

  if (userRole === null) return null;

  return (
    <>
      <NavBar />
      <div style={{ marginTop: '5rem' }} />
    </>
  );
};

export default NavbarLayout;
