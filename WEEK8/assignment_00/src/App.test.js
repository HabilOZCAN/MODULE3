import { render, screen } from '@testing-library/react';
import App from './App';


import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
//
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

//import { App, LocationDisplay } from './app'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  // check that the content changed to the new page
  expect(screen.getByText(/PersonList/i)).toBeInTheDocument();
  expect(screen.getByText(/SendPersonInfo/i)).toBeInTheDocument();
})


test('renders learn react link', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
    )
  const linkElement = screen.getByText(/MainPage/i);
  expect(linkElement).toBeInTheDocument();
});


// test('renders learn react link', () => {
//   const history = createMemoryHistory()
//   render(
//     <Router history={history}>
//       <App />
//     </Router>
//     );
//   const linkElement = screen.getAllByText(/First Name/i);
//   expect(linkElement[0]).toBeInTheDocument();
// });

//  test('are CollectData components created', ()=>{
//      render(
//   <Router>
//     <App />
//   </Router>
//   );
//    const linkElement = screen.getByRole(/table/i);
//    expect(linkElement).toBeInTheDocument();
//  });

//  test('are SendtData component created', ()=>{
//    const content = render(
//     <Router>
//       <App />
//     </Router>
//       );
//    const fieldset = content.getAllByTestId("fieldsetTest");
//    expect(fieldset).toBeTruthy();
//  });
