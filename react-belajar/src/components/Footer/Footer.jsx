import React from 'react';
import Logo from '../../assets/Logo.png';
import Heart from '../../assets/Heart.png';
const Footer = () => {
  return (
    <footer className='py-28 bg-[#f4f4f4]'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 md:gap-4'>
          {/* first section */}
          <div className='space-y-4 max-w-[3000px]'>
            <img src={Logo}  />
            <h1>Build a modern and creative</h1>
            <h1>website with crealand</h1>
          </div>
          {/* second section */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
            <div className='spacey-u-4'>
              <h1 className='text-2xl font-bold'>Product</h1>
              <div className='text-dark'>
                <ul className='spacy-y-2 text-lg'>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Landingpage</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Features</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Documenttation</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Referral Program</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Pricing</li>
                </ul>
              </div>
            </div>
            <div className='spacey-u-4'>
              <h1 className='text-2xl font-bold'>Services</h1>
              <div className='text-dark'>
                <ul className='spacy-y-2 text-lg'>
                <li className='cursor-pointer hover: text-secondary duration-200'>Documentation</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Design</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Themes</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>Illustrations</li>
                  <li className='cursor-pointer hover: text-secondary duration-200'>UI Kit</li>
                </ul>
              </div>
            </div>
            <div className='spacey-u-4'>
              <h1 className='text-2xl font-bold'>Company</h1>
              <div className='text-dark'>
              <ul className='spacy-y-2 text-lg'>
                <li className='cursor-pointer hover: text-secondary duration-200'>About</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Terms</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Privacy Policy</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Careers</li>
              </ul>
              </div>
            </div>
            <div className='spacey-u-4'>
              <h1 className='text-2xl font-bold'>More</h1>
              <div className='text-dark'>
              <ul className='spacy-y-2 text-lg'>
                <li className='cursor-pointer hover: text-secondary duration-200'>Documentation</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>License</li>
                <li className='cursor-pointer hover: text-secondary duration-200'>Changelog</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <img className='flex items-center justify-center' src={Heart} />
        <br />
        <h1 className='text-lg text-center'>Copyright © 2019. Crafted with love.</h1>
      </div>
    </footer>
  );
};

export default Footer;
