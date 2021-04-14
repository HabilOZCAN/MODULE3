/**
 * Basit anlamda PersonGeneral modulu ile saglanan Dom elemanlari icerinde bulunan .AvatarGeneral sinifina ait elemanin varligi ve 
 * Foreginers Profil Page ifadesinin Browser'da yazdirilip yazdirilmadigi test edilmistir.
 */
import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import PersonGeneral from './PersonGeneral';

test('PersonGeneral Test #previous', () => {
  let state = {index: 1};
    const result = render(<PersonGeneral personIndex={state.index}/>);
    const element =result.container.querySelector('.AvatarGeneral');
    expect(element).toBeInTheDocument();
  });

test('PersonGeneral Test Foreginers Profil Page', () => {
    let state = {index: 1};
  render(<PersonGeneral personIndex={state.index}/>);
  expect(screen.getByText('Foreigners Profile Page')).toBeInTheDocument();
});