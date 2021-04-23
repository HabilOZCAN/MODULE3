import { render, screen } from '@testing-library/react';
import HeaderLink from './HeaderLink';
import React from 'react';

test('list contains 4 links', () => {
    render(<HeaderLink/>);
  
    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
  
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveElement('a');
    expect(listItems.length).toEqual(4);
});
