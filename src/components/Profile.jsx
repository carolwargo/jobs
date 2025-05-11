import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import jobListings from '../data/jobListings';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <div className="w3-center w3-padding">Loading...</div>;
  }

  const appliedJobs = jobListings.filter((job) => user.appliedJobs.includes(job.id));

  return (
    <div className="w3-container">
      <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
        <h2>Welcome, {user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Applied Jobs:</strong></p>
        {appliedJobs.length > 0 ? (
          <ul>
            {appliedJobs.map((job) => (
              <li key={job.id}>{job.title} at {job.company}</li>
            ))}
          </ul>
        ) : (
          <p>No jobs applied yet.</p>
        )}
        <button
          className="btn btn-dark w3-margin-top"
          onClick={() => {
            logout();
            window.location.href = '/auth/login';
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;