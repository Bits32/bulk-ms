// import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineBriefcase, 
  HiOutlineDesktopComputer, 
  HiOutlineUserGroup, 
  HiOutlineNewspaper 
} from 'react-icons/hi';

// Define use case gradients and details
const useCases = [
  {
    title: "Marketing Agencies",
    icon: HiOutlineBriefcase,
    gradient: "from-purple-500 to-indigo-600",
    benefits: [
      "Manage multiple client campaigns",
      "Advanced segmentation tools",
      "Comprehensive performance analytics",
      "White-label reporting"
    ],
    description: "Scale your marketing efforts with our powerful, multi-client management platform."
  },
  {
    title: "Small Businesses",
    icon: HiOutlineDesktopComputer,
    gradient: "from-blue-500 to-cyan-500",
    benefits: [
      "Cost-effective email solutions",
      "Easy-to-use template builder",
      "Automated campaign scheduling",
      "Local audience targeting"
    ],
    description: "Grow your business with targeted, professional email marketing."
  },
  {
    title: "Freelancers",
    icon: HiOutlineUserGroup,
    gradient: "from-green-500 to-emerald-600",
    benefits: [
      "Personal branding tools",
      "Flexible pricing plans",
      "Portfolio showcase features",
      "Client communication hub"
    ],
    description: "Elevate your freelance business with smart email marketing solutions."
  },
  {
    title: "Newsletters",
    icon: HiOutlineNewspaper,
    gradient: "from-orange-500 to-amber-600",
    benefits: [
      "Subscriber management",
      "Content distribution tools",
      "Engagement tracking",
      "Monetization options"
    ],
    description: "Grow and monetize your newsletter with our comprehensive platform."
  }
];

// Use Case Card Component
const UseCaseCard = ({ 
  title, 
  icon: Icon, 
  gradient, 
  benefits, 
  description,
  index 
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  benefits: string[];
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" 
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      {/* Gradient Header */}
      <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-6 flex flex-col h-full">
        {/* Icon and Title */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${gradient} mb-5`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        
        {/* Benefits List */}
        <ul className="space-y-2 mb-4">
          {benefits.map((benefit, idx) => (
            <li 
              key={idx} 
              className="flex items-center text-sm text-gray-700 dark:text-gray-300"
            >
              <svg 
                className={`w-4 h-4 mr-2 bg-gradient-to-r ${gradient} text-white rounded-full p-0.5`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
        
        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 text-white font-medium rounded-lg shadow-lg bg-gradient-to-r ${gradient} hover:opacity-90 transition-all duration-300`}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function UseCases() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            VERSATILE SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Perfect for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Every Business</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform adapts to your unique needs, whether you're a growing agency, small business, freelancer, or content creator.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              {...useCase}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 