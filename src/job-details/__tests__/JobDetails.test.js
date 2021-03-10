import React from 'react';
import {
  fireEvent,
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import JobDetails from '../JobDetails';
import { GET_JOB } from '../../sources';

const mocks = [{
  request: {
    query: GET_JOB,
    variables: {
      id: 1,
    },
  },
  result: {
    data: {
      job: {
        id: 1,
        name: 'Senior Frontend Engineer (ReactJS)',
        description: "We're hiring! Start your career as a UI developer",
        isAvailable: true,
        company: {
          name: 'Modus Create',
          contactInfo: {
            id: 1,
            email: 'contact@moduscreate.com',
            phone: '+40-0786-887-444',
            city: 'Cluj Napoca',
            country: {
              name: 'Romania',
            },
            website: 'https://moduscreate.com/',
            avatarUrl: 'https://res.cloudinary.com/modus-create-inc/images/f_auto,q_auto/v1610397784/modus-og/modus-og.jpg',
            about: 'Digital transformation company ...',
          },
        },
        jobSkills: [
          {
            skill: {
              id: 1,
              name: 'HTML',
            },
            rating: 3,
          },
        ],
        jobRequirements: [
          {
            name: 'Played with HTML, CSS, JS before',
          },
        ],
        jobBenefits: [
          {
            name: 'Cool teammates',
          },
        ],
      },
    },
  },
}];

describe('tests for job details', async () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Router>
          <Switch>
            <Route path="/job/:id" component={JobDetails} />
            <Redirect to="/job/1" />
          </Switch>
        </Router>
      </MockedProvider>,
    );
  });

  it('should the expanding company info button exist and show the card', async () => {
    const button = await screen.findByText('Show company details');
    expect(button).toBeInTheDocument();
    expect(screen.queryByText('Modus Create')).toBeNull();
    fireEvent.click(button.parentElement);
    expect(screen.getByText('Modus Create')).toBeInTheDocument();
  });

  it('should display subtitles of the job card', async () => {
    expect(await screen.findByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Requirements')).toBeInTheDocument();
    expect(screen.getByText('Benefits')).toBeInTheDocument();
  });

  it('should display the provided data', async () => {
    expect(await screen.findByText('Senior Frontend Engineer (ReactJS)')).toBeInTheDocument();
    expect(screen.getByText("We're hiring! Start your career as a UI developer")).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', '3 Stars');
    expect(screen.getByText('Played with HTML, CSS, JS before')).toBeInTheDocument();
    expect(screen.getByText('Cool teammates')).toBeInTheDocument();
  });

  it('should display the apply button', async () => {
    expect(await screen.findByText('Apply to this job')).toBeInTheDocument();
  });
});
