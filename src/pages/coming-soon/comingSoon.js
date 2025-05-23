import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import CommonButton from '../../component/common/common_button/button';

const ComingSoon = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <FaClock size={80} className="text-white mb-3 animate-spin" />
      <h1 className="mb-3">Coming Soon</h1>
      <p>We're working on something awesome. Stay tuned!</p>
      <NavLink to="/" className="text-decoration-none">
        <CommonButton
          text="Back to Dashboard"
          className="mt-auto offering-btn"
          style={{
            padding: '15px 80px',
            borderColor: '#00B3B5',
            background: '#00B3B533',
            fontSize: '16px',
          }}
        />
      </NavLink>
    </Container>
  );
};

export default ComingSoon;
