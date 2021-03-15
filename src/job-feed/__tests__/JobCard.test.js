import React from 'react';
import {
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import JobCard from '../JobCard';
import '@testing-library/jest-dom/extend-expect';

describe('tests for the JobCard card', async () => {
  it('should display button and card details: company name, job name, job description, job skills', async () => {
    render(
      <JobCard
        name="Developer"
        description="Very good developer"
        companyName="CoolCompany"
        jobSkills={[{ skill: { id: 1, name: 'ReactJS' } }]}
      />,
    );

    expect(screen.getByText('CoolCompany')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Very good developer')).toBeInTheDocument();
    expect(screen.getByText('ReactJS')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('should display no skills text if there are no jobskills provided', async () => {
    render(
      <JobCard
        name="Developer"
        description="Very good developer"
        companyName="CoolCompany"
      />,
    );
    expect(screen.getByText('No Skill Requirements Provided')).toBeInTheDocument();
  });
});
