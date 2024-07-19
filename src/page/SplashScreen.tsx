import React, { FunctionComponent, useEffect, useState } from 'react';
import './SplashScreen.css';
import { EuiImage } from '@elastic/eui';

const SplashScreen:FunctionComponent<{onTimeout:any}> = ({
    onTimeout
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
      const timer = setTimeout(() => {
        onTimeout();
      }, 1500);
  
      return () => clearTimeout(timer);
    }, [onTimeout]);

  return (
    <div className="splash-screen">
      <div className={`content ${visible ? 'visible' : ''}`}>
        <EuiImage className='logo' src='/logo_new.png' alt='logo' style={{width:'auto',height:'20vh'}}/>
        <p>INNOVATION MEETS IMAGINATION</p>
      </div>
    </div>
  );
};

export default SplashScreen;
