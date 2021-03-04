import React from 'react';
import {
  findByLabelText, findByText,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';
import '@testing-library/jest-dom/extend-expect';

describe('tests for login form', async () => {
  let container;
  beforeEach(() => {
    container = render(<LoginForm />).container;
  });

  it('should be displayed as error if the username field is empty', async () => {
    const usernameInput = await findByLabelText(container, 'Username');
    expect(usernameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if the password has less than 6 characters', async () => {
    const passwordInput = await findByLabelText(container, 'Password');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('true');

    userEvent.type(passwordInput, 'pass');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should the login button be active if the fields are valid', async () => {
    const usernameInput = await findByLabelText(container, 'Username');
    const passwordInput = await findByLabelText(container, 'Password');
    const loginButton = await findByText(container, 'Log in');

    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');

    expect(usernameInput.getAttribute('aria-invalid')).toBe('false');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('false');

    expect(loginButton.parentElement.getAttribute('disabled')).toBeNull();
  });
});
