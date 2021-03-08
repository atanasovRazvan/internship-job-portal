import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';
import HomePage from '../Home';
import { AuthContext } from '../../context/AuthProvider';

describe('tests for home', async () => {
  const value = {
    username: 'razvan',
    userRole: 3,
    setUsername: jest.fn(),
    setUserRole: jest.fn(),
  };

  beforeEach(async () => {
    render(
      <AuthContext.Provider value={value}>
        <HomePage />
      </AuthContext.Provider>,
    );
  });

  it('should display the user name', async () => {
    expect(screen.getByText('Nice Home Page, Very Nice')).toBeInTheDocument();
  });
});
