import React from 'react';
import {
  fireEvent,
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { CREATE_USER, GET_USERS } from '../../sources';
import AuthProvider from '../../context/AuthProvider';
import LandingPage from '../LandingPage';
import PrivateRoute from '../../utils/PrivateRoute';
import HomePage from '../../home-page/Home';

const mocks = [
  {
    request: {
      query: GET_USERS,
    },
    result: {
      data: {
        users: [{ username: 'razvan', password: 'parola123' }],
      },
    },
  },
  {
    request: {
      query: CREATE_USER,
      variables: {
        username: 'razvan',
        password: 'parola123',
        firstName: 'Razvan',
        lastName: 'Atanasov',
      },
    },
    result: {
      data: {
        users: [{ username: 'razvan' }],
      },
    },
  },
];

describe('tests for landing page', async () => {
  let loginTab;
  let registerTab;

  beforeEach(async () => {
    render(
      <MockedProvider mocks={mocks}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route path="/" component={LandingPage} />
            </Switch>
          </Router>
        </AuthProvider>
      </MockedProvider>,
    );

    loginTab = screen.getByText('Login');
    registerTab = screen.getByText('Register');
  });

  it('should display the title', async () => {
    const title = screen.getByText('Lets find you a job, are you in?');
    expect(title).toBeInTheDocument();
  });

  it('should display LoginForm if LOG IN tab is selected', async () => {
    expect(loginTab.parentElement.getAttribute('aria-selected')).toBe('true');
    expect(screen.getByText('Log in', { selector: 'span' })).toBeInTheDocument();
  });

  it('should display RegisterForm if REGISTER tab is selected', async () => {
    fireEvent.click(registerTab);
    expect(registerTab.parentElement.getAttribute('aria-selected')).toBe('true');
    expect(screen.getByText('Register NOW', { selector: 'span' })).toBeInTheDocument();
  });

  it('should display success message on login', async () => {
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');
    const loginButton = screen.getByText('Log in');
    fireEvent.click(loginButton);
    expect(await screen.findByText('Login successful')).toBeInTheDocument();
  });

  it('should display error message for login if the user does not exist', async () => {
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola112');
    const loginButton = screen.getByText('Log in');
    await fireEvent.click(loginButton);

    expect(await screen.findByText('Username or password incorrect')).toBeInTheDocument();
  });

  it('should display success message if the register finished successfully', async () => {
    fireEvent.click(registerTab);

    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const registerButton = screen.getByText('Register NOW');

    userEvent.type(firstNameInput, 'Razvan');
    userEvent.type(lastNameInput, 'Atanasov');
    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');
    userEvent.type(confirmPasswordInput, 'parola123');
    await fireEvent.click(registerButton);

    expect(screen.getByText('Register successful')).toBeInTheDocument();
  });
});
