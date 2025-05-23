import React from 'react';
import Offerring from '../../component/offerring';
import ChartSection from '../../component/chart_Section';
import { Row, Col } from 'react-bootstrap';
import DefaultLayout from '../../component/layout/commonLayout';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Row className="g-3 align-items-stretch">
        <Col className="d-flex flex-wrap col-xl-9 col-lg-12">
          <div className="w-100">
            <ChartSection />
          </div>
        </Col>

        <Col className="d-flex col-xl-3 col-lg-12">
          <div className="w-100">
            <Offerring />
          </div>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Dashboard;
