import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDetailVisible, setIsDetailVisible] = useState(true);
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    // Calculate relative position (0-1)
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    setMousePosition({ x, y });
  }, []);
  
  // Generate realistic campaign performance data
  const generateCampaignData = useCallback(() => {
    return [
      { opens: 65, clicks: 45 },
      { opens: 72, clicks: 38 },
      { opens: 58, clicks: 42 },
      { opens: 80, clicks: 55 },
      { opens: 67, clicks: 49 },
      { opens: 75, clicks: 52 },
      { opens: 62, clicks: 41 }
    ];
  }, []);
  
  const campaignData = generateCampaignData();
  
  // Generate dashboard UI mockup
  const DashboardMockup = () => {
    // Calculate rotation based on mouse position
    const rotateX = mousePosition.y * 6 - 3; // -3 to 3 degrees
    const rotateY = (mousePosition.x * 6 - 3) * -1; // -3 to 3 degrees
    
    return (
      <AnimatePresence mode="wait">
        {isDetailVisible && (
          <motion.div
            key="dashboard-mockup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative shadow-2xl rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-850 border border-gray-200 dark:border-gray-700"
            style={{
              perspective: "1500px",
              transformStyle: "preserve-3d",
            }}
          >
            <div 
              style={{ 
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out"
              }}
              className="w-full"
            >
              {/* Mockup header with gradient */}
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-md w-1/3 h-6"></div>
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6">
                {/* Campaign Performance Chart */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">Campaign Performance</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last 7 days</p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="flex items-center text-xs font-medium text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                        Opens
                      </span>
                      <span className="flex items-center text-xs font-medium text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 mr-1"></span>
                        Clicks
                      </span>
                    </div>
                  </div>
                  
                  {/* Animated Performance Chart */}
                  <div className="h-44 relative">
                    <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
                      {/* Grid lines */}
                      {[20, 40, 60, 80].map((y) => (
                        <line 
                          key={y} 
                          x1="0" 
                          y1={100 - y} 
                          x2="300" 
                          y2={100 - y} 
                          stroke="#E5E7EB" 
                          strokeDasharray="5,5"
                          className="dark:stroke-gray-700"
                        />
                      ))}
                      
                      {/* Opens Line */}
                      <motion.polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        points={campaignData.map((d, i) => 
                          `${i * 45 + 15},${100 - d.opens}`
                        ).join(' ')}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "easeInOut" 
                        }}
                      />
                      
                      {/* Clicks Line */}
                      <motion.polyline
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="3"
                        points={campaignData.map((d, i) => 
                          `${i * 45 + 15},${100 - d.clicks}`
                        ).join(' ')}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5,
                          ease: "easeInOut" 
                        }}
                      />
                      
                      {/* X-axis labels */}
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <text 
                          key={day} 
                          x={i * 45 + 15} 
                          y="105" 
                          textAnchor="middle"
                          className="text-xs fill-gray-500 dark:fill-gray-400"
                        >
                          {day}
                        </text>
                      ))}
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="lg:w-5/12 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              REAL-TIME ANALYTICS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Insights</span> at Your Fingertips
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our intuitive dashboard gives you real-time insights into your email campaigns. Track performance, optimize delivery, and boost engagement with data-driven decisions.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time open and click tracking",
                "Conversion attribution analytics",
                "Geographic and device reporting",
                "A/B testing with statistical analysis"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg shadow-lg"
                onClick={() => setIsDetailVisible(!isDetailVisible)}
              >
                {isDetailVisible ? 'Hide Dashboard' : 'Show Dashboard'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          
          <div 
            className="lg:w-7/12 w-full mt-12 lg:mt-0"
            onMouseMove={handleMouseMove}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
 