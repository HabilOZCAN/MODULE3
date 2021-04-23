import { render, screen } from '@testing-library/react';
import ArticleWithLink from './ArticleWithLink';
import React from 'react';

test('renders learn react link', () => {
  render(<ArticleWithLink />);
  const linkElement = screen.getByText(/Hayvanlar Alemi/);
  expect(linkElement).toBeInTheDocument();
});
