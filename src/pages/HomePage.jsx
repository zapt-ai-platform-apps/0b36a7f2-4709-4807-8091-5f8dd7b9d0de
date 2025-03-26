import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FeatureCard } from '../components/FeatureCard';
import { FaBook, FaRocket, FaRupeeSign, FaBuilding, FaUsers, FaTools } from 'react-icons/fa';

export const HomePage = () => {
  const features = [
    {
      icon: <FaBook size={24} />,
      title: "Business Basics",
      description: "Learn the fundamental concepts and principles of starting a business in Tamil Nadu.",
      link: "/business-basics",
      delay: 0.1
    },
    {
      icon: <FaRocket size={24} />,
      title: "Startup Guide",
      description: "Step-by-step instructions for creating and registering your business.",
      link: "/startup-guide",
      delay: 0.2
    },
    {
      icon: <FaRupeeSign size={24} />,
      title: "Funding Options",
      description: "Discover government schemes, loans, and other funding sources available in Tamil Nadu.",
      link: "/funding",
      delay: 0.3
    },
    {
      icon: <FaBuilding size={24} />,
      title: "TN Resources",
      description: "Connect with government agencies, educational resources, and support organizations.",
      link: "/resources",
      delay: 0.4
    },
    {
      icon: <FaUsers size={24} />,
      title: "Local Businesses",
      description: "Success stories and lessons from Tamil Nadu entrepreneurs.",
      link: "/local-businesses",
      delay: 0.5
    },
    {
      icon: <FaTools size={24} />,
      title: "Business Tools",
      description: "Practical tools and templates for planning and starting your business.",
      link: "/tools",
      delay: 0.6
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <motion.div
          className="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
            <span className="block">Yours</span>
            <span className="block text-blue-600">Friendly</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A comprehensive resource for aspiring entrepreneurs in Tamil Nadu, especially designed for
            Naan Mudhalvan students from government schools and colleges.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <Link
                to="/startup-guide"
                className="btn-primary text-lg px-8 py-3"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 rounded-md shadow">
              <Link
                to="/resources"
                className="btn-secondary text-lg px-8 py-3"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxEaXZlcnNlJTIwZ3JvdXAlMjBvZiUyMHlvdW5nJTIwVGFtaWwlMjBlbnRyZXByZW5ldXJzJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwaW4lMjBhJTIwbW9kZXJuJTIwd29ya3NwYWNlJTIwaW4lMjBDaGVubmFpJTIwd2l0aCUyMFRhbWlsJTIwY3VsdHVyYWwlMjBlbGVtZW50cyUyMHZpc2libGV8ZW58MHx8fHwxNzQyOTc3MjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
             
            alt="Young entrepreneurs in Tamil Nadu" 
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md" 
            data-image-request="Diverse group of young Tamil entrepreneurs working together in a modern workspace in Chennai with Tamil cultural elements visible"
          />
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Resources for Your Entrepreneurship Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to start and grow your business in Tamil Nadu
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              delay={feature.delay}
            />
          ))}
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-blue-50 py-12 rounded-xl">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Entrepreneurship in Tamil Nadu?
          </motion.h2>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 mb-6">
              "Tamil Nadu offers a rich ecosystem for entrepreneurs with its strong infrastructure, 
              skilled workforce, and supportive government policies. From Chennai's thriving IT corridor 
              to Coimbatore's manufacturing hub, the state provides diverse opportunities for startups 
              and small businesses."
            </p>
            <div>
              <p className="font-semibold text-lg">StartupTN</p>
              <p className="text-gray-500">Official Startup Ecosystem Agency of Tamil Nadu</p>
            </div>
          </motion.div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">3rd</div>
              <p className="text-gray-700">Rank in the State Startup Rankings by DPIIT</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">4,000+</div>
              <p className="text-gray-700">Registered Startups in Tamil Nadu</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Incubation Centers Across the State</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12">
        <motion.div 
          className="bg-blue-600 text-white rounded-xl p-8 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Begin your entrepreneurial journey today with our comprehensive resources and guidance.
          </p>
          <Link to="/startup-guide" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            Start Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};