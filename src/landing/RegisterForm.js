import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import {
  Button,
  FormControl, FormHelperText, Input, InputLabel,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  isPasswordValid, isUsernameValid, isFirstNameValid, isLastNameValid, isConfirmPasswordValid,
} from './Validations';
import './styles.css';

const RegisterForm = ({ onSubmit, registerStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const isRegisterButtonDisabled = () => {
    if (isUsernameValid(username)
            && isPasswordValid(password)
            && isFirstNameValid(firstName)
            && isLastNameValid(lastName)
            && isConfirmPasswordValid(password, confirmPassword)) {
      return false;
    }
    return true;
  };

  const displayRegisterStatus = () => {
    if (registerStatus === 'error') {
      return <Alert severity="error" variant="filled">Server error</Alert>;
    }

    return <Alert severity="success" variant="filled">Register successful</Alert>;
  };

  return (
    <form>
      {registerStatus ? displayRegisterStatus() : null}
      <FormControl fullWidth>
        <InputLabel htmlFor="firstname-field">First Name</InputLabel>
        <Input
          id="firstname-field"
          error={!isFirstNameValid(firstName)}
          aria-describedby="username-validation-info"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <FormHelperText id="firstname-validation-info">
          *First Name must start with capital
          letter
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="lastname-field">Last Name</InputLabel>
        <Input
          id="lastname-field"
          error={!isLastNameValid(lastName)}
          aria-describedby="username-validation-info"
          onChange={(event) => setLastName(event.target.value)}
        />
        <FormHelperText id="lastname-validation-info">*Last Name must start with capital letter</FormHelperText>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="username-field">Username</InputLabel>
        <Input
          id="username-field"
          error={!isUsernameValid(username)}
          aria-describedby="username-validation-info"
          onChange={(event) => setUsername(event.target.value)}
        />
        <FormHelperText id="username-validation-info">*Username must have at least 3 characters</FormHelperText>
      </FormControl>
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="password-field">Password</InputLabel>
        <Input
          id="password-field"
          error={!isPasswordValid(password)}
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
      <FormControl fullWidth>
        <InputLabel htmlFor="confirm-password-field">Confirm Password</InputLabel>
        <Input
          id="confirm-password-field"
          error={!isConfirmPasswordValid(password, confirmPassword)}
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
          onClick={() => onSubmit(firstName, lastName, username, password, confirmPassword)}
          disabled={isRegisterButtonDisabled()}
        >
          Register NOW
        </Button>
      </FormControl>
    </form>
  );
};

RegisterForm.defaultProps = {
  onSubmit: () => {},
  registerStatus: null,
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  registerStatus: string,
};

export default RegisterForm;
