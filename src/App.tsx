import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import ContactUs from './pages/ContactUs'
import Onboard from './pages/Onboard';
import LoadingScreen from './pages/LoadingScreen';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import { store } from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import OnboardSections from './pages/admin/OnboardSections';
import BlogManagement from './pages/admin/BlogManagement';

// Initial loading wrapper component
const InitialLoadingWrapper = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('InitialLoadingWrapper mounted');
    return () => console.log('InitialLoadingWrapper unmounted');
  }, []);

  const handleLoadingComplete = () => {
    console.log('Loading complete, navigating to /onboard');
    setLoading(false);
    navigate('/onboard', { replace: true });
  };

  return loading ? (
    <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  ) : null;
};

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' depending on your preference
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Routes>
            {/* Initial Loading Route */}
            <Route path="/" element={<InitialLoadingWrapper />} />

            {/* Public Routes */}
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            >
              {/* Nested Admin Routes */}
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard/>} />
              <Route path="onboard-sections" element={<OnboardSections />} />
              <Route path="blogs" element={<BlogManagement />} />
              <Route path="settings" element={<div>Admin Settings</div>} />
            </Route>
            
            {/* Redirect all unknown routes to /onboard */}
            <Route path="*" element={<Navigate to="/onboard" replace />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
