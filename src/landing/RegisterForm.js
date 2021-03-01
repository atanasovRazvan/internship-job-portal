import React, { useState } from 'react';
import {
  Button,
  FormControl, FormHelperText, Input, InputLabel,
} from '@material-ui/core';
import {
  validatePassword, validateUsername, validateFirstName, validateLastName, checkPasswordMatching,
} from './Validations';
import './styles.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const buttonDisabledValue = () => {
    if (validateUsername(username)
            && validatePassword(password)
            && validateFirstName(firstName)
            && validateLastName(lastName)
            && checkPasswordMatching(password, confirmPassword)) {
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
        <Input
          id="firstname-field"
          error={!validateFirstName(firstName)}
          aria-describedby="username-validation-info"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <FormHelperText id="firstname-validation-info">
          *First Name must start with capital
          letter
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth="true">
        <InputLabel htmlFor="lastname-field">Last Name</InputLabel>
        <Input
          id="lastname-field"
          error={!validateLastName(lastName)}
          aria-describedby="username-validation-info"
          onChange={(event) => setLastName(event.target.value)}
        />
        <FormHelperText id="lastname-validation-info">*Last Name must start with capital letter</FormHelperText>
      </FormControl>

      <FormControl fullWidth="true">
        <InputLabel htmlFor="username-field">Username</InputLabel>
        <Input
          id="username-field"
          error={!validateUsername(username)}
          aria-describedby="username-validation-info"
          onChange={(event) => setUsername(event.target.value)}
        />
        <FormHelperText id="username-validation-info">*Username must have at least 3 characters</FormHelperText>
      </FormControl>
      <br />
      <FormControl fullWidth="true">
        <InputLabel htmlFor="password-field">Password</InputLabel>
        <Input
          id="password-field"
          error={!validatePassword(password)}
          type="password"
          aria-describedby="password-validation-info"
          onChange={(event) => setPassword(event.target.value)}
        />
        <FormHelperText id="password-validation-info">
          *Password must be at least 6 characters
          long
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl fullWidth="true">
        <InputLabel htmlFor="confirm-password-field">Confirm Password</InputLabel>
        <Input
          id="confirm-password-field"
          error={!checkPasswordMatching(password, confirmPassword) || !validatePassword(password)}
          type="password"
          aria-describedby="password-validation-info"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <FormHelperText id="confirm-password-validation-info">*Passwords must match</FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          disabled={buttonDisabledValue()}
          onClick={() => handleRegisterButton()}
        >
          Register NOW
        </Button>
      </FormControl>
    </form>
  );
};

export default RegisterForm;
