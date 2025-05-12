// ./components/JobCard.jsx

import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'; // Optional
import 'bootstrap/dist/css/bootstrap.min.css';

const JobCard = ({ job, onViewDetails, isSelected }) => {
  const navigate = useNavigate();
  // Option 1: Use useMediaQuery (recommended)
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // Option 2: Re-evaluate window.innerWidth on click (if not using react-responsive)
  // const isMobile = () => window.innerWidth < 768;

  const handleClick = () => {
    console.log('Handle click:', { isMobile, jobId: job.id }); // Debug
    if (isMobile) {
      console.log('Navigating to:', `/jobs/${job.id}`);
      navigate(`/jobs/${job.id}`); // Navigate on mobile
    } else {
      console.log('Showing inline details for job:', job.id);
      onViewDetails(); // Show inline details on large screens
    }
  };

  return (
    <div
      className={`w3-card w3-white w3-round w3-margin p-4 ${
        isSelected ? 'job-card-selected' : ''
      }`}
    >
 <h2>{job.title}</h2>
         <div className="d-flex align-items-center mb-2">
  {job.posterImage && (
    <img
      src={job.posterImage}
      alt={`${job.company} poster`}
      className="me-2 rounded-circle"
      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
    />
  )}
    <p className="w3-text-grey">{job.company}</p>
</div>

      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Type:</strong> {job.jobType}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Description:</strong> {job.description}</p>
      <button
        className="btn btn-dark w3-margin-top"
        onClick={handleClick}
        aria-label={`View details for ${job.title}`}
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;