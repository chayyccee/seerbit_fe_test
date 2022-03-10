import React from 'react';

// hooks
import { useMedia, useDesktopMedia } from '../hooks/ResponsiveHooks';

// stylesheet
import './footerComponent.css';

const FooterComponent: React.FC = () => {
    const desktopDevice: boolean = useDesktopMedia();
    const alsoDesktopDevice: boolean = useMedia('(min-width: 960px)');

  return (
    <footer
      className={desktopDevice && alsoDesktopDevice ? 'footerContainer' : 'footerMobileContainer'}
    >
        <div
          className={desktopDevice && alsoDesktopDevice ? 'footer__text__logo' : 'footer__text__logo__mobile'}
        >
          SEERBIT ®
        </div>
        <div
          className={desktopDevice && alsoDesktopDevice ? 'footer__middle__text' : 'footer__middle__text__mobile'}
        >
          Shop   /   Info   /   Service   /   Contact   /   Privacy Policy
        </div>
        <div
          className={desktopDevice && alsoDesktopDevice ? 'footer__right__text' : 'footer__right__text__mobile'}
        >
          Fb   /   In   /   Yt   /   Tw
        </div>
    </footer>
  )
}

export default FooterComponent;
