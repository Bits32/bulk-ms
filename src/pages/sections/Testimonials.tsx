// import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineUserCircle, 
  HiOutlineStar 
} from 'react-icons/hi';

// Testimonial data with diverse backgrounds and roles
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    quote: "This platform revolutionized our email marketing strategy. The analytics are incredibly insightful!",
    gradient: "from-blue-500 to-indigo-600",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    quote: "As a small business, we needed an affordable yet powerful email solution. This exceeded all our expectations.",
    gradient: "from-green-500 to-emerald-600",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Freelance Consultant",
    quote: "The user interface is intuitive, and the automation features save me hours of work every week.",
    gradient: "from-purple-500 to-pink-600",
    rating: 4
  },
  {
    name: "David Kim",
    role: "Enterprise Sales Lead",
    quote: "Scalability and detailed reporting make this the go-to platform for our large-scale marketing campaigns.",
    gradient: "from-orange-500 to-amber-600",
    rating: 5
  }
];

// Testimonial Card Component
const TestimonialCard = ({ 
  name, 
  role, 
  quote, 
  gradient,
  rating,
  index 
}: {
  name: string;
  role: string;
  quote: string;
  gradient: string;
  rating: number;
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
        {/* User Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${gradient} mb-4`}>
          <HiOutlineUserCircle className="w-8 h-8 text-white" />
        </div>
        
        {/* Quote */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow italic">
          "{quote}"
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <HiOutlineStar 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        
        {/* User Details */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
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
            CUSTOMER STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real experiences from businesses and professionals who have transformed their email marketing.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 