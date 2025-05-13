import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './context/AuthProvider';
// No change needed for AuthProvider import
import Header from './Header/Header';
import JobListingApp from './components/JobListingApp/JobListingApp';
import JobDetails from './components/JobDetails';
import Newsfeed from './Newsfeed';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import BottomAppBar from './components/Nav/BottomAppBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="w3-theme-l5">
          <Header />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<JobListingApp />} />
            <Route path="/jobs">
              <Route index element={<JobListingApp />} />
              <Route path=":id" element={<JobDetails />} />
            </Route>
            <Route path="/auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Protected routes */}
            <Route
              path="/newsfeed"
              element={
                <ProtectedRoute>
                  <Newsfeed />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Fallback for unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomAppBar />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
/*

beauty-jobs/
├── src/
│   ├── components/
│   │   ├── JobListingApp.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── NotFound.jsx
│   │   └── JobListingApp.css
│   ├── context/
│   │   └── AuthContext.js
│   ├── data/
│   │   ├── jobListings.js
│   │   └── users.js
│   ├── Header/
│   │   └── Header.jsx
│   ├── assets/
│   │   └── images/
│   │       └── GirlCamera.png
│   ├── Newsfeed.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── public/
    ├── index.html
    └── favicon.ico

*/



/*
src/
├── components/
│   ├── JobListingApp.jsx
│   ├── SearchBar.jsx
│   ├── FilterPanel.jsx
│   ├── JobCard.jsx
│   └── JobListingApp.css
├── data/
│   └── jobListings.js
├── Header/
│   └── Header.jsx
└── Newsfeed.jsx
*/


/*
https://x.com/i/grok/share/mKDdx0GXcwbGJY62sX8FLniTO
*/