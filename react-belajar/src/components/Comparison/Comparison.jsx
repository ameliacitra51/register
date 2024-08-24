import React from 'react';
import Assus1 from '../../assets/Assus1.png';
import Processor from '../../assets/Processor.png';
import System from '../../assets/System.png';

const ComparisonData = [
    {
        id: 1,
        title: 'Asus Zenbook Pro UX-430 US',
        judul: 'Processor',
        subjudul: 'Intel® Core™ i3 7100U Processor',
        body: 'Operating System',
        subbody: 'Windows 10 Pro for business',
        link: '#',
        delay: 0.2
    },
    {
        id: 2,
        title: 'Lenovo Legion Y545 2018',
        judul: 'Processor',
        subjudul: 'Intel® Core™ i7 9100P Processor',
        body: 'Operating System',
        subbody: 'Windows 10 Pro Enterprise',
        link: '#',
        delay: 0.2
    },
    {
        id: 3,
        title: 'Acer Swift Air SF-313 51',
        judul: 'Processor',
        subjudul: 'Intel® Core™ i3 7100X Processor',
        body: 'Operating System',
        subbody: 'Windows 10 Pro for business',
        link: '#',
        delay: 0.2
    },
    {
        id: 4,
        title: 'Lenovo Thinkpad Y51 X1 2019',
        judul: 'Processor',
        subjudul: 'Intel® Core™ i5 8000C Processor',
        body: 'Operating System',
        subbody: 'Windows 10 Pro for business',
        link: '#',
        delay: 0.2
    },
];

const Comparison = () => {
  return (
    <section>
      <div className='container pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>Compare the Product</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          {ComparisonData.map((kompare) => (
            <div 
              key={kompare.id} // Menambahkan key unik untuk setiap elemen
              className='rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'
            >
              <div className='items-center justify-center'>
                <img src={Assus1} alt="Product" />
                <br />
                <h1 className='text-lg text-center'>{kompare.title}</h1>
                <br />
                <hr />
                <br />
                <img src={Processor} alt="Processor" />
                <h1 className='text-lg text-center'>{kompare.judul}</h1>
                <h1 className='text-lg text-center'>{kompare.subjudul}</h1>
                <img src={System} alt="System" />
                <h1 className='text-lg text-center'>{kompare.body}</h1>
                <h1 className='text-lg text-center'>{kompare.subbody}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
