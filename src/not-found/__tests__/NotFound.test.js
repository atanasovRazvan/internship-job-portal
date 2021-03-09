import React from 'react';
import {
  screen,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import NotFound from '../NotFound';

describe('tests for NotFound page', async () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it('should display the image', async () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should display the paragraph', async () => {
    const paragraph = screen.getByText("Oh no! The page you were looking for doesn't exist!");
    expect(paragraph).toBeInTheDocument();
  });

  it('should display the button with href to default page', async () => {
    const button = screen.getByText('Go back to the website');

    expect(button.parentElement.getAttribute('href')).toBe('/');
  });
});
