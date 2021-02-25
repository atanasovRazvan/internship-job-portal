import React, { useState } from 'react';
import {
  Paper, Tab, Tabs,
} from '@material-ui/core';
import LoginForm from './LoginForm';
import './styles.css';
import RegisterForm from './RegisterForm';

const LandingPage = () => {
  const [form, setForm] = useState('Login');

  return (
    <div className="landing-page">
      <h1 className="landing-page-content"> Lets find you a job, are you in? </h1>
      <div className="login-register-forms">

        <Paper square>
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

        {form === 'Login' ? <LoginForm /> : <RegisterForm />}

      </div>
    </div>
  );
};

export default LandingPage;
