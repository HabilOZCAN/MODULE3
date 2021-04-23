import { render, screen } from '@testing-library/react';
import FetchApiHO from './FetchApiHO';
import React from 'react';

test('renders learn react link', () => {
    const API_KEY =  "b73e2ef9";
    let pIMDb_ID = "tt1285016";//`tt3896198`;
    const API_URL =   new URL (`http://www.omdbapi.com/`);
    API_URL.searchParams.set('i',pIMDb_ID);
    API_URL.searchParams.set('apikey', API_KEY);

    render(<FetchApiHO API_URL={API_URL}/>);
    
    const linkElement = screen.getByText(/Budur/);
    expect(linkElement).toBeInTheDocument();
});