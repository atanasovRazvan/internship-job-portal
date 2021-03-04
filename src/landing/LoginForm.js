import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import {
  Button, InputAdornment,
  FormControl, FormHelperText, Input, InputLabel, IconButton,
} from '@material-ui/core';
import {
  Visibility, VisibilityOff,
} from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import {
  isUsernameValid, isPasswordValid,
} from './Validations';
import './styles.css';

const LoginForm = ({ onSubmit, loginStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordFieldType, setPasswordFieldType] = useState('password');

  const changePasswordFieldType = () => {
    if (passwordFieldType === 'password') {
      setPasswordFieldType('text');
    } else {
      setPasswordFieldType('password');
    }
  };

  const isLoginButtonDisabled = () => !(isUsernameValid(username)
        && isPasswordValid(password));

  const displayLoginStatus = () => {
    if (loginStatus === 'success') {
      return <Alert severity="success" variant="filled">Login successful</Alert>;
    }

    if (loginStatus === 'credentialsError') {
      return <Alert severity="error" variant="filled">Username or password incorrect</Alert>;
    }

    return <Alert severity="error" variant="filled">Server error</Alert>;
  };

  return (
    <form>
      {loginStatus ? displayLoginStatus() : null }
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
          type={passwordFieldType}
          aria-describedby="password-validation-info"
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={changePasswordFieldType}
                edge="end"
              >
                {passwordFieldType === 'text' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
                    )}
        />
        <FormHelperText id="password-validation-info">
          *Password must be at least 6 characters long
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmit(username, password)}
          disabled={isLoginButtonDisabled()}
        >
          Log in
        </Button>
      </FormControl>
    </form>
  );
};

LoginForm.defaultProps = {
  onSubmit: () => {},
  loginStatus: null,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  loginStatus: string,
};

export default LoginForm;
