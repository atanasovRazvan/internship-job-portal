import React from 'react';
import {
  findByLabelText, findByText, screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';
import '@testing-library/jest-dom/extend-expect';

describe('tests for login form', async () => {
  let container;
  let usernameInput;
  let passwordInput;
  let loginButton;

  beforeEach(async () => {
    container = render(<LoginForm />).container;
    usernameInput = await findByLabelText(container, 'Username');
    passwordInput = await findByLabelText(container, 'Password');
    loginButton = await findByText(container, 'Log in');
  });

  it('should be displayed as error if the username field is empty', async () => {
    expect(usernameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if the password has less than 6 characters', async () => {
    expect(passwordInput.getAttribute('aria-invalid')).toBe('true');

    userEvent.type(passwordInput, 'pass');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should the login button be active if the fields are valid', async () => {
    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');

    expect(usernameInput.getAttribute('aria-invalid')).toBe('false');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('false');

    expect(loginButton.parentElement.getAttribute('disabled')).toBeNull();
  });
});
