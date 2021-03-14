import React from 'react';
import JobList from './JobList';

const JobListPage = () => (
  <div>
    <h1 className="jobs-title">We gathered some jobs for you, here they are!</h1>
    <JobList />
  </div>
);

export default JobListPage;
