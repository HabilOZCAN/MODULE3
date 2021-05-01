import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectData from './CollectData';

test('test for CollectData', () => {
  render(<CollectData/>);
  const linkElement = screen.getByText(/First Name/i);
  expect(linkElement).toBeInTheDocument();
});