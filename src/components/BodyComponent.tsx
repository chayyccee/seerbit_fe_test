import React from 'react';

// hooks
import { useMedia, useDesktopMedia } from '../hooks/ResponsiveHooks';

// stylesheet
import './bodyComponent.css';

// components
import NavBarComponent from './NavBarComponent';
import ProductsComponent from './ProductsComponent';

const BodyComponent: React.FC = () => {
    const desktopDevice: boolean = useDesktopMedia();
    const alsoDesktopDevice: boolean = useMedia('(min-width: 960px)');

  return (
    <div className={desktopDevice && alsoDesktopDevice ? 'bodyContainer' : 'mobileBodyContainer'}>
        <NavBarComponent />
        <ProductsComponent />
    </div>
  )
}

export default BodyComponent;
