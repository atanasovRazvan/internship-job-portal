import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Paper, Tab, Tabs,
} from '@material-ui/core';
import LoginForm from './LoginForm';
import './styles.css';
import RegisterForm from './RegisterForm';
import { CREATE_USER, GET_USERS } from '../sources';

const LandingPage = () => {
  const [form, setForm] = useState('Login');
  const [usernameState, setUsernameState] = useState(null);
  const [passwordState, setPasswordState] = useState(null);

  const [getUsers, {
    data: queryData, error: queryError, loading: queryLoading,
  }] = useLazyQuery(GET_USERS);

  useEffect((() => {
    if (queryData && usernameState && passwordState) {
      console.log(queryData);
      if (queryData.users.find((user) => user.username === usernameState
          && user.password === passwordState)) {
        alert(`Login successful for ${usernameState}`);
      } else {
        alert('Username or password incorrect');
      }
    }

    if (queryLoading) {
      console.log('Loading');
      return;
    }

    if (queryError) {
      console.log(queryError);
      alert('Something went wrong (error)');
    }
  }), [queryData, usernameState, passwordState]);

  const submitLogin = (username, password) => {
    setUsernameState(username);
    setPasswordState(password);
    getUsers();

    // Followed by useEffect's body
  };

  const [createUser, {
    error: mutationError,
  }] = useMutation(CREATE_USER, {
    onError(err) {
      alert(`Calling error: ${err}`);
    },
  });

  const submitRegister = (firstName, lastName, username, password) => {
    createUser({
      variables: {
        username, firstName, lastName, password,
      },
    });

    if (mutationError) {
      alert('Something went wrong...');
      console.log(mutationError);
    } else {
      alert('Register successful! Redirecting to login...');
    }
  };

  return (
    <div className="landing-page">
      <h1 className="landing-page-content"> Lets find you a job, are you in? </h1>
      <div className="login-register-forms">

        <Paper elevation={3} className="login-register-tabs">
          <Tabs
            value={form}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => setForm(newValue)}
            aria-label="login-register-navigation"
            variant="fullWidth"
          >
            <Tab label="Login" value="Login" />
            <Tab label="Register" value="Register" />
          </Tabs>
        </Paper>

        {form === 'Login' ? <LoginForm onSubmit={submitLogin} /> : <RegisterForm onSubmit={submitRegister} />}

      </div>
    </div>
  );
};

export default LandingPage;
