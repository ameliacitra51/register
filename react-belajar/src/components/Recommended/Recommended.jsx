import React from 'react';
import Laptop1 from '../../assets/Laptop1.png';

const RecommendedData = [
    {
        id: 1,
        img: Laptop1,
        body: 'The best Anti Aging Cream with cheap price',
        link: '#',
        delay: 0.2
    },
    {
        id: 2,
        img: Laptop1,
        body: 'Best budget Headphone for RPG Gamers',
        link: '#',
        delay: 0.2
    },
    {
        id: 3,
        img: Laptop1,
        body: 'Have a much project? You must have a this Savage Laptop',
        link: '#',
        delay: 0.2
    },
    {
        id: 4,
        img: Laptop1,
        body: 'Bored work from home? You can make a juice for your health',
        link: '#',
        delay: 0.2
    }
]

const Recommended = () => {
  return (
    <section>
        <div className='container pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>Recommended for You</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
            {RecommendedData.map((recommend) => (
                <div className='rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover: scale-110 duration-300 hover:shadow-2xl'>
                    <div>
                    <img src={recommend.img} />
                    <h1 className='text-lg text-center'>{recommend.body}</h1>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default Recommended;
