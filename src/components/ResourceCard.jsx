import React from 'react';
import { motion } from 'framer-motion';

export const ResourceCard = ({ title, organization, description, link, imageUrl, delay = 0 }) => {
  return (
    <motion.div 
      className="card flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {imageUrl && (
        <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGVkdWNhdGlvbiUyMGNvbmNlcHQlMjB3aXRoJTIwVGFtaWwlMjBOYWR1JTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMGluJTIwYSUyMG1vZGVybiUyMGNsYXNzcm9vbSUyMHdpdGglMjBidXNpbmVzcyUyMGNoYXJ0cyUyMGFuZCUyMGRpYWdyYW1zfGVufDB8fHx8MTc0Mjk3Njg0OXww&ixlib=rb-4.0.3&q=80&w=1080" 
          src={imageUrl} 
          alt={organization} 
          className="w-full h-32 object-cover rounded-t-xl mb-4" 
        />
      </motion.div>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What is Entrepreneurship?</h2>
        <p className="text-gray-700">
          Entrepreneurship is the process of designing, launching, and running a new business, 
          which typically begins as a small business, such as a startup company, offering a product, 
          process, or service for sale or hire.
        </p>
        <p className="text-gray-700">
          At its core, entrepreneurship involves identifying a market need and creating a solution 
          in the form of a product or service. It requires taking calculated risks, being innovative, 
          and having the determination to turn ideas into reality.
        </p>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Types of Businesses</h2>
        
        <InfoPanel title="Sole Proprietorship" delay={0.1}>
          <p>The simplest form of business where a single individual owns and runs the business. 
          The owner has complete control but also bears all the risks and liabilities.</p>
          <p className="mt-2"><strong>Registration in Tamil Nadu:</strong> Register with the municipal 
          corporation or local panchayat, and obtain necessary licenses based on your business type.</p>
        </InfoPanel>
        
        <InfoPanel title="Partnership" bg="bg-green-50" titleColor="text-green-700" delay={0.2}>
          <p>A business owned by two or more individuals who share responsibilities, profits, and liabilities.</p>
          <p className="mt-2"><strong>Registration in Tamil Nadu:</strong> Register under the Partnership Act, 1932 
          with the Registrar of Firms in Tamil Nadu.</p>
        </InfoPanel>
        
        <InfoPanel title="Limited Liability Partnership (LLP)" bg="bg-purple-50" titleColor="text-purple-700" delay={0.3}>
          <p>A hybrid structure that provides the benefits of a partnership with limited liability for owners.</p>
          <p className="mt-2"><strong>Registration:</strong> Register with the Ministry of Corporate Affairs. This is 
          a central government process, not specific to Tamil Nadu.</p>
        </InfoPanel>
        
        <InfoPanel title="Private Limited Company" bg="bg-orange-50" titleColor="text-orange-700" delay={0.4}>
          <p>A separate legal entity from its owners with limited liability. Suitable for growing businesses 
          with multiple shareholders.</p>
          <p className="mt-2"><strong>Registration:</strong> Register with the Ministry of Corporate Affairs 
          and comply with the Companies Act, 2013.</p>
        </InfoPanel>
        
        <InfoPanel title="One Person Company (OPC)" bg="bg-red-50" titleColor="text-red-700" delay={0.5}>
          <p>Similar to a private limited company but with a single person as the shareholder. Offers limited 
          liability while allowing complete control.</p>
          <p className="mt-2"><strong>Registration:</strong> Register with the Ministry of Corporate Affairs.</p>
        </InfoPanel>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Essential Business Concepts</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Market Research</h3>
          <p className="text-gray-700">
            Before starting a business, it's crucial to understand your target market, competition, and 
            customer needs. Market research helps you validate your business idea and identify opportunities.
          </p>
          <p className="text-gray-700">
            In Tamil Nadu, consider researching local markets, consumer preferences, and regional business trends.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Business Model</h3>
          <p className="text-gray-700">
            A business model describes how your company creates, delivers, and captures value. It includes 
            your revenue streams, cost structure, key activities, and customer relationships.
          </p>
          <p className="text-gray-700">
            Choose a model that aligns with your strengths and the local Tamil Nadu market conditions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Financial Management</h3>
          <p className="text-gray-700">
            Understanding basic financial concepts is essential for business success. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Revenue and expenses</li>
            <li>Profit and loss</li>
            <li>Cash flow management</li>
            <li>Break-even analysis</li>
            <li>Working capital management</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Legal and Compliance</h3>
          <p className="text-gray-700">
            Every business must comply with various laws and regulations. In Tamil Nadu, these may include:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Business registration</li>
            <li>GST registration</li>
            <li>Professional tax</li>
            <li>Shop and establishment license</li>
            <li>Industry-specific licenses</li>
            <li>Labor laws compliance</li>
          </ul>
        </div>
      </section>
      
      <section className="bg-blue-50 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-bold">Local Business Culture in Tamil Nadu</h2>
        <p className="text-gray-700">
          Understanding the local business culture is crucial for success in Tamil Nadu:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Relationship-based business environment where trust and personal connections matter</li>
          <li>Respect for hierarchy and authority in business settings</li>
          <li>Importance of face-to-face meetings for important business discussions</li>
          <li>Growing entrepreneurial ecosystem, especially in cities like Chennai, Coimbatore, and Madurai</li>
          <li>Strong emphasis on education and technical skills</li>
          <li>Diverse industry landscape from traditional manufacturing to emerging tech startups</li>
        </ul>
      </section>
    </div>
  );
};