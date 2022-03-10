import React from 'react';

//images
import Logo from '../assets/images/Logo.svg';
import SearchIcon from '../assets/images/SearchIcon.svg';

//elements
import ShoppingCart from '../elements/ShoppingCart';
import Menu from '../elements/Menu';

//hooks
import { useMedia, useDesktopMedia } from '../hooks/ResponsiveHooks';

// stylesheet
import './navbarComponent.css';

const NavBarComponent: React.FC = () => {
    const isDesktop: boolean = useDesktopMedia();
    const isMobile: boolean = useMedia('(max-width: 768px)');
  return (
    <div className='navbar__container'>
      {isDesktop ? (<div className='navbar__left__text'>
       Follow - Fb. / Tw. / In.
      </div>) : (null)}
      <div className={isMobile ? 'navbar__middle__logo__mobile' : 'navbar__middle__logo'}>
        <img
          className={isMobile ? 'navbar__middle__logo__image__mobile' : 'navbar__middle__logo__image'}
          style={{
            width: '300px',
            height: '300px',
            }}
          src={Logo}
          alt="Company Logo"
        />
      </div>
      <div className='navbar__right__items_container'>
        {isDesktop ? (<div className='navbar__price'>
          $239.00
        </div>) : (null)}
        {isDesktop ? (<div className='navbar__search__icon'>
          <img
            style={{
              marginLeft: '2rem',
            }} 
            src={SearchIcon}
            alt=" search icon"
          />
        </div>) : (null)}
        {isDesktop ? (<div className='navbar__cart__icon'>
          <ShoppingCart />
          </div>) : (<Menu />)}
      </div>
    </div>
  )
}

export default NavBarComponent;