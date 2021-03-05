import React from 'react';
import {
  findByRole, findByText,
} from '@testing-library/dom';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('tests for NotFound page', async () => {
  let container;
  beforeEach(() => {
    container = render(<NotFound />).container;
  });

  it('should display the image', async () => {
    const image = await findByRole(container, 'img');
    expect(image).toBeInTheDocument();
  });

  it('should display the paragraph', async () => {
    const paragraph = await findByText(container, "Oh no! The page you were looking for doesn't exist!");
    expect(paragraph).toBeInTheDocument();
  });

  it('should display the button with href to default page', async () => {
    const button = await findByText(container, 'Go back to the website');

    expect(button.parentElement.getAttribute('href')).toBe('/');
  });
});
