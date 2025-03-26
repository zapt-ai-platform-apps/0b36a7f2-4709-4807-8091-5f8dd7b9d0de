import React from 'react';
import { motion } from 'framer-motion';
import { ResourceCard } from '../components/ResourceCard';

export const ResourcesPage = () => {
  const governmentResources = [
    {
      title: "Startup Tamil Nadu (StartupTN)",
      organization: "Tamil Nadu Government",
      description: "Official startup ecosystem development agency of the Tamil Nadu government, offering funding, mentorship, and ecosystem support.",
      link: "https://startuptn.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Tamil Nadu Startup Hub office building with modern architecture",
      delay: 0.1
    },
    {
      title: "Micro, Small and Medium Enterprises Department",
      organization: "Government of Tamil Nadu",
      description: "Provides various schemes, subsidies, and support services for MSMEs in Tamil Nadu.",
      link: "https://msme.tn.gov.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Tamil Nadu MSME department office entrance",
      delay: 0.2
    },
    {
      title: "Tamil Nadu Industrial Investment Corporation (TIIC)",
      organization: "Government of Tamil Nadu",
      description: "Financial institution providing term loans and working capital for industries in Tamil Nadu.",
      link: "https://www.tiic.org/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "TIIC building entrance with logo",
      delay: 0.3
    },
    {
      title: "Tamil Nadu Industries Department",
      organization: "Government of Tamil Nadu",
      description: "Facilitates industrial development through policies, incentives, and infrastructure development.",
      link: "https://www.tn.gov.in/department/industries",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Tamil Nadu Industries Department building in Chennai",
      delay: 0.4
    },
    {
      title: "Tamil Nadu e-Governance Agency",
      organization: "Government of Tamil Nadu",
      description: "Implements e-governance initiatives to simplify business procedures and government services.",
      link: "https://tnega.tn.gov.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Digital services kiosk in Tamil Nadu with government logo",
      delay: 0.5
    }
  ];

  const educationalResources = [
    {
      title: "Naan Mudhalvan Portal",
      organization: "Government of Tamil Nadu",
      description: "Skill development and entrepreneurship program for youth, providing courses, mentorship, and resources.",
      link: "https://naanmudhalvan.tn.gov.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Tamil Nadu students using computers in a Naan Mudhalvan training center",
      delay: 0.1
    },
    {
      title: "Entrepreneurship Development and Innovation Institute (EDII)",
      organization: "Tamil Nadu Government",
      description: "Promotes entrepreneurship through awareness programs, training, and business incubation.",
      link: "https://editn.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "EDII Tamil Nadu building entrance with students walking by",
      delay: 0.2
    },
    {
      title: "IIT Madras Entrepreneurship Cell",
      organization: "IIT Madras",
      description: "Promotes entrepreneurship through events, workshops, and incubation facilities.",
      link: "https://www.ecell.iitm.ac.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "IIT Madras campus with students discussing business ideas",
      delay: 0.3
    },
    {
      title: "Tamil Nadu Skill Development Corporation",
      organization: "Government of Tamil Nadu",
      description: "Imparts skill training to youth to enhance employability and entrepreneurship capabilities.",
      link: "https://tnsdc.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Young people in Tamil Nadu receiving vocational training",
      delay: 0.4
    }
  ];

  const incubatorsAccelerators = [
    {
      title: "IIT Madras Incubation Cell",
      organization: "IIT Madras",
      description: "Supports technology-based startups through mentorship, funding, and infrastructure.",
      link: "https://incubation.iitm.ac.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "IIT Madras Incubation Cell with startup founders working together",
      delay: 0.1
    },
    {
      title: "Anna University Centre for Entrepreneurship Development",
      organization: "Anna University",
      description: "Promotes entrepreneurship among engineering students and provides incubation support.",
      link: "https://www.annauniv.edu/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Anna University campus with student entrepreneurs",
      delay: 0.2
    },
    {
      title: "C-CAMP (Centre for Cellular and Molecular Platforms)",
      organization: "Department of Biotechnology, Government of India",
      description: "Life sciences innovation hub and incubator based in Chennai.",
      link: "https://ccamp.res.in/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Life sciences laboratory in Chennai with researchers working on biotech innovations",
      delay: 0.3
    },
    {
      title: "CII-Young Indians",
      organization: "Confederation of Indian Industry",
      description: "Platform for young entrepreneurs to connect, learn, and grow together.",
      link: "https://youngindians.net/",
      imageUrl: "PLACEHOLDER",
      imageRequest: "Young Indian entrepreneurs at a networking event in Tamil Nadu",
      delay: 0.4
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Tamil Nadu Resources</h1>
        <p className="text-lg text-gray-600">
          Connect with government agencies, educational institutions, and support organizations
          that can help you start and grow your business in Tamil Nadu
        </p>
      </motion.div>
      
      <section className="space-y-6">
        <motion.h2 
          className="text-2xl font-bold border-b pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Government Resources and Agencies
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governmentResources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              organization={resource.organization}
              description={resource.description}
              link={resource.link}
              imageUrl={resource.imageUrl}
              delay={resource.delay}
            />
          ))}
        </div>
      </section>
      
      <section className="space-y-6">
        <motion.h2 
          className="text-2xl font-bold border-b pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Educational Resources and Skill Development
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {educationalResources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              organization={resource.organization}
              description={resource.description}
              link={resource.link}
              imageUrl={resource.imageUrl}
              delay={resource.delay}
            />
          ))}
        </div>
      </section>
      
      <section className="space-y-6">
        <motion.h2 
          className="text-2xl font-bold border-b pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Incubators and Accelerators
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {incubatorsAccelerators.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              organization={resource.organization}
              description={resource.description}
              link={resource.link}
              imageUrl={resource.imageUrl}
              delay={resource.delay}
            />
          ))}
        </div>
      </section>
      
      <section className="bg-blue-50 p-6 rounded-xl">
        <motion.h2 
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Local Business Associations and Networks
        </motion.h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Confederation of Indian Industry (CII) - Tamil Nadu State Council</h3>
            <p className="text-gray-700">Business association working with the government on policy issues, enhancing efficiency, competitiveness, and business opportunities.</p>
            <p className="mt-1">
              <a href="https://www.cii.in/StateDetails.aspx?EncHid=LKsE+B1LB/aNQLfhW/b2IQ==" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Visit Website
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Madras Chamber of Commerce and Industry (MCCI)</h3>
            <p className="text-gray-700">One of the oldest chambers in the country, promoting trade, commerce, and industry in Tamil Nadu.</p>
            <p className="mt-1">
              <a href="https://www.madraschambermcci.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Visit Website
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Tamil Nadu Small and Tiny Industries Association (TANSTIA)</h3>
            <p className="text-gray-700">Federation of associations of small and tiny industries in Tamil Nadu.</p>
            <p className="mt-1">
              <a href="http://www.tanstia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Visit Website
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">TiE Chennai</h3>
            <p className="text-gray-700">Chapter of The Indus Entrepreneurs, fostering entrepreneurship through mentoring, networking, and education.</p>
            <p className="mt-1">
              <a href="https://chennai.tie.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Visit Website
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};