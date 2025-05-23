import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../sidebar';
import Header from '../header';
import Loader from '../common/loader/Loading';
import '../../pages/dashboard/styles.scss';

const DefaultLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate API delay
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="dashboard d-flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content d-flex flex-column flex-grow-1">
        <Header toggleSidebar={toggleSidebar} />
        <Container fluid className="content-wrapper p-0 mt-3 mb-4">
          {children}
        </Container>
      </div>
    </div>
  );
};

export default DefaultLayout;
