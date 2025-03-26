import React from 'react';
import { motion } from 'framer-motion';
import { InfoPanel } from '../components/InfoPanel';

export const FundingPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Funding Options</h1>
        <p className="text-lg text-gray-600">
          Discover various funding sources available for entrepreneurs in Tamil Nadu
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxUYW1pbCUyME5hZHUlMjBidXNpbmVzcyUyMHBlb3BsZSUyMGRpc2N1c3NpbmclMjBmdW5kaW5nJTIwb3B0aW9ucyUyMGluJTIwYSUyMG1vZGVybiUyMG9mZmljZSUyMHdpdGglMjBmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjBhbmQlMjBjaGFydHN8ZW58MHx8fHwxNzQyOTc2ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080" 
           
          alt="Funding options for entrepreneurs" 
          className="w-full h-64 object-cover rounded-xl mb-8" 
          data-image-request="Tamil Nadu business people discussing funding options in a modern office with financial documents and charts"
        />
      </motion.div>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Government Schemes and Subsidies</h2>
        
        <InfoPanel title="StartupTN" delay={0.1}>
          <p>StartupTN offers various initiatives to support entrepreneurs in Tamil Nadu:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Startup Tamil Nadu Innovation Grant</li>
            <li>Tamil Nadu Startup Seed Grant Fund (TANSEED)</li>
            <li>Pre-incubation support</li>
            <li>Mentorship programs</li>
          </ul>
          <p className="mt-2">
            <a href="https://startuptn.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Visit StartupTN Website
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="New Entrepreneur-cum-Enterprise Development Scheme (NEEDS)" bg="bg-green-50" titleColor="text-green-700" delay={0.2}>
          <p>NEEDS provides financial assistance to educated youth to start new manufacturing or service enterprises in Tamil Nadu:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Capital subsidy of 25% of the project cost (up to ₹25 lakhs)</li>
            <li>Low-interest-rate term loans</li>
            <li>Training and mentorship support</li>
          </ul>
          <p className="mt-2">
            <a href="https://msme.tn.gov.in/needs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Learn More About NEEDS
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="MSME Schemes" bg="bg-purple-50" titleColor="text-purple-700" delay={0.3}>
          <p>The Tamil Nadu MSME Department offers various schemes:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Capital Subsidy Scheme</li>
            <li>Low Tension Power Tariff Subsidy</li>
            <li>Generator Subsidy Scheme</li>
            <li>Interest Subvention Scheme</li>
          </ul>
          <p className="mt-2">
            <a href="https://www.msmeonline.tn.gov.in/uyegp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Explore MSME Schemes
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="Prime Minister's Employment Generation Programme (PMEGP)" bg="bg-orange-50" titleColor="text-orange-700" delay={0.4}>
          <p>A credit-linked subsidy program for setting up micro-enterprises in non-farm sectors:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Subsidy of 15-35% for urban areas and 25-35% for rural areas</li>
            <li>Maximum project cost of ₹25 lakhs for manufacturing and ₹10 lakhs for service sector</li>
          </ul>
          <p className="mt-2">
            <a href="https://pmegp.kvic.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              PMEGP Portal
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="Amma Micro Enterprise Scheme" bg="bg-red-50" titleColor="text-red-700" delay={0.5}>
          <p>Specifically designed for women entrepreneurs in Tamil Nadu:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Subsidy assistance of 25% of the project cost</li>
            <li>Maximum subsidy of ₹1 lakh</li>
            <li>Support for setting up micro-enterprises</li>
          </ul>
        </InfoPanel>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Bank Loans and Financial Institutions</h2>
        
        <InfoPanel title="MUDRA Loans" bg="bg-blue-50" titleColor="text-blue-700" delay={0.1}>
          <p>Pradhan Mantri MUDRA Yojana (PMMY) provides loans to micro-enterprises:</p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Shishu:</strong> Loans up to ₹50,000</li>
            <li><strong>Kishore:</strong> Loans from ₹50,001 to ₹5 lakhs</li>
            <li><strong>Tarun:</strong> Loans from ₹5 lakhs to ₹10 lakhs</li>
          </ul>
          <p className="mt-2">
            <a href="https://www.mudra.org.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              MUDRA Website
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="Small Industries Development Bank of India (SIDBI)" bg="bg-green-50" titleColor="text-green-700" delay={0.2}>
          <p>SIDBI provides various loan schemes for MSMEs:</p>
          <ul className="list-disc list-inside mt-2">
            <li>SIDBI Loan for Purchase of Equipment for Enterprise Development (SPEED)</li>
            <li>SIDBI Make in India Soft Loan Fund for Micro, Small and Medium Enterprises (SMILE)</li>
            <li>SIDBI-CGTMSE Credit Guarantee Scheme</li>
          </ul>
          <p className="mt-2">
            <a href="https://www.sidbi.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              SIDBI Website
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="Stand-Up India Scheme" bg="bg-purple-50" titleColor="text-purple-700" delay={0.3}>
          <p>This scheme facilitates bank loans between ₹10 lakhs and ₹1 crore to at least one SC/ST borrower and one woman borrower per bank branch for setting up greenfield enterprises.</p>
          <p className="mt-2">
            <a href="https://www.standupmitra.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Stand-Up India Portal
            </a>
          </p>
        </InfoPanel>
        
        <InfoPanel title="Tamil Nadu Industrial Investment Corporation (TIIC)" bg="bg-orange-50" titleColor="text-orange-700" delay={0.4}>
          <p>TIIC offers various loan schemes for entrepreneurs in Tamil Nadu:</p>
          <ul className="list-disc list-inside mt-2">
            <li>General Term Loan</li>
            <li>Equipment Finance</li>
            <li>Working Capital Term Loan</li>
            <li>Special schemes for women entrepreneurs</li>
          </ul>
          <p className="mt-2">
            <a href="https://www.tiic.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              TIIC Website
            </a>
          </p>
        </InfoPanel>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Alternative Funding Options</h2>
        
        <InfoPanel title="Angel Investors and Venture Capital" delay={0.1}>
          <p>For high-growth startups, consider approaching:</p>
          <ul className="list-disc list-inside mt-2">
            <li>The Chennai Angels</li>
            <li>Native Angels Network (based in Madurai)</li>
            <li>Venture capital firms with presence in Tamil Nadu</li>
          </ul>
        </InfoPanel>
        
        <InfoPanel title="Crowdfunding" bg="bg-green-50" titleColor="text-green-700" delay={0.2}>
          <p>Raise small amounts of money from a large number of people through platforms like:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Ketto</li>
            <li>Milaap</li>
            <li>Wishberry</li>
            <li>Fuel A Dream</li>
          </ul>
        </InfoPanel>
        
        <InfoPanel title="Incubators and Accelerators" bg="bg-purple-50" titleColor="text-purple-700" delay={0.3}>
          <p>Join programs that provide funding, mentorship, and resources:</p>
          <ul className="list-disc list-inside mt-2">
            <li>IIT Madras Incubation Cell</li>
            <li>Anna University Centre for Entrepreneurship Development</li>
            <li>CII-TNSC Startup Accelerator</li>
            <li>Startup TN Incubation Centers</li>
          </ul>
        </InfoPanel>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-4">Tips for Securing Funding</h2>
        
        <ol className="space-y-3 text-gray-700">
          <li><strong>1. Prepare a detailed business plan</strong> with clear financial projections</li>
          <li><strong>2. Keep all legal documents ready</strong>, including registration certificates, licenses, and ID proofs</li>
          <li><strong>3. Maintain a good credit score</strong> to increase your chances of loan approval</li>
          <li><strong>4. Research and choose the right funding source</strong> based on your business needs</li>
          <li><strong>5. Network with other entrepreneurs</strong> to learn from their funding experiences</li>
          <li><strong>6. Prepare a compelling pitch</strong> that clearly communicates your business value</li>
          <li><strong>7. Start with a realistic funding request</strong> based on your immediate needs</li>
        </ol>
      </section>
    </div>
  );
};