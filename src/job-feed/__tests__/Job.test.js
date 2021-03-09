import React from 'react';
import {
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import Job from '../Job';
import '@testing-library/jest-dom/extend-expect';

describe('tests for the Job card', async () => {
  beforeEach(async () => {
    render(
      <Job
        name="Developer"
        description="Very good developer"
        companyName="CoolCompany"
        jobSkills={[{ skill: { id: 1, name: 'ReactJS' } }]}
      />,
    );
  });

  it('should display card details: company name, job name, job description, job skills', async () => {
    expect(screen.getByText('CoolCompany')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Very good developer')).toBeInTheDocument();
    expect(screen.getByText('ReactJS')).toBeInTheDocument();
  });
});
