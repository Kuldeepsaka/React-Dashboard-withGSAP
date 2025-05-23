import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import CommonTable from './common/table/common_table';
import CommonButton from './common/common_button/button';

const offeringsData = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    code: '#84526398745',
    users: 100,
    countries: 1,
    ticker: 'Ubiquitous',
    startDate: 'Jan 05, 2024 | 05:20 PM',
    endDate: 'Jan 05, 2024 | 05:20 PM',
    status: 'Draft',
  },
  {
    id: 2,
    name: 'Dolor Sit',
    code: '#98745632123',
    users: 250,
    countries: 3,
    ticker: 'XYZ',
    startDate: 'Feb 10, 2024 | 10:30 AM',
    endDate: 'Feb 20, 2024 | 11:15 AM',
    status: 'Closed',
  },
];

const columns = [
  { label: 'OFFERING NAME', key: 'name' },
  { label: 'OFFERING TYPE', key: 'code' },
  { label: 'USERS', key: 'users' },
  { label: 'COUNTRIES', key: 'countries' },
  { label: 'TICKER', key: 'ticker' },
  { label: 'DATE', key: 'startDate' },
  { label: 'STATUS', key: 'status' },
  { label: 'ACTION', key: 'action' },
];

const OfferingsTable = () => {
  return (
    <div className="col-md-12">
      <Card className="p-0">
        <CommonTable
          columns={columns}
          className="table-dark m-0 border-0"
          data={offeringsData}
          sortableColumns={['name']} // Enable sorting for selected columns
          renderRow={(offering, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <div className="table-icon">
                    <img
                      src="/icons/Ellipse.svg"
                      alt="Avatar"
                      className="rounded-circle"
                      width="38"
                      height="38"
                    />
                  </div>
                  <div>
                    <strong>{offering.name}</strong>
                    <br />
                    <span>{offering.code}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="pt-2">-- --</span>
              </td>
              <td>
                <span className="d-flex pt-2  align-items-center">
                  <div className="overlap-img">
                    <img
                      src="/icons/user1.svg"
                      alt="User"
                      className="rounded-circle me-1"
                      width="20"
                      height="20"
                    />
                    <img
                      src="/icons/user.svg"
                      alt="User"
                      className="rounded-circle me-1"
                      width="20"
                      height="20"
                    />
                  </div>
                  <h6 className="m-0">+{offering.users}</h6>
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center pt-2 justify-content-center">
                  <img
                    src="/icons/Map.svg"
                    alt="User"
                    className="rounded-circle me-1"
                    width="20"
                    height="20"
                  />{' '}
                  <h6 className="m-0 country"> {offering.countries} Country</h6>
                </div>
              </td>
              <td>
                <h5 className="m-0 pt-2">{offering.ticker}</h5>
              </td>
              <td>
                <small>
                  <h5 className="m-0">
                    Start: <span>{offering.startDate} </span>
                    <br />
                    End: <span>{offering.endDate}</span>
                  </h5>
                </small>
              </td>
              <td>
                <div className="pt-2">
                  {offering.status === 'Draft' ? (
                    <h5 className="text-warning m-0">
                      Draft{' '}
                      <img
                        src="/icons/Pen.svg"
                        alt="Pen"
                        className="rounded-circle me-1"
                        width="15"
                        height="15"
                      />
                    </h5>
                  ) : (
                    <h5 className="text-danger">Closed</h5>
                  )}
                </div>
              </td>
              <td>
                <div className="d-flex gap-2 align-items-center">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="table_action"
                  >
                    <FaTrash />
                  </Button>
                  {offering.status === 'Closed' && (
                    <CommonButton
                      text="Make it Public"
                      variant="info"
                      className="make-public"
                      onClick={() => alert('button clicked!')}
                      style={{
                        background: '#F9861E33',
                        color: '#fff',
                        borderColor: '#F29339',
                      }}
                    />
                  )}
                  <CommonButton
                    text="Claim"
                    variant="info"
                    className="claim"
                    onClick={() => alert('button clicked!')}
                    style={{
                      borderColor: '#00B3B5',
                      background: '#00B3B533',
                    }}
                  />
                </div>
              </td>
            </tr>
          )}
        />
      </Card>
    </div>
  );
};

export default OfferingsTable;
