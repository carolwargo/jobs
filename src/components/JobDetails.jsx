// ./components/JobDetails.jsx
// ./components/JobDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import jobListings from '../data/jobListings';
import ApplyNowModal from './ApplyNowModal'; // <-- Import it
import { useState } from 'react';

const JobDetails = ({ job: propJob, onClose }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplyModal, setShowApplyModal] = useState(false); // modal state

  const job = propJob || jobListings.find((j) => j.id === parseInt(id));
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!job) return <div className="w3-center w3-padding">Job not found.</div>;

  return (
    <div className={`w3-card w3-white w3-round p-3 ${!propJob ? 'job-details-route' : ''}`}>
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
      <p><strong>Requirements:</strong> {job.requirements}</p>

      {job.requirements && job.requirements.length > 0 && (
        <div className="mt-4">
          <h5 className="fw-bold">Requirements</h5>
          <ul className="requirements-list">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="w3-text-grey w3-small">Posted: {job.postedDate}</p>

      <div className="d-flex gap-2">
        <button
          className="btn btn-dark w3-margin-top w3-small px-3"
          onClick={() => setShowApplyModal(true)}
        >
          Apply Now
        </button>

        <button className="btn btn-dark w3-margin-top w3-small px-3">
          Message <i className="fas fa-message ms-1"></i>
        </button>

        {onClose && (
          <button
            className="btn btn-outline-dark w3-margin-top px-2 w3-small"
            onClick={onClose}
          >
            Close
          </button>
        )}

        {!propJob && isMobile && (
          <button
            className="btn btn-outline-dark w3-margin-top"
            onClick={() => navigate('/jobs')}
          >
            Back
          </button>
        )}
      </div>

      {/* Render modal */}
      <ApplyNowModal open={showApplyModal} onClose={() => setShowApplyModal(false)} />
    </div>
  );
};

export default JobDetails;


/*import { useParams } from 'react-router-dom';
import jobListings from '../data/jobListings';

const JobDetails = ({ job: propJob, onClose }) => {
  const { id } = useParams();
  const job = propJob || jobListings.find((j) => j.id === parseInt(id));

  console.log('JobDetails:', { id, job, propJob, hasOnClose: !!onClose }); // Debug

  if (!job) {
    return <div className="w3-center w3-padding">Job not found.</div>;
  }

  return (
    <div className={`w3-card w3-white w3-round px-3 py-2 ${!propJob ? 'job-details-route' : ''}`}>
      <h2>{job.title}</h2>
      <p className="w3-text-grey">{job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Type:</strong> {job.jobType}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p className="w3-text-grey w3-small">Posted: {job.postedDate}</p>
      <div className="d-flex gap-2">
        <button className="btn btn-dark w3-margin-top">Apply Now</button>
        {onClose && (
          <button
            className="btn btn-outline-dark w3-margin-top"
            onClick={onClose}
            aria-label="Close job details"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
*/