// utils/flattenNavigation.js
export function flattenNavigation(navItems, parentPath = '') {
  const routes = [];

  navItems.forEach((item) => {
    if (item.segment) {
      const fullPath = `${parentPath}/${item.segment}`.replace(/\/+/g, '/');

      routes.push({
        path: fullPath,
        componentName: item.segment, // You can later map this to an actual component
      });

      if (item.children && item.children.length > 0) {
        routes.push(...flattenNavigation(item.children, fullPath));
      }
    }
  });

  return routes;
}


/**APP.JSX */
  /* 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import WebsiteAnalysis from './pages/Dashboard/Dashboard';
import Tracker from './components/dashboard/tracker';
import Assessment from './components/dashboard/assessment';
import Analytics from './components/dashboard/analytics';
import Financial from './components/dashboard/reports/financial';
import Insights from './components/dashboard/reports/insights';

function LayoutWrapper() {
  const location = useLocation();

 Hide AppBar/BottomAppBar for full-page dashboard view
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

   Dashboard routes 
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <WebsiteAnalysis />
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
              <Financial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports/traffic"
          element={
            <ProtectedRoute>
              <Insights />
            </ProtectedRoute>
          }
        />

    Fallback route 
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