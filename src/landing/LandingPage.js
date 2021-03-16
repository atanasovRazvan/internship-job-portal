import React, { useContext, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Paper, Tab, Tabs,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import './styles.css';
import RegisterForm from './RegisterForm';
import { CREATE_USER, GET_USERS } from '../sources';
import { AuthContext } from '../context/AuthProvider';
import loginStates from './constants';

const LandingPage = () => {
  const [form, setForm] = useState('Login');
  const [usernameState, setUsernameState] = useState(null);
  const [passwordState, setPasswordState] = useState(null);
  const [loginResult, setLoginResult] = useState(null);
  const [registerResult, setRegisterResult] = useState(null);
  const {
    setUserId, setUsername, setUserRole,
  } = useContext(AuthContext);

  const [getUsers, {
    data: queryData, error: queryError,
  }] = useLazyQuery(GET_USERS);

  useEffect((() => {
    if (queryData && usernameState && passwordState) {
      const foundUser = queryData.users.find((user) => user.username === usernameState
                                                        && user.password === passwordState);

      if (foundUser) {
        setUserId(foundUser.id);
        setUsername(foundUser.username);
        setUserRole(foundUser.userRole.name);
        setLoginResult(loginStates.success);
      } else {
        setLoginResult(loginStates.credentialsError);
      }
    }

    if (queryError) {
      setLoginResult(loginStates.serverError);
    }
  }), [queryData, usernameState, passwordState]);

  const [createUser, {
    error: mutationError,
  }] = useMutation(CREATE_USER, {
    onError() {
      setRegisterResult('error');
    },
  });

  const submitLogin = (username, password) => {
    setUsernameState(username);
    setPasswordState(password);
    getUsers();
  };

  const submitRegister = (firstName, lastName, username, password) => {
    createUser({
      variables: {
        username, firstName, lastName, password,
      },
    });

    if (mutationError) {
      setRegisterResult('error');
    } else {
      setRegisterResult('success');
    }
  };

  return (
    <div className="landing-page">
      {loginResult === loginStates.success ? <Redirect to="/home" /> : null}
      <h1 className="landing-page-content">Lets find you a job, are you in?</h1>
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

        {form === 'Login'
          ? <LoginForm onSubmit={submitLogin} loginStatus={loginResult} />
          : <RegisterForm onSubmit={submitRegister} registerStatus={registerResult} />}

      </div>
    </div>
  );
};

export default LandingPage;
