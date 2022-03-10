import React from 'react';

//images
import FirstWoman from '../assets/images/judeus-samson-0UECcInuCR4-unsplash.png';
import DreadlockGuy from '../assets/images/man-dreadlock.png';
import ShadesGuy from '../assets/images/man-leather.png';
import FineGirl from '../assets/images/woman-flowerTop.png';
import HairModel from '../assets/images/woman-brownHair.png';
import SomeGuy from '../assets/images/guy-blackTop.png';

// stylesheet
import './productsComponent.css';

const ProductsComponent: React.FC = () => {
  return (
    <div className='products__container'>
      <div className="row">
        <div className="column">
          <img src={FirstWoman} style={{ width: '100%' }} alt="Woman posing" />
        </div>
        <div className="column">
          <img className='dreadlock__guy' src={DreadlockGuy} style={{ width: '100%' }} alt="Guy in dreadlock" />
        </div>
        <div className="column">
          <img src={ShadesGuy} style={{ width: '100%' }} alt="Dude in Sun shades" />
        </div>
        <div className="column">
          <img src={FineGirl} style={{ width: '100%' }} alt="Fine girl" />
        </div>
        <div className="column">
          <img src={HairModel} style={{ width: '100%' }} alt="Girl with a lovely hair" />
        </div>
        <div className="column">
          <img src={SomeGuy} style={{ width: '100%' }} alt="Some dude" />
        </div>
      </div>
    </div>
  )
}

export default ProductsComponent;