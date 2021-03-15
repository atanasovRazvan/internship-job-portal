import {
  Button, Card, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import React from 'react';
import './styles.css';

const CompanyDetails = (companyInfo) => {
  const { name, contactInfo } = companyInfo.companyInfo;
  return (
    <Card className="company-info" variant="outlined">
      <CardContent>
        <Typography color="textPrimary" variant="h4">
          {name}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {contactInfo?.city}
          ,
          {' '}
          {contactInfo?.country?.name}
        </Typography>
        <hr />
        <CardMedia
          component="img"
          className="company-logo"
          image={contactInfo?.avatarUrl}
          title={name}
        />
        <br />
        <Typography color="textSecondary" variant="h4">
          About
        </Typography>
        <hr />
        <Typography color="textPrimary">
          {contactInfo?.about}
        </Typography>
        <br />
        <Typography color="textSecondary" variant="h4">
          Contact
        </Typography>
        <hr />
        <Typography color="textPrimary">
          E-mail:
          {' '}
          {contactInfo?.email}
        </Typography>
        <Typography color="textPrimary">
          Phone number:
          {' '}
          {contactInfo?.phone}
        </Typography>
        <br />
        <Button
          color="primary"
          href={contactInfo?.website}
          target="_blank"
          variant="contained"
        >
          Go to Website
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompanyDetails;
