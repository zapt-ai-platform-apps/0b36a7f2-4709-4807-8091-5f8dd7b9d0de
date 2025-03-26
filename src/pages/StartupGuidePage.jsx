import React from 'react';
import { motion } from 'framer-motion';
import { StepCard } from '../components/StepCard';

export const StartupGuidePage = () => {
  const steps = [
    {
      number: 1,
      title: "Identify Your Business Idea",
      description: "Start by identifying a problem that needs solving or a gap in the market that you can fill. Focus on your skills, interests, and the needs of people in Tamil Nadu.",
      delay: 0.1
    },
    {
      number: 2,
      title: "Market Research",
      description: "Research your target market, competitors, and potential customers in Tamil Nadu. Understand local preferences, spending habits, and needs specific to your region.",
      delay: 0.2
    },
    {
      number: 3,
      title: "Create a Business Plan",
      description: "Develop a comprehensive business plan that includes your business model, marketing strategy, operational plan, and financial projections.",
      delay: 0.3
    },
    {
      number: 4,
      title: "Choose a Business Structure",
      description: "Decide on the legal structure for your business (sole proprietorship, partnership, LLP, or private limited company) based on your specific needs and goals.",
      delay: 0.4
    },
    {
      number: 5,
      title: "Register Your Business",
      description: "Complete the necessary registration process based on your chosen business structure. This may include registering with local authorities in Tamil Nadu and obtaining required licenses.",
      delay: 0.5
    },
    {
      number: 6,
      title: "Set Up Business Banking",
      description: "Open a business bank account to separate personal and business finances. This is crucial for proper financial management and tax compliance.",
      delay: 0.6
    },
    {
      number: 7,
      title: "Arrange Funding",
      description: "Secure the funding you need to start your business. This could be personal savings, loans from banks, government schemes, or investments from friends and family.",
      delay: 0.7
    },
    {
      number: 8,
      title: "Find a Location",
      description: "Choose a suitable location for your business in Tamil Nadu, whether it's a physical store, office space, or a home-based setup. Consider factors like accessibility, cost, and target market.",
      delay: 0.8
    },
    {
      number: 9,
      title: "Build Your Team",
      description: "Hire employees or find partners with complementary skills. Tamil Nadu has a skilled workforce across various sectors that you can tap into.",
      delay: 0.9
    },
    {
      number: 10,
      title: "Launch and Market Your Business",
      description: "Officially launch your business and implement your marketing strategy to attract customers. Utilize both traditional and digital marketing channels relevant to your Tamil Nadu audience.",
      delay: 1.0
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Startup Guide</h1>
        <p className="text-lg text-gray-600">
          A step-by-step guide to starting your business in Tamil Nadu
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHx5b3VuZyUyMFRhbWlsJTIwTmFkdSUyMGVudHJlcHJlbmV1cnMlMjB3b3JraW5nJTIwb24lMjBhJTIwYnVzaW5lc3MlMjBwbGFuJTIwaW4lMjBhJTIwbW9kZXJuJTIwY28td29ya2luZyUyMHNwYWNlJTIwd2l0aCUyMFRhbWlsJTIwY3VsdHVyYWwlMjBlbGVtZW50cyUyMHZpc2libGV8ZW58MHx8fHwxNzQyOTc2ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" 
           
          alt="Starting a business in Tamil Nadu" 
          className="w-full h-64 object-cover rounded-xl mb-8" 
          data-image-request="young Tamil Nadu entrepreneurs working on a business plan in a modern co-working space with Tamil cultural elements visible"
        />
      </motion.div>
      
      <div className="space-y-6">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            delay={step.delay}
          />
        ))}
      </div>
      
      <section className="bg-blue-50 p-6 rounded-xl mt-12">
        <h2 className="text-2xl font-bold mb-4">Important Registrations and Licenses in Tamil Nadu</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">GST Registration</h3>
            <p className="text-gray-700">
              Required if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for North Eastern and Special Category States).
              Register on the <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GST Portal</a>.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Shop and Establishment License</h3>
            <p className="text-gray-700">
              Required for businesses with employees. Apply through the Tamil Nadu Labour Department's 
              <a href="https://labour.tn.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> online portal</a>.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">MSME Registration</h3>
            <p className="text-gray-700">
              Beneficial for small businesses to access government schemes and benefits.
              Register on the <a href="https://udyamregistration.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Udyam Registration Portal</a>.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Professional Tax Registration</h3>
            <p className="text-gray-700">
              Required for all businesses and professionals in Tamil Nadu.
              Register with the Commercial Taxes Department.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Industry-Specific Licenses</h3>
            <p className="text-gray-700">
              Depending on your business type, you may need additional licenses:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Food Business: FSSAI License</li>
              <li>Tourism: Tourism Department Registration</li>
              <li>Healthcare: Medical Establishment License</li>
              <li>Education: Education Department Approval</li>
              <li>Manufacturing: Factory License, Pollution Control Board Clearance</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="bg-green-50 p-6 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-4">Business Plan Template</h2>
        <p className="mb-4">A good business plan includes the following sections:</p>
        
        <ol className="space-y-3 text-gray-700">
          <li><strong>1. Executive Summary:</strong> Brief overview of your business, mission, vision, and goals</li>
          <li><strong>2. Company Description:</strong> Detailed information about your business, legal structure, and location</li>
          <li><strong>3. Market Analysis:</strong> Research on your industry, target market, and competitors in Tamil Nadu</li>
          <li><strong>4. Organization & Management:</strong> Information about your team, their roles, and responsibilities</li>
          <li><strong>5. Service or Product Line:</strong> Description of what you're selling and its unique value proposition</li>
          <li><strong>6. Marketing & Sales Strategy:</strong> How you'll attract and retain customers in Tamil Nadu</li>
          <li><strong>7. Funding Request:</strong> How much funding you need and how you'll use it</li>
          <li><strong>8. Financial Projections:</strong> Revenue forecasts, expense budgets, and break-even analysis</li>
          <li><strong>9. Appendix:</strong> Supporting documents like permits, licenses, and detailed financial statements</li>
        </ol>
        
        <div className="mt-6">
          <p className="font-semibold">Remember to tailor your business plan to the specific context of Tamil Nadu, considering:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
            <li>Local market conditions and consumer preferences</li>
            <li>Regional economic factors and growth sectors</li>
            <li>State-specific regulations and compliance requirements</li>
            <li>Available government incentives and schemes for entrepreneurs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};