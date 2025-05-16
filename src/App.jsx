import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AuthProvider } from './context/AuthProvider';

// Shared layout components
import AppBar from './components/Nav/AppBar';
import BottomAppBar from './components/Nav/BottomAppBar';

// Public pages
import JobListingApp from './components/JobListingApp/JobListingApp';
import JobDetails from './components/JobsComponents/JobDetails';
import Newsfeed from './Newsfeed';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

// Dashboard pages
import Dashboard from './pages/Dashboard/Dashboard';
import Tracker from './components/DashboardComponents/Tracker';
import Assessment from './components/DashboardComponents/Assessment';
import Analytics from './components/DashboardComponents/Analytics';
import Sales from './components/DashboardComponents/reports/Sales';
import Insights from './components/DashboardComponents/reports/Insights';
import Traffic from './components/DashboardComponents/reports/Traffic';
import Roadmap from './components/DashboardComponents/Roadmap'; // Import the Roadmap component 
function LayoutWrapper() {
  const location = useLocation();

  // Hide AppBar/BottomAppBar for full-page dashboard view
  const hideBars = location.pathname.startsWith('/dashboard');

  return (
    <div className="w3-theme-l5">
      {!hideBars && <AppBar />}
      <Routes>
        <Route path="/" element={<JobListingApp />} />
        <Route path="/jobs">
          <Route index element={<JobListingApp />} />
          <Route path=":id" element={<JobDetails />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/profile" element={<Profile />} />

        {/* Dashboard Overview */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roadmap" element={<Roadmap />} /> {/* Add the Roadmap route */}
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports/sales" element={<Sales />} />
        <Route path="/reports/traffic" element={<Traffic />} />
        <Route path="/reports/insights" element={<Insights />} />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideBars && <BottomAppBar />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router basename="/jobs">
        <LayoutWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;



/*import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AuthProvider } from './context/AuthProvider';

Shared layout components
import AppBar from './components/Nav/AppBar';
import BottomAppBar from './components/Nav/BottomAppBar';

Public pages
import JobListingApp from './components/JobListingApp/JobListingApp';
import JobDetails from './components/JobDetails';
import Newsfeed from './Newsfeed';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';

Dashboard pages
import Dashboard from './pages/Dashboard/Dashboard';
import Tracker from './components/DashboardComponents/Tracker';
import Assessment from './components/DashboardComponents/Assessment';
import Analytics from './components/DashboardComponents/Analytics';
import Sales from './components/DashboardComponents/reports/Sales';
import Insights from './components/DashboardComponents/reports/Insights';
import Traffic from './components/DashboardComponents/reports/Traffic';

function LayoutWrapper() {
  const location = useLocation();

  // Hide AppBar/BottomAppBar for full-page dashboard view
  const hideBars = location.pathname.startsWith('/dashboard');

  return (
    <div className="w3-theme-l5">
      {!hideBars && <AppBar />}
      <Routes>
        <Route path="/" element={<JobListingApp />} />
        <Route path="/jobs">
          <Route index element={<JobListingApp />} />
          <Route path=":id" element={<JobDetails />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

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


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tracker"
          element={
            <ProtectedRoute>
              <Tracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assessment"
          element={
            <ProtectedRoute>
              <Assessment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports/traffic"
          element={
            <ProtectedRoute>
              <Traffic />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports/insights"
          element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          }
        />

     
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideBars && <BottomAppBar />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router basename="/jobs">
        <LayoutWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;
*/



/**
 * 
 */
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