import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import ReceptionDashboard from './components/ReceptionDashboard.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/reception-dashboard" element={<ReceptionDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
