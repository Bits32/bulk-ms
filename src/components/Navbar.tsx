import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/images/logo.png';
import { smoothScrollToSection } from '../utils/scrollUtils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollToSection(sectionId);
    setIsOpen(false);
  };

  // NavLink component
  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(href);
      }}
      className="text-white hover:text-purple-200 transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  );

  // MobileNavLink component
  const MobileNavLink = ({ href, children, onClick }: { 
    href: string, 
    children: React.ReactNode, 
    onClick?: () => void 
  }) => (
    <a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(href);
        onClick?.();
      }}
      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-600/90 via-indigo-600/90 to-blue-600/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Logo and Name */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -5, 5, -5, 0]
              }}
              className="flex-shrink-0 flex items-center space-x-3"
            >
              <img 
                src={logoImage} 
                alt="BulkMS Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 drop-shadow-lg">
                BULK MS
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <NavLink href="#dashboard-section">Dashboard</NavLink>
              <NavLink href="#use-cases-section">Use Cases</NavLink>
              <NavLink href="#features-section">Product Features</NavLink>
              <NavLink href="#pricing-section">Pricing Plans</NavLink>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#2c2a5a'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-white font-medium rounded-lg 
              bg-[#1e1b4b] 
              hover:bg-[#2c2a5a] 
              transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Log in
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#2c2a5a'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-white font-medium rounded-lg 
              bg-[#1e1b4b] 
              hover:bg-[#2c2a5a] 
              transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Sign up
            </motion.button>
          </div>
          
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </motion.button>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 
              rounded-md text-white hover:bg-purple-700/50 
              focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 
        bg-gradient-to-br from-purple-600/95 to-indigo-700/95 
        backdrop-blur-lg shadow-lg">
          <MobileNavLink href="#dashboard-section" onClick={() => setIsOpen(false)}>Dashboard</MobileNavLink>
          <MobileNavLink href="#use-cases-section" onClick={() => setIsOpen(false)}>Use Cases</MobileNavLink>
          <MobileNavLink href="#features-section" onClick={() => setIsOpen(false)}>Product Features</MobileNavLink>
          <MobileNavLink href="#pricing-section" onClick={() => setIsOpen(false)}>Pricing Plans</MobileNavLink>
          
          <div className="pt-4 pb-3 border-t border-purple-500/50">
            <div className="flex items-center px-4 space-y-3 flex-col">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center block px-4 py-2 
                bg-white/20 text-white font-medium rounded-lg 
                hover:bg-white/30 transition-all duration-300"
              >
                Log in
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center block px-4 py-2 
                bg-white/30 text-white font-medium rounded-lg 
                hover:bg-white/40 transition-all duration-300"
              >
                Sign up
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}