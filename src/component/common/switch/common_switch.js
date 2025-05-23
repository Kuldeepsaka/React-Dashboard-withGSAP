import React, { useEffect, useRef } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import gsap from 'gsap';
import './common_switch.scss'; // Custom styles

const ToggleSwitch = ({
  name,
  options,
  selectedValue,
  onChange,
  className = '',
}) => {
  const switchRef = useRef(null);

  useEffect(() => {
    if (switchRef.current) {
      gsap.fromTo(
        switchRef.current.querySelector('.active'),
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
      );
    }
  }, [selectedValue]); // Runs when selectedValue changes

  return (
    <ButtonGroup ref={switchRef} className={`d-flex switch-btn ${className}`}>
      {options.map((option, idx) => (
        <ToggleButton
          key={idx}
          id={`${name}-radio-${idx}`} // Unique ID
          type="radio"
          variant="outline-primary"
          name={name} // UNIQUE NAME
          value={String(option.value)}
          checked={String(selectedValue) === String(option.value)}
          onChange={(e) => onChange(e.currentTarget.value)}
          className={`d-flex align-items-center custom-toggle ${
            String(selectedValue) === String(option.value) ? 'active' : ''
          }`}
        >
          {option.icon && (
            <img
              src={option.icon}
              alt={option.name}
              width="20"
              height="20"
              className="me-2"
            />
          )}
          {option.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ToggleSwitch;
