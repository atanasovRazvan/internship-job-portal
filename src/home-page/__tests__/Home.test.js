import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
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
      <MockedProvider>
        <AuthContext.Provider value={value}>
          <HomePage />
        </AuthContext.Provider>
      </MockedProvider>,
    );
  });

  it('should display the home page containing its title', async () => {
    expect(screen.getByText('We gathered some jobs for you, here they are!')).toBeInTheDocument();
  });
});
