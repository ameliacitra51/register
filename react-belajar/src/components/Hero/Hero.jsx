import React from 'react'
import Navbar from '../Navbar/Navbar';
import Shopping from '../../assets/Shopping.png';


const Hero = () => {
  return ( 
  <section className='overflow-hidden relative' style={{padding:'20px', margin: '0 auto', maxWidth:'90%', borderRadius:'10px'}}>
    <Navbar />
    <div className='bg-custom-blue-light'>
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
        {/* Brand Info */}
        <div className='flex flex-col justify-start py-14 md:py-0 relative z-0'>
            <div className='text-end md:text-left space-x-10 lg:max-w-[400px]'>
              <h1 className='text-3xl lg:text-3xl font-bold !leasing-snug'>
                Browse Million {" "}
                Product for Your Needs</h1>
            </div>
        </div>
        <div className='flex justify-end items-end'>
          <img src={Shopping} className='w-[400px] xl:w-[600px] relative z-0 drop-shadow' />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
