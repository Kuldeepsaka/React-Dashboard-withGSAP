import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import ToggleSwitch from './common/switch/common_switch';
import './sidebar.scss'; // Import SCSS file
import CommonButton from './common/common_button/button';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [radioValue, setRadioValue] = useState('2');

  const radios = [
    { name: 'Investor', value: '1', icon: '/images/investor.svg' },
    { name: 'Issuer', value: '2', icon: '/images/issuer.svg' },
  ];

  const defaultPath = '/coming-soon'; // Placeholder for pages not yet built

  const menuItems = [
    { icon: '/icons/dashboard.svg', label: 'Dashboard', path: '/' },
    { icon: '/icons/offering.svg', label: 'Offerings', path: '/offerings' },
    {
      icon: '/icons/offering.svg',
      label: 'Landing Page',
      path: '/landingPage',
    },

    { icon: '/icons/cap.svg', label: 'Cap table', path: defaultPath },
    { icon: '/icons/wallet.svg', label: 'Wallet whitelist', path: defaultPath },
    {
      icon: '/icons/subscription.svg',
      label: 'Subscription orders',
      path: defaultPath,
    },
    {
      icon: '/icons/redemptions.svg',
      label: 'Redemption orders',
      path: defaultPath,
    },
    { icon: '/icons/divdend.svg', label: 'Dividends', path: defaultPath },
    {
      icon: '/icons/transfer.svg',
      label: 'Transfer journal',
      path: defaultPath,
    },
    { icon: '/icons/proposal.svg', label: 'Proposal', path: defaultPath },
    {
      icon: '/icons/transaction.svg',
      label: 'Transactions',
      path: defaultPath,
    },
    { icon: '/icons/setting.svg', label: 'Settings', path: defaultPath },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <img src="/images/Logo.svg" alt="Logo" width="156" height="20" />
        {/* Close Button for Small Screens */}
        <button className="close-sidebar d-lg-none" onClick={toggleSidebar}>
          ✖
        </button>
      </div>

      {/* Toggle Switch with Icons */}
      <div className="sidebar_content">
        <div className="toggle-switch">
          <ToggleSwitch
            name="sidebar-switch"
            options={radios}
            selectedValue={radioValue}
            onChange={setRadioValue}
          />
        </div>

        {/* Navigation - Pushes Logout Button to Bottom */}
        <nav className="menu flex-grow-1 mt-3">
          <ListGroup className="bg-transparent">
            {menuItems.map((item, index) => (
              <ListGroup.Item
                key={index}
                action
                className="p-0 border-0 menu-item"
              >
                <NavLink
                  to={item.path}
                  className="d-flex align-items-center text-decoration-none w-100"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {item.label}
                </NavLink>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </nav>

        {/* Logout Button */}
        <div className="logout-button">
          <CommonButton text="Logout" size="lg" className="my-3 w-100 btn" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
