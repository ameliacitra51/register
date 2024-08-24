import React from 'react';
import Laptop1 from '../../assets/Laptop1.png';
import Rating from '../../assets/Rating.png';
import Ratings from '../../assets/Ratings.png';
import Ratingss from '../../assets/Ratingss.png';
import Ratingsss from '../../assets/Ratingsss.png';

const LeaderboardData = [
    {
        id: 1,
        img: Laptop1,
        title: 'Asus Zenbook UX-430 US',
        img1: Rating,
        subtitle: '21K Total Reviews',
        link: '#',
        delay: 0.2
    },
    {
        id: 2,
        img: Laptop1,
        title: 'Audio Technica ATH M20 BT',
        img1: Ratings,
        subtitle: '300K Total Reviews',
        link: '#',
        delay: 0.2
    },
    {
        id: 3,
        img: Laptop1,
        title: 'SK II - Anti Aging Cream',
        img1: Ratingss,
        subtitle: '89K Total Reviews',
        link: '#',
        delay: 0.2
    },
    {
        id: 4,
        img: Laptop1,
        title: 'Modena Juice Blender',
        img1: Ratingsss,
        subtitle: '871 Total Reviews',
        link: '#',
        delay: 0.2
    },
];

const Leaderboard = () => {
  return (
    <section>
        <div className='flex justify-center font-bold'>
            <h1>Most Sold in Ehya Store</h1>
        </div>
        <br />
        <h5 className='flex justify-center'>
          This section displays the products with the most sales in Ehya Store.
        </h5>
        <br />
        {LeaderboardData.map((store) => (
            <div
              key={store.id} // Menambahkan key unik
              className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'
            >
                <img
                  className='col-span-1 text-4xl mb:4 drop-shadow mt-6'
                  src={store.img}
                  alt={store.title} // Menambahkan atribut alt
                />
                <div className='col-span-2 flex flex-col justify-between mt-7 mb-7'>
                    <h1 className='text-lg font-medium font-poppins'>{store.title}</h1>
                    <br />
                    <img
                      src={store.img1}
                      className='text-4xl w-[150px]'
                      alt='Rating'
                    />
                    <br />
                    <h1 className='text-sm'>{store.subtitle}</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className='primary-btn'>Read Reviews</button>
                    <button className='primary-btn'>Buy</button>
                </div>
            </div>
        ))}
        <div className='flex justify-center'>
            <div>
                <button>See Full Leaderboards</button>
            </div>
        </div>
    </section>
  );
};

export default Leaderboard;
