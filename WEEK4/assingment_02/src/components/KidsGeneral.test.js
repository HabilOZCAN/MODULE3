/**
 * KidsGeneral.js dosyasinin olusturulmasi esnasinda innerHTML string olarak saklanmakta ve sonrasinda
 * Parser library si kullanilarak innerHTML childrenContainer icerisine yerlestirilmektedir.
 * (Normal sartlarda React boyle bir eyleme izin vermemektedir.) Bu Test hata vermektedir zira
 * implementasyonu ilgili modulunun implementasyonu farkli bir kutuphane kullanilarak gerceklestirilmistir.
 */
import React from 'react';
import {render, screen, queryByAttribute } from '@testing-library/react';
import {KidsGeneral} from './KidsGeneral';

test('KidsGeneral test', () => {
  let state = {index: 1};
    const result = render(<KidsGeneral personIndex={state.index}/>);
    const element =result.container.querySelector('.childrenContainer');
    expect(element).toBeInTheDocument();
  });

  test('Kids Test p Element', () => {
    let state = {index: 1};
    render(<KidsGeneral personIndex={state.index}/>);
    const pElement = screen.getByRole('p');
    expect(pElement).toBeInTheDocument();
  });