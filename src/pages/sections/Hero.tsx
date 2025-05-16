import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo.png';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-indigo-950 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* App Logo and Name Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
          >
            <motion.img 
              src={logoImage} 
              alt="App Logo" 
              className="h-32 w-32 md:h-40 md:w-40"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ 
                rotate: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  delay: 0.4,
                  duration: 0.8 
                }
              }}
              whileHover={{ 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.6
            }}
          >
            BULK MS
          </motion.h1>
        </motion.div>

        {/* Main Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 1.2 
            }}
          >
            <span className="block mb-2">Simplify Your</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300">
              Marketing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto"
          >
            Streamline your email campaigns with our powerful bulk email solution. Reach more customers with less effort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 1.8
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 dark:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-indigo-200 dark:border-indigo-800"
            >
              Try Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 