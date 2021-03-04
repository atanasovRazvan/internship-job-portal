import React from 'react';
import {
  findByLabelText,
  findByText, fireEvent,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import LandingPage from '../LandingPage';
import '@testing-library/jest-dom/extend-expect';
import { CREATE_USER, GET_USERS } from '../../sources';

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

describe('tests for login form', async () => {
  let container;

  beforeEach(() => {
    container = render(
      <MockedProvider mocks={mocks}>
        <LandingPage />
      </MockedProvider>,
    ).container;
  });

  it('should display the title', async () => {
    const title = await findByText(container, 'Lets find you a job, are you in?');
    expect(title).toBeInTheDocument();
  });

  it('should display LoginForm if LOG IN tab is selected', async () => {
    const tab = await findByText(container, 'Login');
    expect(tab.parentElement.getAttribute('aria-selected')).toBe('true');
    expect(await findByText(container, 'Log in', { selector: 'span' })).toBeInTheDocument();
  });

  it('should display RegisterForm if REGISTER tab is selected', async () => {
    const tab = await findByText(container, 'Register');
    fireEvent.click(tab);
    expect(tab.parentElement.getAttribute('aria-selected')).toBe('true');
    expect(await findByText(container, 'Register NOW', { selector: 'span' })).toBeInTheDocument();
  });

  it('should display success message for login if the user exists', async () => {
    const usernameInput = await findByLabelText(container, 'Username');
    const passwordInput = await findByLabelText(container, 'Password');
    const loginButton = await findByText(container, 'Log in');

    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');
    fireEvent.click(loginButton);

    expect(await findByText(container, 'Login successful')).toBeInTheDocument();
  });

  it('should display error message for login if the user does not exist', async () => {
    const usernameInput = await findByLabelText(container, 'Username');
    const passwordInput = await findByLabelText(container, 'Password');
    const loginButton = await findByText(container, 'Log in');

    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola112');
    fireEvent.click(loginButton);

    expect(await findByText(container, 'Username or password incorrect')).toBeInTheDocument();
  });

  it('should display success message if the register finished successfully', async () => {
    const tab = await findByText(container, 'Register');
    fireEvent.click(tab);

    const usernameInput = await findByLabelText(container, 'Username');
    const passwordInput = await findByLabelText(container, 'Password');
    const firstNameInput = await findByLabelText(container, 'First Name');
    const lastNameInput = await findByLabelText(container, 'Last Name');
    const confirmPasswordInput = await findByLabelText(container, 'Confirm Password');

    const registerButton = await findByText(container, 'Register NOW');

    userEvent.type(firstNameInput, 'Razvan');
    userEvent.type(lastNameInput, 'Atanasov');
    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');
    userEvent.type(confirmPasswordInput, 'parola123');
    fireEvent.click(registerButton);

    expect(await findByText(container, 'Register successful')).toBeInTheDocument();
  });
});
