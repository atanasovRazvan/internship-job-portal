import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../home-page/NavBar';

const NavbarLayout = ({ children }) => (
  <>
    <NavBar />
    <div style={{ marginTop: '5rem' }}>
      {children}
    </div>
  </>
);

NavbarLayout.defaultProps = {
  children: null,
};

NavbarLayout.propTypes = {
  children: PropTypes.node,
};

export default NavbarLayout;
