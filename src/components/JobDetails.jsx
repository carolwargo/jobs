import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jobListings from '../data/jobListings';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
      } catch (err) {
        console.error('Error fetching job:', err);
        setError('Failed to load job details.');
        // Fallback to dummy data
        const dummyJob = jobListings.find((j) => j.id === parseInt(id));
        if (dummyJob) {
          setJob(dummyJob);
          setError(null);
        }
      }
    };
    fetchJob();
  }, [id]);

  if (error) {
    return <div className="w3-center w3-text-red">{error}</div>;
  }

  if (!job) {
    return <div className="w3-center w3-padding">Loading...</div>;
  }

  return (
    <div className="w3-container">
      <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
        <h2>{job.title}</h2>
        <p className="w3-text-grey">{job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Job Type:</strong> {job.jobType}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p className="w3-text-grey w3-small">Posted: {job.postedDate}</p>
        <button className="btn btn-dark w3-margin-top">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;