import React, { useState } from 'react';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import {
  Paper, Tab, Tabs,
} from '@material-ui/core';
import LoginForm from './LoginForm';
import './styles.css';
import RegisterForm from './RegisterForm';

const GET_USERS = gql`
  query Login{
    users{
      username
      password
    }
  } 
`;

const CREATE_USER = gql`
  mutation Register($username: String!, $firstName: String!, $lastName: String!, $password: String!){
    createUser(username: $username, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password,
      userRoleId: 3){
         username,
      }
}
`;

const LandingPage = () => {
  const [form, setForm] = useState('Login');

  const [getUsers, {
    data: queryData, error: queryError,
  }] = useLazyQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  const submitLogin = (username, password) => {
    getUsers();

    if (queryError) {
      console.log(queryError);
      alert('Something went wrong');
      return;
    }

    let loginStatus = false;
    if (queryData) {
      queryData.users.forEach((user) => {
        if (user.username === username
            && user.password === password) {
          loginStatus = true;
        }
      });
    }

    if (loginStatus === true) {
      alert(`Login successful for ${username}`);
    } else {
      alert('Username or password incorrect!');
    }
  };

  const [createUser, {
    error: mutationError,
  }] = useMutation(CREATE_USER);

  const submitRegister = (firstName, lastName, username, password) => {
    createUser({
      variables: {
        username, firstName, lastName, password,
      },
    })
      .catch((err) => {
        console.log(`Calling error: ${err}`);
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
