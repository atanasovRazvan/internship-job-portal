import React, { useState } from 'react';
import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import './styles.css';
import { KeyboardArrowRight } from '@material-ui/icons';
import { Redirect } from 'react-router-dom';
import { Rating } from '@material-ui/lab';

const JobCard = ({
  id, name, description, companyName, jobSkills,
}) => {
  const [jobDetailsButtonClicked, setJobDetailsButtonClicked] = useState(false);
  const jobPath = `/job/${id}`;
  return (
    <Card className="job-card">
      <CardContent>
        <Typography className="job-company-name" variant="h6" gutterBottom>
          {companyName}
        </Typography>
        <hr />
        <Typography className="job-name" variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className="job-description" color="textSecondary">
          {description}
        </Typography>
        <hr />
        <Typography color="textSecondary" variant="h6">
          Job Skills
        </Typography>
        <br />
        {jobSkills.length > 0 ? jobSkills.map((jobSkill) => (
          <Typography
            className="job-skill"
            key={jobSkill?.skill?.id}
            variant="body1"
          >
            {jobSkill?.skill?.name}
            <Rating name="read-only" size="small" value={jobSkill?.rating} readOnly />
          </Typography>
        ))
          : (
            <Typography
              className="job-skill"
              variant="body2"
              component="p"
            >
              No Skill Requirements Provided
            </Typography>
          )}
      </CardContent>
      <hr />
      <CardActions className="details-button">
        <Button
          size="small"
          color="primary"
          variant="outlined"
          endIcon={<KeyboardArrowRight />}
          onClick={() => setJobDetailsButtonClicked(true)}
        >
          {jobDetailsButtonClicked ? <Redirect to={jobPath} /> : null }
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

JobCard.defaultProps = {
  id: 0,
  name: '',
  description: '',
  companyName: '',
  jobSkills: [],
};

JobCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
  jobSkills: PropTypes.instanceOf(Array),
};

export default JobCard;
