import React from 'react';
import NavBar from './NavBar';
import './styles.css';
import JobList from '../job-feed/JobList';

const HomePage = () => (
  <div>
    <NavBar />
    <div className="home-content">
      <h1>We gathered some jobs for you, here they are!</h1>
      <JobList />
    </div>
  </div>
);

export default HomePage;
