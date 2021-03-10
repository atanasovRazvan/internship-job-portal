import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../sources';
import JobCard from './JobCard';
import './styles.css';

const JobList = () => {
  const {
    data, error,
  } = useQuery(GET_JOBS);

  return (
    <div className="jobs-container">
      {error ? null : (data?.jobs?.map((job) => (
        <JobCard
          key={job?.id}
          id={job?.id}
          companyName={job?.company?.name}
          description={job?.description}
          name={job?.name}
          jobSkills={job?.jobSkills}
        />
      )))}
    </div>
  );
};

export default JobList;
