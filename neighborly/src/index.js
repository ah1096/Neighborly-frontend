import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login.js';
import UserProfile from './components/UserProfile.js';
import CreateAccount from './components/CreateAccount';
import About from './components/About.js';
import MainPage from './components/MainPage.js';
import ExchangePage from './components/ExchangePage.js';
import SocialPage from './components/SocialPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<CreateAccount />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="main" element={<MainPage />} />
          <Route path="exchange" element={<ExchangePage />} />
          <Route path="social" element={<SocialPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
