/**
 * KidsGeneral.test.js ile yapilmak istenen kontroller Ust modul olarak hazirlanmis olan Profil modulunun testi icerisinde 
 * implemente edilmis ve test'en ilgili sinif olan .childrenPart clasinin dom icinde oldugu gorulmustur. Ayrica Children 
 * ifadesinin Browser'da gosterilip gosterilmedigi de test edilmistir.
 */
import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import Profil from './Profil';

test('Profil test', () => {
      const result = render(<Profil/>);
      const element =result.container.querySelector('.childrenPart');
      expect(element).toBeInTheDocument();
    });
  
  test('Profil Test p Element', () => {
    render(<Profil/>);
    expect(screen.getByText(/Children:/)).toBeInTheDocument();
  });