import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(name, email, password);
      navigate('/newsfeed');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w3-container">
      <div className="w3-card w3-white w3-round w3-margin px-3 py-2 w3-col m6 offset-m3">
        <h2 className="w3-center">Register</h2>
        {error && <p className="w3-text-red w3-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="w3-margin-bottom">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control w3-round"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Full name"
            />
          </div>
          <div className="w3-margin-bottom">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control w3-round"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
          </div>
          <div className="w3-margin-bottom">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control w3-round"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>
          <button type="submit" className="btn btn-dark w3-block">
            Register
          </button>
        </form>
        <p className="w3-center w3-margin-top">
          Already have an account?{' '}
          <a href="/auth/login" className="w3-text-blue">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;