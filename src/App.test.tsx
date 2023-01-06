import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ReportPage from './reports/ReportPage';
import ReportEditPage from './reports/ReportEditPage';
import ReportDetailPage from './reports/ReportDetailPage';

test('Renders Sonar Client for MANTA page', () => {
  render(<HashRouter>
      <Routes>
          <Route path="/" element={<App />} />
      </Routes>
  </HashRouter>);
  const element = screen.getByText(/Sonar client for MANTA/i);
  expect(element).toBeInTheDocument();
});
