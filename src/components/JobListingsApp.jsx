import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobListingApp.css';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import JobCard from './JobCard';
import jobListings from '../data/jobListings';

const JobListingApp = () => {
  const [jobs, setJobs] = useState(jobListings);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
  });

  // Placeholder for future backend API call
  useEffect(() => {
    // Example: Fetch jobs from backend
    // const fetchJobs = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:5000/api/jobs');
    //     setJobs(response.data);
    //   } catch (error) {
    //     console.error('Error fetching jobs:', error);
    //   }
    // };
    // fetchJobs();
    setJobs(jobListings); // Use dummy data for now
  }, []);

  // Filter jobs based on search query and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesLocation = filters.location ? job.location.includes(filters.location) : true;
    return matchesQuery && matchesJobType && matchesLocation;
  });

  return (
    <div className="w3-theme-l5">
      <div className="w3-container">
        <h2 className="w3-center w3-margin-top">Beauty Professionals Job Listings</h2>
        <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
          <div className="d-flex flex-column my-3">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterPanel filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="job-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="w3-center w3-text-grey">No jobs found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListingApp;


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobListingApp.css';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import JobCard from './JobCard';
import jobListings from '../data/jobListings';

const JobListingApp = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs. Showing sample data.');
        setJobs(jobListings); // Fallback to dummy data
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesLocation = filters.location ? job.location.includes(filters.location) : true;
    return matchesQuery && matchesJobType && matchesLocation;
  });

  return (
    <div className="w3-container">
      <h2 className="w3-center w3-margin-top">Beauty Professionals Job Listings</h2>
      {error && <p className="w3-text-red w3-center">{error}</p>}
      <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
        <div className="d-flex flex-column my-3">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="w3-center w3-text-grey">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default JobListingApp;
*/