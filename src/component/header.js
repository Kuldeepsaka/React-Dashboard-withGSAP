import React from 'react';
import CommonButton from './common/common_button/button';
import './header.scss'; // Import SCSS file
// import GsapAnimation from './gsap/gsap';
import TypingAnimation from './common/typingAnimation/type';
import { BsList } from 'react-icons/bs'; // Import toggle icon

const Header = ({ toggleSidebar }) => {
  return (
    <header className="border-0 dashboard-header d-flex flex-wrap justify-content-between align-items-center p-3 px-0">
      <div className="left-section d-flex align-items-center">
        {/* Sidebar Toggle Button for Small Screens */}
        <button
          className="sidebar-toggle-btn d-lg-none me-3"
          onClick={toggleSidebar}
        >
          <BsList size={28} />
        </button>
        <img src="/images/Offering.svg" alt="Offerings" className="me-2" />
        {/* <GsapAnimation> */}
        <TypingAnimation text="Offerings" speed={130}>
          <h2 className="mb-0">Offerings</h2>
        </TypingAnimation>
        {/* </GsapAnimation> */}
      </div>

      <div className="right-section d-flex flex-wrap align-items-center">
        <CommonButton
          text="0x526...BDFFF"
          className="wallet-button me-3"
          icon="/images/Metamask.svg"
          onClick={() => console.log('Wallet button clicked!')}
        />
        <img src="/icons/Theme.svg" alt="theme" className="me-2" />{' '}
        <img src="/icons/user.svg" alt="user" className="" />{' '}
      </div>
    </header>
  );
};

export default Header;
