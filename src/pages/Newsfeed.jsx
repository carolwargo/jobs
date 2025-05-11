import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobListingApp from './components/JobListingApp';
import Header from './Header/Header';

const Newsfeed = () => {
  return (
    <div className="w3-theme-l5">
      <div className="w3-container">
        <Header />
        <JobListingApp />
      </div>
    </div>
  );
};

export default Newsfeed;