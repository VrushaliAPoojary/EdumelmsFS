import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t py-4'>
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src={assets.logo} alt="Logo" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className='text-center text-xs md:text-sm text-gray-500'>
          Copyright 2024 @VrushaliAPoojary. All rights reserved.
        </p>
      </div>
      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={assets.facebook_icon} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={assets.twitter_icon} alt="Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={assets.instagram_icon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
