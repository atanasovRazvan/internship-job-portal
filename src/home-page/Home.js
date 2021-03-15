import React from 'react';
import './styles.css';
import JobList from '../job-feed/JobList';

const HomePage = () => (
  <div>
    <div className="home-content">
      <h1 className="home-title">We gathered some jobs for you, here they are!</h1>
      <JobList />
    </div>
  </div>
);

export default HomePage;
