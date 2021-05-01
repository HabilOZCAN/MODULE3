import { render, screen } from '@testing-library/react';
import React from 'react';
import SendData from './SendData';

test('test for SendData', () => {
  render(<SendData/>);
  const linkElement = screen.getByText(/USER INFORMATION/i);
  expect(linkElement).toBeInTheDocument();
});