import React from 'react';
import Fashion from '../../assets/Fashion.png';
import Handphone from '../../assets/Handphone.png';
import Laptop from '../../assets/Laptop.png';
import Music from '../../assets/Music.png';
import Photography from '../../assets/Photography.png';
import Furniture from '../../assets/Furniture.png';
import Health from '../../assets/Health.png';
import Sports from '../../assets/Sports.png';

const ServicesData = [
    {
        id: 1,
        title: 'Fashion',
        body: '290K Items',
        link: '#',
        img: Fashion,
        delay: 0.2
    },
    {
        id: 2,
        title: 'Handphone',
        body: '3M Items',
        link: '#',
        img: Handphone,
        delay: 0.2
    },
    {
        id: 3,
        title: 'Laptop',
        body: '1,2 M Items',
        link: '#',
        img: Laptop,
        delay: 0.2
    },
    {
        id: 4,
        title: 'Music',
        body: '751K Items',
        link: '#',
        img: Music,
        delay: 0.2
    },
    {
        id: 5,
        title: 'Photography',
        body: '1,0M Items',
        link: '#',
        img: Photography,
        delay: 0.2
    },
    {
        id: 6,
        title: 'Furniture',
        body: '88K Items',
        link: '#',
        img: Furniture,
        delay: 0.2
    },
    {
        id: 7,
        title: 'Health',
        body: '761K Items',
        link: '#',
        img: Health,
        delay: 0.2
    },
    {
        id: 8,
        title: 'Sports',
        body: '2,9K Items',
        link: '#',
        img: Sports,
        delay: 0.2
    },
]
const Services = () => {
return ( 
  <section className='bg-white'>
    <div className='container pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>Categories</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-8'>
            {ServicesData.map((service) => (
                <div className='rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover: scale-110 duration-300 hover:shadow-2xl'>
                    <div>
                    <img className='border text-4xl mb-4' src={service.img} />
                    <h1 className='text-lg font-semibold text-center px-3'>{service.title}</h1>
                    <h1 className='text-lg text-center'>{service.body}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
);
};

export default Services;
