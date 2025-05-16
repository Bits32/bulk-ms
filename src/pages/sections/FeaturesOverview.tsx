import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineMail, 
  HiOutlineChartPie, 
  HiOutlineUserGroup, 
  HiOutlineClock, 
  HiOutlineShieldCheck, 
  HiOutlineGlobe, 
  HiOutlineLightningBolt, 
  HiOutlineCode 
} from 'react-icons/hi';

// Array of gradient backgrounds for cards
const cardGradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-orange-400 to-amber-500",
  "from-rose-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-fuchsia-500 to-purple-500",
  "from-amber-400 to-orange-500"
];

// Feature card component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  title: string; 
  description: string; 
  index: number;
}) => {
  const gradientClass = cardGradients[index % cardGradients.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 * index,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)" 
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300
                 flex flex-col h-full border border-gray-100 dark:border-gray-700"
    >
      <div className={`h-2 w-full bg-gradient-to-r ${gradientClass}`}></div>
      <div className="p-6 flex-grow">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${gradientClass} mb-5`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default function FeaturesOverview() {
  const features = [
    {
      icon: HiOutlineMail,
      title: "Smart Bulk Sending",
      description: "Send thousands of personalized emails in one click with our intelligent sending engine that maximizes deliverability."
    },
    {
      icon: HiOutlineChartPie,
      title: "Advanced Analytics",
      description: "Track opens, clicks, and conversions in real-time with visual reports that help optimize your campaigns."
    },
    {
      icon: HiOutlineUserGroup,
      title: "Audience Segmentation",
      description: "Create targeted audience segments based on behavior, demographics, and engagement history."
    },
    {
      icon: HiOutlineClock,
      title: "Smart Scheduling",
      description: "AI-powered delivery times ensure your emails arrive when recipients are most likely to engage."
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance features keep your data and your customers' information protected."
    },
    {
      icon: HiOutlineGlobe,
      title: "Global Reach",
      description: "Multilingual support and smart routing technology ensures reliable delivery to inboxes worldwide."
    },
    {
      icon: HiOutlineLightningBolt,
      title: "Drag & Drop Builder",
      description: "Create stunning, responsive email templates in minutes with our intuitive drag-and-drop editor."
    },
    {
      icon: HiOutlineCode,
      title: "Developer API",
      description: "Seamlessly integrate with your existing tools and workflows through our comprehensive API."
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">POWERFUL TOOLSET</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Features for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Modern Marketers</span>
          </h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything you need to create, manage, and optimize your email marketing campaigns in one powerful platform.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 