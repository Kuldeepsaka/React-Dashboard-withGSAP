import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const logoImage =
  'https://png.pngtree.com/png-clipart/20210808/original/pngtree-abstract-vector-png-image_6611630.jpg';
const Logo = () => {
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.from(logoRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className="logo-container">
      <img ref={logoRef} src={logoImage} alt="Logo" width="50" height="50" />
    </div>
  );
};

export default Logo;
