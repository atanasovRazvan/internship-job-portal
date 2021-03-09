import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../sources';
import Job from './Job';
import './styles.css';

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const {
    data, error,
  } = useQuery(GET_JOBS);

  useEffect(() => {
    if (data) {
      setJobList(data.jobs);
    }
  }, [data]);

  return (
    <div className="jobs-container">
      {error ? null : (jobList && jobList.map((job) => (
        <Job
          key={job.id}
          id={job.id}
          companyName={job.company.name}
          description={job.description}
          name={job.name}
          jobSkills={job.jobSkills}
        />
      )))}
    </div>
  );
};

export default JobList;
