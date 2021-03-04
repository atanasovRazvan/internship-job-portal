import React from 'react';
import {
  findByLabelText, findByText,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterForm from '../RegisterForm';
import '@testing-library/jest-dom/extend-expect';

describe('tests for register form', async () => {
  let container;
  beforeEach(() => {
    container = render(<RegisterForm />).container;
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

  it('should be displayed as error if the First Name field starts with lower case letter', async () => {
    const firstNameInput = await findByLabelText(container, 'First Name');
    expect(firstNameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if the Last Name field starts with lower case letter', async () => {
    const lastNameInput = await findByLabelText(container, 'Last Name');
    expect(lastNameInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should be displayed as error if Confirmed Password does not match with the password', async () => {
    const passwordInput = await findByLabelText(container, 'Password');
    const confirmPasswordInput = await findByLabelText(container, 'Confirm Password');

    userEvent.type(passwordInput, 'password');
    userEvent.type(confirmPasswordInput, 'confirmPassword');

    expect(confirmPasswordInput.getAttribute('aria-invalid')).toBe('true');
  });

  it('should the register button be active if the fields are valid', async () => {
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

    expect(usernameInput.getAttribute('aria-invalid')).toBe('false');
    expect(passwordInput.getAttribute('aria-invalid')).toBe('false');
    expect(firstNameInput.getAttribute('aria-invalid')).toBe('false');
    expect(lastNameInput.getAttribute('aria-invalid')).toBe('false');
    expect(confirmPasswordInput.getAttribute('aria-invalid')).toBe('false');

    expect(registerButton.parentElement.getAttribute('disabled')).toBeNull();
  });
});
