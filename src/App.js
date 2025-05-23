import './App.css';
import './scrollbar.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import OfferingPage from './pages/offering/offeringPage';
import ComingSoon from './pages/coming-soon/comingSoon';
import Landingpage from './pages/landingPage/landingpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/offerings" element={<OfferingPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="landingPage" element={<Landingpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
