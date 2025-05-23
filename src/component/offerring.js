import React, { useState } from 'react';
import { Card, CardTitle } from 'react-bootstrap';
import CommonFilter from './common/commonFilter/common_filter';
import CommonButton from './common/common_button/button';

const Offerring = () => {
  const [search, setSearch] = useState('');
  const statusText = 'Active';

  return (
    <Card className="offerings-card h-100 d-flex flex-column">
      <CardTitle className="text-start pb-3">All Offerings</CardTitle>
      <Card.Body className="d-flex flex-column p-0 h-100">
        <CommonFilter
          searchPlaceholder="Search..."
          searchValue={search}
          onSearchChange={setSearch}
          className="custom-input-ui"
        />

        {/* Offerings List - Scrollable */}
        <div className="flex-grow-1 overflow-auto">
          <ul className="list-group">
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="list-group-item border-0 bg-transparent py-3 p-0 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="badge-icon">
                    <img src="/icons/offeringicon.svg" alt="Offerings" />
                  </div>
                  <div className="me-2 text-start">
                    <h5 className="mb-0 d-flex gap-2 text-white">
                      Offerings
                      <span
                        className="badge badge-rounded-pill"
                        style={{ backgroundColor: '#a472f7' }}
                      >
                        <img src="/icons/chain.svg" alt="Offerings" />
                      </span>
                    </h5>
                    <div
                      className={`col-12 status ${
                        statusText === 'Active' ? 'active' : 'paused'
                      }`}
                    >
                      <span
                        className={
                          statusText === 'Active'
                            ? 'active-badge'
                            : 'pause-badge'
                        }
                      ></span>
                      {statusText}
                    </div>
                  </div>
                </div>
                <div className="ms-auto public-status">Public</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Button stays at the bottom */}

        <CommonButton
          text="+ Create Offering"
          className="mt-auto offering-btn"
          onClick={() => console.log('button clicked!')}
        />
      </Card.Body>
    </Card>
  );
};

export default Offerring;
