import React, { useState } from 'react';
import {
  Button, InputAdornment,
  FormControl, FormHelperText, Input, InputLabel, IconButton,
} from '@material-ui/core';
import {
  Visibility, VisibilityOff,
} from '@material-ui/icons';
import {
  validateUsername, validatePassword,
} from './Validations';
import './styles.css';

const LoginForm = () => {
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

  const buttonDisabledValue = () => {
    if (!validateUsername(username) || !validatePassword(password)) {
      return true;
    }
    return false;
  };

  const handleLoginButton = () => {
    if (username === 'razvan' && password === 'masini') {
      alert('Login successful. Redirecting to home...');
    } else {
      alert('Username or Password incorrect');
    }
  };

  return (
    <form>
      <FormControl fullWidth>
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
      <FormControl fullWidth>
        <InputLabel htmlFor="password-field">Password</InputLabel>
        <Input
          id="password-field"
          error={!validatePassword(password)}
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
          disabled={buttonDisabledValue()}
          onClick={() => handleLoginButton()}
        >
          Log in
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
