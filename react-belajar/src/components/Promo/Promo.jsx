import React from 'react'
import Delivery from '../../assets/Delivery.png';
import Cart from '../../assets/Cart.png';
import Free from '../../assets/Free.png';
import EhyaVersarry from '../../assets/EhyaVersarry.png';

const Landing = () => {
  return (
    <section className='container pb-14 pt-16 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='bg-[#f4f4f4] rounded-lg pt-16 text-center hover:bg-white hover:scale-60 duration -300'>
        <p className='text-grey-500'>
        WEEKLY DEALS
        </p>
        <h1 className='text-4xl font-semibold text-gray-800 mb-2'>Free Delivery</h1>
        <a href="#" className='text-custom-blue-light font-bold hover:underline'>Learn More</a>
        <img src={Delivery} alt="Free Delivery" className='w-full h-auto mt-5' />
      </div>
      <div className='grid grid-rows-2 gap-6'>
        <div className='bg-[#f4f4f4] rounded-lg pt-6 grid grid-cols-2 items-center hover:bg-white hover:scale-60 duration-300 hover:shadow-2'>
          <div className='m-5'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Disc Up to 25%</h3>
            <a href="#" className='text-custom-blue-light font-bold hover:underline'>Learn More</a>
          </div>
          <div className='text-right m-5'>
            <img src={Cart} alt="Discount Up to 25%" className='max-w-[150px] mb-4 inline-block' />
          </div>
        </div>
        <div className='bg-[#f4f4f4] rounded-lg pt-6 grid grid-cols-2 items-center hover:bg-white hover:scale-60 duration-300 hover:shadow-2'>
          <div className='text-left m-5'>
            <img src={Free} alt="Free 5GB Data" className='max-w-[150px] mb-4 inline-block' />
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Free 5GB Data</h3>
            <a href="#" className='text-custom-blue-light font-bold hover:underline'>Learn More</a>
          </div>
        </div>
      </div>
      <div className='bg-[#f4f4f4] rounded-lg pt-6 text-center hover:bg-white hover:scale-60 duration-300 hover:shadow-2xl'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>
        EhyaVersarry
        Mounthly Deals
        </h1>
        <a href="#" className='text-custom-blue-light font-bold hover:underline'>Learn More</a>
        <img src={EhyaVersarry} alt="Free Delivery" className='w-full h-auto mt-5' />
      </div>
    </section>
  );
};

export default Landing;
