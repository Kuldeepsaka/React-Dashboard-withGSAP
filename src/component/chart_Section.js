import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  CardTitle,
  Form,
  Image,
  ListGroup,
  Nav,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import ToggleSwitch from './common/switch/common_switch';
import OfferingsTable from './offeringData';
import CommonButton from './common/common_button/button';
import './chart_section.scss';
// import GsapAnimation from './gsap/gsap';
import gsap from 'gsap';

const ChartSection = () => {
  // gSAP Usage
  const navItemsRef = useRef([]);
  const navListing = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      navItemsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15, // Delay between each item
        ease: 'power3.out',
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navListing.current,
      { opacity: 0, y: -20 }, // Start position (slightly above)
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.5, // Delay between each item
        ease: 'power3.out',
      }
    );
  }, []);

  const stats = [
    { value: '284+', label: 'Total AUM of the funds' },
    { value: '$1,228', label: 'Total fund raised' },
    { value: '4,554', label: 'Total Investors' },
  ];

  const [offer, setOffer] = useState('3');

  const offering = [
    { name: 'Investor', value: '3' },
    { name: 'AUM', value: '4' },
  ];

  const offeringsData = [
    { name: 'plogo', progress: 80, views: '10M' },
    { name: 'clogo', progress: 40, views: '5M' },
    { name: 'amara', progress: 30, views: '3M' },
    { name: 'hooks', progress: 20, views: '2M' },
    { name: 'rediyal', progress: 10, views: '1M' },
  ];

  return (
    <>
      {/* Statistics Cards with Scroll Animation */}
      <Row>
        {stats.map((stat, index) => (
          <div
            key={index} // ✅ Unique key added
            animation="bounce"
            delay={0.5}
            staggerIndex={index} // ✅ Each column will show one after another
            stagger={0.1} // ✅ Set stagger time between columns
            className="mb-3 col-xl-4 col-md-6 col-lg-6 col-sm-12"
          >
            {/* <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }} // Repeats on scroll
            > */}
            <Card className="h-100">
              <Card.Body className="p-0">
                <div className="stats-card d-flex align-items-center">
                  <div className="stats-text text-start">
                    <h6 className="stat-value mb-0 w-100">{stat.value}</h6>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                  <div className="stats-icon ms-auto p-2">
                    <img
                      src="/images/lines.svg"
                      alt="Offerings"
                      className="me-2"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            {/* </motion.div> */}
          </div>
        ))}
      </Row>

      {/* Chart and Offerings */}
      <Row className="align-items-stretch">
        <motion.div
          className="col-md-12 col-xl-7 col-sm-12 mb-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Card className="chart-card w-100 h-100">
            <Card.Body className="p-0 d-flex flex-column">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="char-section gap-2 d-flex">
                  <label>Offering: </label>
                  <Form.Select size="sm" className="custom-select">
                    <option>Lorem Offering</option>
                  </Form.Select>
                </div>
                <div className="ms-auto">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/home"
                    className="custom-nav-pills"
                  >
                    {['1M', '2M', '3M', 'Monthly', 'Yearly'].map(
                      (label, index) => (
                        <Nav.Item
                          key={`nav-item-${index}`} // ✅ Unique key
                          ref={(el) => (navItemsRef.current[index] = el)}
                        >
                          <Nav.Link eventKey={`link-${index}`}>
                            {label}
                          </Nav.Link>
                        </Nav.Item>
                      )
                    )}
                  </Nav>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="col-12 mt-3">
                <Image src="/images/chart.svg" alt="Chart" fluid />
              </div>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Offerings Section */}
        <motion.div
          className="col-md-12 col-xl-5 col-sm-12 mb-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Card className="w-100 h-100">
            <Card.Body className="p-0 d-flex flex-column">
              <CardTitle className="text-start d-flex flex-wrap align-items-center m-0 mb-3 justify-content-between">
                <h4 className="offering-title m-0">Top 5 Offerings</h4>
                <div className="offering-switch">
                  <ToggleSwitch
                    name="offering-switch"
                    options={offering}
                    selectedValue={offer}
                    onChange={(value) => setOffer(value)}
                    className="status-switch"
                  />
                </div>
              </CardTitle>
              <Row className="flex-grow-1">
                <ListGroup className="w-100">
                  {offeringsData.map((offering, index) => (
                    <ListGroup.Item
                      key={`offering-${index}`} // ✅ Unique key
                      ref={(el) => (navListing.current[index] = el)}
                      className="bg-transparent d-flex gap-2 justify-content-between border-0 text-white p-3 align-items-center"
                    >
                      <div className="d-flex gap-2 align-items-center">
                        <img
                          src={`/images/${offering.name.toLowerCase()}.svg`}
                          alt={offering.name}
                          width={66}
                          height={16}
                        />
                      </div>
                      <div className="col">
                        <ProgressBar
                          variant="warning"
                          now={offering.progress}
                          className="custom-progress"
                        />
                      </div>
                      <div className="col-auto views">{offering.views}</div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Row>

      {/* Recent Offerings Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Row>
          <div className="dashboard-header border-0 d-flex justify-content-between align-items-center pt-0 p-3">
            <div className="left-section d-flex align-items-center">
              <h6 className="mb-0">Recent Offerings</h6>
            </div>
            <div className="right-section d-flex align-items-center">
              <CommonButton
                text="View All"
                className="common-button"
                onClick={() => alert('button clicked!')}
                style={{
                  background: 'none',
                  color: '#00B3B5',
                  border: 'none',
                  padding: '0',
                }}
              />
            </div>
          </div>
        </Row>
      </motion.div>

      {/* Offerings Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Row>
          <OfferingsTable />
        </Row>
      </motion.div>
    </>
  );
};

export default ChartSection;
