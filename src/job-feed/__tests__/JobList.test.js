import React from 'react';
import {
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import JobList from '../JobList';
import { GET_JOBS } from '../../sources';

const mocks = [{
  request: {
    query: GET_JOBS,
  },
  result: {
    data: {
      jobs: [
        {
          id: 1,
          name: 'Developer',
          description: 'Very good developer',
          company: {
            name: 'CoolCompany',
          },
          jobSkills: [
            {
              skill: {
                id: 1,
                name: 'ReactJS',
              },
            },
          ],
        },
      ],
    },
  },
}];

describe('tests for JobList', async () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={mocks}>
        <JobList />
      </MockedProvider>,
    );
  });

  it('should see job details on the page', async () => {
    expect(await screen.findByText('CoolCompany')).toBeInTheDocument();
    expect(await screen.findByText('Developer')).toBeInTheDocument();
    expect(await screen.findByText('Very good developer')).toBeInTheDocument();
    expect(await screen.findByText('ReactJS')).toBeInTheDocument();
  });
});
