import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import NavBar from '../NavBar';
import { AuthContext } from '../../context/AuthProvider';

describe('tests for navbar', async () => {
  const value = {
    username: 'razvan',
    userRole: 3,
    setUsername: jest.fn(),
    setUserRole: jest.fn(),
  };

  beforeEach(async () => {
    render(
      <AuthContext.Provider value={value}>
        <NavBar />
      </AuthContext.Provider>,
    );
  });

  it('should display the user name', async () => {
    expect(screen.getByText('Hello, razvan!')).toBeInTheDocument();
  });

  it('should setUsername to null if Logout button is pressed', async () => {
    const logoutBtn = screen.getByText('Logout');
    fireEvent.click(logoutBtn);
    expect(value.setUsername).toHaveBeenCalledTimes(1);
  });
});
