//Basit anlamda previous id sine sahip bir elementin ve icerigi Next olan bir elementin olup olmadigi kontrol edilmistir.
import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import Buttons from './Buttons';

test('Button Test #previous', () => {
  let data = {personIndex: 1};
    const result = render(<Buttons data={data}/>);
    const element =result.container.querySelector('#previous');
    expect(element).toBeInTheDocument();
  });

test('Button Test Next', () => {
  let data = {personIndex: 1};
  render(<Buttons data={data}/>);
  expect(screen.getByText('Next')).toBeInTheDocument();
});