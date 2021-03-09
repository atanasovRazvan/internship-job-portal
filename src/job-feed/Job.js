import React from 'react';
import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import './styles.css';
import { KeyboardArrowRight } from '@material-ui/icons';

const Job = ({
  name, description, companyName, jobSkills,
}) => (
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
          key={jobSkill.skill.id}
          variant="body2"
          component="p"
        >
          {jobSkill.skill.name}
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
      >
        Details
      </Button>
    </CardActions>
  </Card>
);

Job.defaultProps = {
  name: '',
  description: '',
  companyName: '',
  jobSkills: [],
};

Job.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
  jobSkills: PropTypes.instanceOf(Array),
};

export default Job;
