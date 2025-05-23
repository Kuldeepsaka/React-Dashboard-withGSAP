import React, { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import gsap from 'gsap';
import './style.scss';

const CommonButton = ({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = null,
  className = '',
  style = {},
  disabled = false,
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    if (btn) {
      // GSAP Hover In (Slightly Scale Up)
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          // scale: 1.01, // Slightly increase size
          // duration: 0.3,
          ease: 'power2.out',
        });
      });

      // GSAP Hover Out (Reset to Normal)
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          // scale: 1, // Reset size
          // duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  }, []);

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      onClick={onClick}
      className={`d-flex align-items-center justify-content-center common-button  ${className}`}
      disabled={disabled}
      style={style}
    >
      {icon && (
        <img src={icon} alt="icon" width="20" height="20" className="me-2" />
      )}
      {text}
    </Button>
  );
};

export default CommonButton;
