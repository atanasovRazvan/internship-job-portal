import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Button,
  Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import NavBar from '../home-page/NavBar';
import { GET_JOB } from '../sources';
import './styles.css';
import CompanyDetails from './CompanyDetails';

const JobDetails = () => {
  const { id } = useParams();
  const [companyCardVisibility, setCompanyCardVisibility] = useState(false);
  const [job, setJob] = useState(null);
  const {
    data, error,
  } = useQuery(GET_JOB, { variables: { id: Number(id) } });

  useEffect(() => {
    if (data) {
      setJob(data.job);
    }
  }, [data]);

  return (
    <div>
      <NavBar />
      {error ? null : job && (
        <div className="details-container">

          <div className="expandable-container">
            <div className="expansion-button">
              <Button
                endIcon={<ArrowDropDown />}
                variant="contained"
                color="primary"
                className="company-info-button"
                onClick={() => setCompanyCardVisibility(!companyCardVisibility)}
              >
                Show company details
              </Button>
            </div>
            {companyCardVisibility ? <CompanyDetails companyInfo={job.company} /> : null }
          </div>

          <Card className="job-info" variant="outlined">
            <CardContent>

              {job.isAvailable === true ? (
                <Typography color="primary" variant="body2">
                  *This job is still available!
                </Typography>
              ) : (
                <Typography color="error" variant="body2">
                  *This job is not available anymore!
                </Typography>
              )}

              <Typography color="textPrimary" variant="h5">
                {job.name}
              </Typography>
              <br />
              <Typography color="textSecondary" variant="h4">
                Description
              </Typography>
              <hr />
              <Typography color="textPrimary">
                {job.description}
              </Typography>

              <br />
              <Typography color="textSecondary" variant="h4">
                Skills
              </Typography>
              <hr />
              {job.jobSkills.length > 0 ? job.jobSkills.map((jobSkill) => (
                <Typography
                  className="job-skill"
                  key={jobSkill.skill?.id}
                  variant="body2"
                  component="li"
                >
                  {jobSkill.skill?.name}
                </Typography>
              ))
                : (
                  <Typography
                    className="job-skill"
                    variant="body2"
                    component="p"
                  >
                    No Skills Provided
                  </Typography>
                )}

              <br />
              <Typography color="textSecondary" variant="h4">
                Requirements
              </Typography>
              <hr />
              {job.jobRequirements.length > 0 ? job.jobRequirements.map((jobRequirement) => (
                <Typography
                  className="job-skill"
                  key={jobRequirement.name}
                  variant="body2"
                  component="li"
                >
                  {jobRequirement.name}
                </Typography>
              ))
                : (
                  <Typography
                    className="job-skill"
                    variant="body2"
                    component="p"
                  >
                    No Requirements Provided
                  </Typography>
                )}

              <br />
              <Typography color="textSecondary" variant="h4">
                Benefits
              </Typography>
              <hr />
              {job.jobBenefits.length > 0 ? job.jobBenefits.map((jobBenefit) => (
                <Typography
                  className="job-skill"
                  key={jobBenefit.name}
                  variant="body2"
                  component="li"
                >
                  {jobBenefit.name}
                </Typography>
              ))
                : (
                  <Typography
                    className="job-skill"
                    variant="body2"
                    component="p"
                  >
                    No Benefits Provided
                  </Typography>
                )}
            </CardContent>
            <CardActions className="apply-button">
              <Button
                variant="contained"
                color="primary"
              >
                Apply to this job
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
