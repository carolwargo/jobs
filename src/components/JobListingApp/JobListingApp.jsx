import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobListingApp.css';
import SearchBar from '../SearchBar';
import FilterPanel from '../FilterPanel';
import JobCard from '../JobCard';
import JobDetails from '../JobDetails';
import jobListings from '../../data/jobListings';

const JobListingApp = () => {
  const [jobs] = useState(jobListings);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
  });
  const [selectedJobId, setSelectedJobId] = useState(null); // Track selected job for large screens

  const filteredJobs = jobs.filter((job) => {
    const matchesQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesLocation = filters.location ? job.location.includes(filters.location) : true;
    return matchesQuery && matchesJobType && matchesLocation;
  });

  const selectedJob = selectedJobId
    ? jobs.find((j) => j.id === selectedJobId)
    : null;

  return (
    <div className="w3-container w3-padding-small">
      <h2 className="w3-center w3-margin-top">Job Listings</h2>
      <div className="row">
        {/* Column 1: Job List (full width on mobile, half on large screens) */}
        <div className="col-md-6">
          <div className="w3-card w3-white w3-round w3-margin p-3">
            <div className="d-flex flex-column my-3">
              <h3 className="w3-start">Search and Filter</h3> 
              <p className='mb-3 opacity-50'><i> "Type keywords in search bar below, and use filters to further narrow focus."</i></p>
            
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          </div>
          <div className="job-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onViewDetails={() => setSelectedJobId(job.id)}
                  isSelected={job.id === selectedJobId}
                />
              ))
            ) : (
              <p className="w3-center w3-text-grey">No jobs found matching your criteria.</p>
            )}
          </div>
        </div>
        {/* Column 2: Job Details (hidden on mobile, half on large screens) */}
        <div className="col-md-6 d-none d-md-block">
          <div className="job-details-container w3-margin">
 {selectedJob || (window.innerWidth >= 768 && filteredJobs.length > 0) ? (
  <JobDetails
    job={selectedJob || filteredJobs[0]} // Use selected job or first job as default
    onClose={() => setSelectedJobId(null)}
  />
) : (
  <div className="w3-card w3-white w3-round w3-margin p-3">
    <p className="w3-center w3-text-grey">
      Select a job to view details.
    </p>
  </div>
)}

          </div>
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