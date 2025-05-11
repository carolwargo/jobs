import { useParams } from 'react-router-dom';
import jobListings from '../data/jobListings';

const JobDetails = () => {
  const { id } = useParams();
  const job = jobListings.find((j) => j.id === parseInt(id));

  if (!job) {
    return <div className="w3-center w3-padding">Job not found.</div>;
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