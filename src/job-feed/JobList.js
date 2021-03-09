import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../sources';
import Job from './Job';

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
    <div>
      {error ? null : (jobList && jobList.map((job) => (
        <Job
          key={job.id}
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
