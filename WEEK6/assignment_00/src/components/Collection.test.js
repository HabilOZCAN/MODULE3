import { render, screen } from '@testing-library/react';
import Collection from './Collection';
import React from 'react';

test('renders learn react link', () => {
  render(<Collection/>);
  const linkElement = screen.getByText(/Hayvanlar Alemi/);
  expect(linkElement).toBeInTheDocument();
});