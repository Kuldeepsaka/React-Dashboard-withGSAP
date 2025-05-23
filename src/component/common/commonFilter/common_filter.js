import React from 'react';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './style.scss';

const CommonFilter = ({
  searchPlaceholder = 'Search...',
  searchValue,
  onSearchChange,
  filters = [],
  className = '', // Custom class for main container
  inputClassName = '', // Custom class for search input
}) => {
  return (
    <div className={`common-filter d-flex gap-2 ${className}`}>
      {/* Search Input */}
      <div className="search-box w-100 position-relative">
        <FaSearch className="search-icon" />
        <Form.Control
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`filter-input ${inputClassName}`} // Apply custom class to input
        />
      </div>

      {/* Dynamic Filters (Dropdowns) */}
      {filters.map((filter, index) => (
        <DropdownButton
          key={index}
          id={`dropdown-${filter.label}`}
          title={`${filter.label}: ${filter.selected}`}
          onSelect={(value) => filter.onChange(value)}
          className={`filter-dropdown ${filter.className || ''}`} // Support individual custom classes
        >
          {filter.options.map((option, i) => (
            <Dropdown.Item key={i} eventKey={option}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      ))}
    </div>
  );
};

export default CommonFilter;
