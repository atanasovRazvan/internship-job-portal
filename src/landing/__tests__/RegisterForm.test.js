import React from 'react';
import {
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterForm from '../RegisterForm';
import '@testing-library/jest-dom/extend-expect';

describe('tests for register form', async () => {
  let usernameInput;
  let passwordInput;
  let firstNameInput;
  let lastNameInput;
  let confirmPasswordInput;

  let registerButton;

  beforeEach(async () => {
    render(<RegisterForm />);
    usernameInput = screen.getByLabelText('Username');
    passwordInput = screen.getByLabelText('Password');
    firstNameInput = screen.getByLabelText('First Name');
    lastNameInput = screen.getByLabelText('Last Name');
    confirmPasswordInput = screen.getByLabelText('Confirm Password');
    registerButton = screen.getByText('Register NOW');
  });

  it('should be displayed as error if the username field is empty', async () => {
    expect(usernameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if the password has less than 6 characters', async () => {
    expect(passwordInput.getAttribute('aria-invalid')).toBe('true');

    userEvent.type(passwordInput, 'pass');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if the First Name field starts with lower case letter', async () => {
    expect(firstNameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if the Last Name field starts with lower case letter', async () => {
    expect(lastNameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if Confirmed Password does not match with the password', async () => {
    userEvent.type(passwordInput, 'password');
    userEvent.type(confirmPasswordInput, 'confirmPassword');

    expect(confirmPasswordInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should the register button be active if the fields are valid', async () => {
    userEvent.type(firstNameInput, 'Razvan');
    userEvent.type(lastNameInput, 'Atanasov');
    userEvent.type(usernameInput, 'razvan');
    userEvent.type(passwordInput, 'parola123');
    userEvent.type(confirmPasswordInput, 'parola123');

    expect(usernameInput.getAttribute('aria-invalid')).toBe('false');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('false');
    expect(firstNameInput.getAttribute('aria-invalid')).toBe('false');
    expect(lastNameInput.getAttribute('aria-invalid')).toBe('false');
    expect(confirmPasswordInput.getAttribute('aria-invalid')).toBe('false');

    expect(registerButton.parentElement.getAttribute('disabled')).toBeNull();
  });
});
