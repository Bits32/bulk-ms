import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import logoImage from '../assets/images/logo.png';
import { setCredentials } from '../redux/features/authSlice';

interface LocationState {
  from: {
    pathname: string;
  };
}

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = (location.state as LocationState)?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // This is where you would authenticate with your backend
      // For now, just simulating login with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock credentials - in production, replace with actual authentication
      if (email === 'admin@example.com' && password === 'admin123') {
        // Create a mock token - in production, this would come from your backend
        const mockToken = 'mock-jwt-token';
        
        // Dispatch login action
        dispatch(setCredentials({
          token: mockToken,
          user: {
            email,
            role: 'admin'
          }
        }));

        // Navigate to the protected route the user tried to visit or dashboard
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.img 
              src={logoImage}
              alt="Logo" 
              className="h-20 w-20 mx-auto mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                delay: 0.2
              }}
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              BULK <span className="text-purple-500">MS</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Admin Portal</p>
          </div>
          
          <motion.h2 
            className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Welcome Back
          </motion.h2>
          
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
            >
              {error}
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="admin@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 flex justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Sign In'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin; 