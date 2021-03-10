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
              rating: 3,
            },
          ],
        },
        {
          id: 2,
          name: 'Developer2',
          description: 'Very good developer2',
          company: {
            name: 'CoolCompany',
          },
          jobSkills: [
            {
              skill: {
                id: 1,
                name: 'ReactJS2.0',
              },
              rating: 3,
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

  it('should see two job cards on the page', async () => {
    expect(await screen.findAllByText('CoolCompany')).toHaveLength(2);
  });
});
