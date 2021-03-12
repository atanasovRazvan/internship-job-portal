import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../home-page/NavBar';

const NavbarLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

NavbarLayout.defaultProps = {
  children: null,
};

NavbarLayout.propTypes = {
  children: PropTypes.node,
};

export default NavbarLayout;
