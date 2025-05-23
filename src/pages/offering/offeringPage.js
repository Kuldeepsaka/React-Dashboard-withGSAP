import React, { useState } from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import CommonTable from '../../component/common/table/common_table';
import TablePagination from '../../component/pagination';
import CommonButton from '../../component/common/common_button/button';
import CommonFilter from '../../component/common/commonFilter/common_filter';
import { motion } from 'framer-motion';
import DefaultLayout from '../../component/layout/commonLayout';

const offeringsData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Offering ${index + 1}`,
  code: `#84526398745${index + 1}`,
  users: Math.floor(Math.random() * 500),
  countries: Math.floor(Math.random() * 5) + 1,
  ticker: 'Ubiquitous',
  startDate: 'Jan 05, 2024 | 05:20 PM',
  endDate: 'Jan 10, 2024 | 06:00 PM',
  status: index % 2 === 0 ? 'Draft' : 'Closed',
}));

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

const OfferingPage = () => {
  const [search, setSearch] = useState('');
  const [offering, setOffering] = useState('All');
  const [status, setStatus] = useState('All');
  const [offeringType, setOfferingType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(offeringsData.length / rowsPerPage);

  const currentData = offeringsData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <DefaultLayout>
      <Container fluid className="content-wrapper p-0 mt-3">
        <Row>
          <div className="col-sm-12 d-flex mb-3 justify-content-between flex-wrap">
            <motion.div
              className="col d-flex flex-wrap justify-content-start align-item-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }} // Repeats on scroll
            >
              <CommonFilter
                searchPlaceholder="Search by token and order id"
                searchValue={search}
                onSearchChange={setSearch}
                filters={[
                  {
                    label: 'Offering',
                    selected: offering,
                    options: ['All', 'Lorem Offering', 'Custom Offering'],
                    onChange: setOffering,
                  },
                  {
                    label: 'Status',
                    selected: status,
                    options: ['All', 'Open', 'Closed'],
                    onChange: setStatus,
                  },
                  {
                    label: 'Offering Type',
                    selected: offeringType,
                    options: ['All', 'Type 1', 'Type 2'],
                    onChange: setOfferingType,
                  },
                ]}
              />
            </motion.div>
            <motion.div
              className="col d-flex gap-3 flex-wrap justify-content-end align-item-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }} // Repeats on scroll
            >
              <CommonButton
                text="Request for Offering"
                variant="info"
                className="claim"
                onClick={() => alert('button clicked!')}
                style={{
                  padding: '5px 10px 5px 10px',
                  borderColor: '#00B3B5',
                  background: '#00B3B533',
                }}
              />
              <CommonButton
                text="Create Offering"
                variant="info"
                className="claim"
                onClick={() => alert('button clicked!')}
                style={{
                  padding: '5px 10px 5px 10px',
                  borderColor: '#00B3B5',
                  background: '#00B3B533',
                }}
              />

              <CommonButton
                text="Download CSV"
                variant="info"
                className="make-public"
                onClick={() => alert('button clicked!')}
                style={{
                  background: '#F9861E33',
                  color: '#fff',
                  borderColor: '#F29339',
                }}
              />
            </motion.div>
          </div>
          <div className="col-md-12">
            <Card className="p-0">
              <CommonTable
                columns={columns}
                className="table-dark m-0 border-0"
                data={currentData} // ✅ Pass paginated data
                sortableColumns={['name']} // Enable sorting for selected columns
                renderRow={(offering, index) => (
                  <motion.tr
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }} // Adjusts when the animation triggers
                    variants={fadeInUp}
                  >
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
                    <td>-- --</td>
                    <td>
                      <span className="d-flex pt-2 align-items-center">
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
                      <div className="d-flex pt-2 align-items-center justify-content-center">
                        <img
                          src="/icons/Map.svg"
                          alt="User"
                          className="rounded-circle me-1"
                          width="20"
                          height="20"
                        />{' '}
                        <h6 className="m-0 country">
                          {offering.countries} Country
                        </h6>
                      </div>
                    </td>
                    <td>
                      <h5 className="m-0 pt-2 ">{offering.ticker}</h5>
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
                  </motion.tr>
                )}
              />
            </Card>

            {/* ✅ Pagination Rendered Separately */}
            {totalPages > 1 && (
              <TablePagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                totalItems={offeringsData.length}
                currentItems={currentData.length}
              />
            )}
          </div>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default OfferingPage;
