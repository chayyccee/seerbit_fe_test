import React from 'react';

// elements
import ProductCart from '../elements/ProductCart';
import ProductFavourite from '../elements/ProductFavourite';

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
          <div className="product__detail__container">
            <div className="product__name__cart">
              <div className="product__name">Adela Top</div>
              <div className="product__cart">
                <ProductCart />
              </div>
            </div>
            <div className="product__price__favourite">
              <div className="product__price">$239.00</div>
              <div className="product__favourite">
                <ProductFavourite />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <img className='dreadlock__guy' src={DreadlockGuy} style={{ width: '100%' }} alt="Guy in dreadlock" />
          <div className="product__detail__container">
            <div className="product__name__cart">
              <div className="product__name">Adela Top</div>
              <div className="product__cart">
                <ProductCart />
              </div>
            </div>
            <div className="product__price__favourite">
              <div className="product__price">$239.00</div>
              <div className="product__favourite">
                <ProductFavourite />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <img src={ShadesGuy} style={{ width: '100%' }} alt="Dude in Sun shades" />
          <div className="product__detail__container">
            <div className="product__name__cart">
              <div className="product__name">Adela Top</div>
              <div className="product__cart">
                <ProductCart />
              </div>
            </div>
            <div className="product__price__favourite">
              <div className="product__price">$239.00</div>
              <div className="product__favourite">
                <ProductFavourite />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <img src={FineGirl} style={{ width: '100%' }} alt="Fine girl" />
          <div className="product__detail__container">
            <div className="product__name__cart">
              <div className="product__name">Adela Top</div>
              <div className="product__cart">
                <ProductCart />
              </div>
            </div>
            <div className="product__price__favourite">
              <div className="product__price">$239.00</div>
              <div className="product__favourite">
                <ProductFavourite />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <img src={HairModel} style={{ width: '100%' }} alt="Girl with a lovely hair" />
          <div className="product__detail__container">
            <div className="product__name__cart">
              <div className="product__name">Adela Top</div>
              <div className="product__cart">
                <ProductCart />
              </div>
            </div>
            <div className="product__price__favourite">
              <div className="product__price">$239.00</div>
              <div className="product__favourite">
                <ProductFavourite />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <img src={SomeGuy} style={{ width: '100%' }} alt="Some dude" />
          <div className="product__detail__container">
            <div className="product__name__cart">
              <div className="product__name">Adela Top</div>
              <div className="product__cart">
                <ProductCart />
              </div>
            </div>
            <div className="product__price__favourite">
              <div className="product__price">$239.00</div>
              <div className="product__favourite">
                <ProductFavourite />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsComponent;