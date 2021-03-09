import React from 'react';
import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const Job = ({
  name, description, companyName, jobSkills,
}) => (
  <Card variant="outlined">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {companyName}
      </Typography>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography color="textSecondary">
        {description}
      </Typography>
      {jobSkills && jobSkills.map((jobSkill) => (
        <Typography
          key={jobSkill.skill.id}
          variant="body2"
          component="p"
        >
          {jobSkill.skill.name}
        </Typography>
      ))}
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
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
