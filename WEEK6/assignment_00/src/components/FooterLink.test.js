import { render, screen } from '@testing-library/react';
import FooterLink from './FooterLink';
import React from 'react';

test('renders learn react link', () => {
  render(<FooterLink/>);
  const linkElement = screen.getByText(/Hayvanlar Alemi/);
  expect(linkElement).toBeInTheDocument();
});
