import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App/>);
  const headerOne = screen.getByRole('heading');
  expect(headerOne).toBeInTheDocument();
});
