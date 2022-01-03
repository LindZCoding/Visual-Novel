import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import './App.css';
import FirstPage from './FirstPage';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first-page" element={<FirstPage />} />
      </Routes>
    </Router>
  );
}

export default App;
