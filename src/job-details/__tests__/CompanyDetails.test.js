import React from 'react';
import {
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompanyDetails from '../CompanyDetails';

const value = {
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
};

describe('test CompanyDetails card', async () => {
  beforeEach(async () => {
    render(<CompanyDetails companyInfo={value.company} />);
  });

  it('should display the subtitles', async () => {
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should display company name, image and about', async () => {
    expect(screen.getByText('Modus Create')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', value.company.avatarUrl);
    expect(screen.getByText('Digital transformation company ...')).toBeInTheDocument();
  });

  it('should display company info', async () => {
    expect(screen.getByText('E-mail: contact@moduscreate.com')).toBeInTheDocument();
    expect(screen.getByText('Cluj Napoca, Romania')).toBeInTheDocument();
    expect(screen.getByText('Phone number: +40-0786-887-444')).toBeInTheDocument();
  });

  it('should the button exist and go to the right link', async () => {
    expect(screen.getByText('Go to Website').parentElement).toHaveAttribute('href', value.company.contactInfo.website);
  });
});
