import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
      <h3>{job.title}</h3>
      <p className="w3-text-grey">{job.company}</p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Job Type:</strong> {job.jobType}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
      <p>{job.description}</p>
      <p className="w3-text-grey w3-small">Posted: {job.postedDate}</p>
      <button className="btn btn-dark w3-margin-top">Apply Now</button>
    </div>
  );
};

export default JobCard;