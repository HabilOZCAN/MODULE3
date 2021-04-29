import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/First Name/i);
  expect(linkElement[0]).toBeInTheDocument();
});

test('are CollectData components created', ()=>{
  render(<App/>);
  const linkElement = screen.getByRole(/table/i);
  expect(linkElement).toBeInTheDocument();
});

test('are SendtData component created', ()=>{
  const content = render(<App/>);
  const fieldset = content.getAllByTestId("fieldsetTest");
  expect(fieldset).toBeTruthy();
});