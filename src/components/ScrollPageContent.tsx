import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import './ScrollFadeIn.css';

interface ScrollFadeInProps {
  children: React.ReactNode;
  slideFromLeft:boolean,
}

const ScrollFadeIn: FunctionComponent<ScrollFadeInProps> = ({ children,slideFromLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const checkVisibility = () => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  const className = slideFromLeft ? `content-left ${isVisible ? 'visible' : ''}` : `content-right ${isVisible ? 'visible' : ''}`

  return (
    <div ref={contentRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
