import React from 'react';
import Market from '../../assets/Market.png';

const Never = () => {
  return (
    <section className='bg-custom-blue-light overflow-hidden relative' style={{padding:'20px', margin:'0 auto', maxWidth:'90%', borderRadius:'10px'}}>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8'>
        <div>
          <img src={Market} className='w-[400px] xl:w-[600px] relative z-0 drop-shadow'/>
        </div>
        <div>
          <h1 className=' text-light text-2xl md:text-3xl lg:text-4xl font-bold mb-5 mt-5 '>Never Miss a Promo</h1>
          <h3 className=' text-light subtitle text-3xl lg:text-3xl !leading-snug'>We always give our customer a promo to gave the appreciate for loyalty to us. Just subscribe to us :)</h3>
          <div className='flex justify-center md:justify-start mt-6 md:mt-8'>
            <div className="relative w-full max-w-md">
              <input type="text" placeholder='yourname@mail.com' className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300'/>
              <button className='text-light absolute right-4 top-1/2 transform -translate-y-1/2 bg-custom-blue-light hover:bg-secondary text-custom-white py-2 px-4 rounded-md'>Subscribe</button>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Never;