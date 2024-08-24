import React from 'react';
import Finance from '../../assets/Finance.png';
import Stock from '../../assets/Stock.png';
import Support from '../../assets/Support.png';
import Secure from '../../assets/Secure.png';
import FreeDelivery from '../../assets/FreeDelivery.png';

const Benefit = () => {
  return (
    <section>
        <div>
            <h1 className='cloud'>
            Why the Choose us than other?
            </h1>
        </div>
        <div>
            <h2 className='cat'>Many reasons why customer choose us than other ecommerce. We have some plus point that maybe other can’t have.</h2>
        </div>
        <br />
        <div className='grid grid-cols-2 sm:grid-cols- md:grid-cols-3 gap-8'>
            <div>
                <img src={Finance} />
            </div>
            <div>
                <div className='inner'>
                <img src={Stock} className='border'/>
                <h1 className='stock'>Have Most Stock</h1>
                <h1 className='stock-h1'>We have many stock until next year to supply your needs.</h1>
                </div>
                <br />
                <div className='inner'>
                <img src={Support}  className='border'/>
                <h1 className='stock'>Have Most Stock</h1>
                <h1 className='stock-h1'>We have many stock until next year to supply your needs.</h1>
                </div>
            </div>
            <div>
                <div className='inner'>
                <img src={Secure} className='border'/>
                <h1 className='stock'>Have Most Stock</h1>
                <h1 className='stock-h1'>We have many stock until next year to supply your needs.</h1>
                </div>
                <br />
                <div className='inner'>
                <img src={FreeDelivery} className='border'/>
                <h1 className='stock'>Have Most Stock</h1>
                <h1 className='stock-h1'>We have many stock until next year to supply your needs.</h1>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Benefit;
