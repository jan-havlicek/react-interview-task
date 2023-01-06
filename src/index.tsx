import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './shared/store/store';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ReportPage from './reports/ReportPage';
import ReportEditPage from './reports/ReportEditPage';
import ReportDetailPage from './reports/ReportDetailPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/report" element={<ReportPage />}>
                      <Route path="add" element={<ReportEditPage />} />
                      <Route path=":id" element={<ReportDetailPage />} />
                      <Route path="edit/:id" element={<ReportEditPage />} />
                  </Route>
              </Routes>
          </HashRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
