import React, { useState } from 'react';
import logo from '../../assets/header.png';
import header from '../../assets/header.png'
import { Link } from 'react-router-dom';

export const Header = () => {

  // Función para aplicar un estilo condicionalmente al icono en función del enlace activo

  return (
    <div className='fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-[1vh]'>
      <Link to={'/'}>
        <div className='flex flex-row justify-center'>
          <img src={logo} alt="" className='max-h-[7vh]' />
          <div className='text-white flex flex-col justify-center items-left mx-4'>
            <h1 className='font-semibold italic text-sm leading-none'>
              PLAN DE
              <br />
              <span className='font-extrabold italic text-xl leading-none'>
                BENEFICIOS
              </span>
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
