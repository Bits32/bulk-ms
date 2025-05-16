import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineUser, 
  HiOutlineCog, 
  HiOutlineIdentification, 
  HiOutlineChartBar, 
  HiOutlineMail, 
  HiOutlineKey,
  HiOutlinePhotograph 
} from 'react-icons/hi';

// Import actual images
import UserProfileScreenshot from '../../assets/images/profile.png';
import AdminDashboardScreenshot from '../../assets/images/admin.png';

// Profile and Admin sections
const profileSections = [
  {
    title: "User Profile",
    icon: HiOutlineUser,
    gradient: "from-blue-500 to-indigo-600",
    screenshot: UserProfileScreenshot,
    features: [
      { 
        icon: HiOutlineIdentification, 
        title: "Personal Details", 
        description: "Customize your profile with detailed information" 
      },
      { 
        icon: HiOutlineMail, 
        title: "Contact Preferences", 
        description: "Manage communication settings and notifications" 
      },
      { 
        icon: HiOutlineKey, 
        title: "Account Security", 
        description: "Two-factor authentication and password management" 
      }
    ]
  },
  {
    title: "Admin Dashboard",
    icon: HiOutlineCog,
    gradient: "from-purple-500 to-pink-600",
    screenshot: AdminDashboardScreenshot,
    features: [
      { 
        icon: HiOutlineChartBar, 
        title: "Usage Analytics", 
        description: "Comprehensive insights into platform utilization" 
      },
      { 
        icon: HiOutlineUser, 
        title: "User Management", 
        description: "Add, remove, and manage user accounts" 
      },
      { 
        icon: HiOutlineMail, 
        title: "Campaign Monitoring", 
        description: "Track and analyze email campaign performance" 
      }
    ]
  }
];

export default function UserProfileSection() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            PERSONALIZED CONTROL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Manage Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Digital Workspace</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Customize your experience with intuitive profile settings and powerful admin controls.
          </p>
        </motion.div>

        {/* Section Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {profileSections.map((section, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300
                  ${activeSection === index 
                    ? `bg-gradient-to-r ${section.gradient} text-white` 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
                `}
              >
                {section.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[700px]">
          <AnimatePresence mode="wait">
            {profileSections.map((section, index) => (
              activeSection === index && (
                <motion.div
                  key={`section-${index}`}
                  initial={{ opacity: 0, x: index === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features Column */}
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-6"
                    >
                      {section.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: featureIndex * 0.2 
                          }}
                          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                        >
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4`}>
                            <feature.icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Screenshot Column */}
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center justify-center"
                    >
                      <div className="relative group">
                        <motion.img 
                          src={section.screenshot} 
                          alt={`${section.title} Screenshot`}
                          className="rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 transform transition-all duration-300 group-hover:scale-105"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                          }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-2xl transition-all duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg"
                          >
                            <HiOutlinePhotograph className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 