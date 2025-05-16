// import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineCheck, 
  HiOutlineX,
  HiOutlineCurrencyDollar 
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';



// Pricing plan details
const pricingPlans = [
  {
    title: "Free",
    price: 0,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Up to 1,000 contacts",
      "Basic email templates",
      "Limited analytics",
      "Community support"
    ],
    unavailableFeatures: [
      "Advanced segmentation",
      "A/B testing",
      "Priority support"
    ]
  },
  {
    title: "Pro",
    price: 29,
    gradient: "from-green-500 to-emerald-600",
    features: [
      "Up to 10,000 contacts",
      "Advanced email templates",
      "Comprehensive analytics",
      "A/B testing",
      "Priority email support"
    ],
    unavailableFeatures: [
      "Dedicated account manager",
      "Enterprise-level security"
    ]
  },
  {
    title: "Enterprise",
    price: 99,
    gradient: "from-purple-500 to-pink-600",
    features: [
      "Unlimited contacts",
      "Custom email templates",
      "Advanced analytics",
      "Dedicated account manager",
      "Enterprise-level security",
      "24/7 premium support"
    ],
    unavailableFeatures: []
  }
];

// Pricing Card Component
const PricingCard = ({ 
  title, 
  price, 
  gradient,
  features,
  unavailableFeatures,
  index 
}: {
  title: string;
  price: number;
  gradient: string;
  features: string[];
  unavailableFeatures: string[];
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
      <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-6 flex flex-col h-full">
        {/* Plan Title and Price */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
          <div className="flex items-center">
            <HiOutlineCurrencyDollar className="w-6 h-6 text-gray-600 dark:text-gray-300 mr-1" />
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
              {price === 0 ? 'Free' : `${price}/mo`}
            </span>
          </div>
        </div>
        
        {/* Included Features */}
        <div className="mb-6 flex-grow">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">What's Included</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-center text-sm text-gray-700 dark:text-gray-300"
              >
                <HiOutlineCheck 
                  className={`w-5 h-5 mr-2 rounded-full p-0.5 ${gradient} text-white`} 
                />
                {feature}
              </li>
            ))}
            {unavailableFeatures.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-center text-sm text-gray-400 dark:text-gray-600 line-through"
              >
                <HiOutlineX 
                  className="w-5 h-5 mr-2 text-gray-300 dark:text-gray-700" 
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 text-white font-medium rounded-lg shadow-lg bg-gradient-to-r ${gradient} hover:opacity-90 transition-all duration-300`}
        >
          {title === 'Free' ? 'Get Started' : `Choose ${title}`}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function PricingCTA() {
  const navigate = useNavigate();
  const handleContactClick = () => {
     navigate('/contact-us');
    };
  return (
    <section className="w-full py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
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
            FLEXIBLE PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose a plan that grows with your business. No hidden fees, no complicated contracts.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              index={index}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
           onClick={handleContactClick} 
           >

            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 