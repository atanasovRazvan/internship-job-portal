import React, { useState } from 'react';
import {
  Button,
  FormControl, FormHelperText, Input, InputLabel,
} from '@material-ui/core';
import './styles.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const validUsername = () => {
    if (username.length === 0) {
      return false;
    }
    return true;
  };

  const validPassword = () => {
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  const validFirstName = () => {
    // eslint-disable-next-line max-len
    if (firstName.length === 0 || firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
      return false;
    }
    return true;
  };

  const validLastName = () => {
    // eslint-disable-next-line max-len
    if (lastName.length === 0 || lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
      return false;
    }
    return true;
  };

  const checkPasswordMatching = () => {
    if (password !== confirmPassword) {
      return false;
    }
    return true;
  };

  const buttonDisabledValue = () => {
    // eslint-disable-next-line max-len
    if (!validUsername() || !validPassword() || !validFirstName() || !validLastName() || !checkPasswordMatching()) {
      return true;
    }
    return false;
  };

  const handleRegisterButton = () => {
    if (username === 'razvan') {
      alert('This username already exists!');
    } else {
      alert('Register successful! Redirecting to login...');
    }
  };

  return (
    <form>

      <FormControl fullWidth="true">
        <InputLabel htmlFor="firstname-field">First Name</InputLabel>
        <Input id="firstname-field" error={!validFirstName()} aria-describedby="username-validation-info" onChange={(event) => setFirstName(event.target.value)} />
        <FormHelperText id="firstname-validation-info">*First Name must start with capital letter</FormHelperText>
      </FormControl>

      <FormControl fullWidth="true">
        <InputLabel htmlFor="lastname-field">Last Name</InputLabel>
        <Input id="lastname-field" error={!validLastName()} aria-describedby="username-validation-info" onChange={(event) => setLastName(event.target.value)} />
        <FormHelperText id="lastname-validation-info">*Last Name must start with capital letter</FormHelperText>
      </FormControl>

      <FormControl fullWidth="true">
        <InputLabel htmlFor="username-field">Username</InputLabel>
        <Input id="username-field" error={!validUsername()} aria-describedby="username-validation-info" onChange={(event) => setUsername(event.target.value)} />
        <FormHelperText id="username-validation-info">*Username must have at least 3 characters</FormHelperText>
      </FormControl>
      <br />
      <FormControl fullWidth="true">
        <InputLabel htmlFor="password-field">Password</InputLabel>
        <Input id="password-field" error={!validPassword()} type="password" aria-describedby="password-validation-info" onChange={(event) => setPassword(event.target.value)} />
        <FormHelperText id="password-validation-info">*Password must be at least 6 characters long</FormHelperText>
      </FormControl>
      <br />
      <FormControl fullWidth="true">
        <InputLabel htmlFor="confirm-password-field">Confirm Password</InputLabel>
        <Input id="confirm-password-field" error={!checkPasswordMatching() || !validPassword()} type="password" aria-describedby="password-validation-info" onChange={(event) => setConfirmPassword(event.target.value)} />
        <FormHelperText id="confirm-password-validation-info">*Passwords must match</FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <Button variant="contained" color="primary" disabled={buttonDisabledValue()} onClick={() => handleRegisterButton()}>Register NOW</Button>
      </FormControl>
    </form>
  );
};

export default RegisterForm;
