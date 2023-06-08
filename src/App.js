import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/navbar';
import HomePage from './component/homepage';
import Profile from './component/profile';
import Apply from './component/apply';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">Course</a>} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;