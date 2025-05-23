import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './loader.scss';

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1.5, ease: 'power2.inOut' },
    });

    tl.to('.circle', { scale: 1.5, opacity: 0 }).to('.circle', {
      scale: 1,
      opacity: 1,
    });

    setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2500); // Loading duration

    return () => tl.kill();
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className="loader">
      <div className="loader-content d-flex justify-content-center gap-3 align-items-center">
        <div className="circle"></div>
        <img src="/images/Logo.svg" alt="Logo" width="156" height="20" />

        {/* <h2 className="loading-text">Loading...</h2> */}
      </div>
    </div>
  );
};

export default Loader;
