import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ToolsPage = () => {
  // Business Plan Template Tool
  const [businessPlanState, setBusinessPlanState] = useState({
    businessName: '',
    industry: '',
    targetMarket: '',
    productService: '',
    uniqueValue: '',
    competitors: '',
    marketingStrategy: '',
    operationsStrategy: '',
    startupCosts: '',
    revenueStreams: '',
    milestones: ''
  });

  const handleBusinessPlanChange = (e) => {
    const { name, value } = e.target;
    setBusinessPlanState(prev => ({ ...prev, [name]: value }));
  };

  // Expense Calculator Tool
  const [expenses, setExpenses] = useState({
    rent: '',
    utilities: '',
    inventory: '',
    salaries: '',
    marketing: '',
    equipment: '',
    licenses: '',
    insurance: '',
    miscellaneous: ''
  });

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpenses(prev => ({ ...prev, [name]: value }));
  };

  const totalExpenses = Object.values(expenses)
    .reduce((sum, value) => sum + (Number(value) || 0), 0);

  // Government Scheme Finder
  const [finder, setFinder] = useState({
    businessType: '',
    age: '',
    gender: '',
    location: '',
    category: '',
    investmentAmount: ''
  });

  const handleFinderChange = (e) => {
    const { name, value } = e.target;
    setFinder(prev => ({ ...prev, [name]: value }));
  };

  // Sample recommendations based on inputs
  const getRecommendations = () => {
    const recommendations = [];
    
    if (finder.businessType === 'manufacturing') {
      recommendations.push({
        name: "NEEDS Scheme",
        description: "New Entrepreneur-cum-Enterprise Development Scheme offers capital subsidy for manufacturing businesses."
      });
    }
    
    if (finder.gender === 'female') {
      recommendations.push({
        name: "Amma Micro Enterprise Scheme",
        description: "Specifically designed for women entrepreneurs with subsidy up to ₹1 lakh."
      });
    }
    
    if (finder.age < 35) {
      recommendations.push({
        name: "Tamil Nadu Youth Entrepreneurship Development Scheme",
        description: "Supports young entrepreneurs with subsidies and training."
      });
    }
    
    if (finder.category === 'sc' || finder.category === 'st') {
      recommendations.push({
        name: "Stand-Up India",
        description: "Facilitates loans for SC/ST entrepreneurs between ₹10 lakhs and ₹1 crore."
      });
    }
    
    // Default recommendation if none match or no selections made
    if (recommendations.length === 0) {
      recommendations.push({
        name: "PMEGP Scheme",
        description: "Prime Minister's Employment Generation Programme offers subsidy for both manufacturing and service sectors."
      });
      recommendations.push({
        name: "MSME General Schemes",
        description: "Various subsidies and support programs from the Tamil Nadu MSME department."
      });
    }
    
    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Business Tools</h1>
        <p className="text-lg text-gray-600">
          Practical tools to help you plan, build, and grow your business in Tamil Nadu
        </p>
      </motion.div>
      
      {/* Business Plan Template Tool */}
      <motion.section 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">Business Plan Generator</h2>
        <p className="mb-4 text-gray-700">Fill in the details below to create a simple business plan outline:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Name</label>
            <input 
              type="text" 
              name="businessName" 
              value={businessPlanState.businessName} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="Enter your business name"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Industry/Sector</label>
            <input 
              type="text" 
              name="industry" 
              value={businessPlanState.industry} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="e.g., Retail, Manufacturing, Services"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Target Market</label>
            <input 
              type="text" 
              name="targetMarket" 
              value={businessPlanState.targetMarket} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="Who are your customers?"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Products/Services</label>
            <input 
              type="text" 
              name="productService" 
              value={businessPlanState.productService} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="What do you offer?"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Unique Value Proposition</label>
            <input 
              type="text" 
              name="uniqueValue" 
              value={businessPlanState.uniqueValue} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="What makes your business unique?"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Key Competitors</label>
            <input 
              type="text" 
              name="competitors" 
              value={businessPlanState.competitors} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="Who are your competitors?"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Marketing Strategy</label>
            <textarea 
              name="marketingStrategy" 
              value={businessPlanState.marketingStrategy} 
              onChange={handleBusinessPlanChange} 
              className="input-field h-24"
              placeholder="How will you reach customers?"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Operations Strategy</label>
            <textarea 
              name="operationsStrategy" 
              value={businessPlanState.operationsStrategy} 
              onChange={handleBusinessPlanChange} 
              className="input-field h-24"
              placeholder="How will you run your business?"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Startup Costs</label>
            <input 
              type="text" 
              name="startupCosts" 
              value={businessPlanState.startupCosts} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="Initial investment needed"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Revenue Streams</label>
            <input 
              type="text" 
              name="revenueStreams" 
              value={businessPlanState.revenueStreams} 
              onChange={handleBusinessPlanChange} 
              className="input-field"
              placeholder="How will you make money?"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Key Milestones</label>
            <textarea 
              name="milestones" 
              value={businessPlanState.milestones} 
              onChange={handleBusinessPlanChange} 
              className="input-field h-24"
              placeholder="Major goals and timeline"
            ></textarea>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-primary">Generate Business Plan</button>
          <p className="mt-2 text-sm text-gray-600">This will create a downloadable business plan outline based on your inputs</p>
        </div>
      </motion.section>
      
      {/* Startup Cost Calculator */}
      <motion.section 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Startup Cost Calculator</h2>
        <p className="mb-4 text-gray-700">Estimate your initial business expenses:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Rent/Property</label>
            <input 
              type="number" 
              name="rent" 
              value={expenses.rent} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Utilities</label>
            <input 
              type="number" 
              name="utilities" 
              value={expenses.utilities} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Inventory/Supplies</label>
            <input 
              type="number" 
              name="inventory" 
              value={expenses.inventory} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Salaries/Labor</label>
            <input 
              type="number" 
              name="salaries" 
              value={expenses.salaries} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Marketing/Advertising</label>
            <input 
              type="number" 
              name="marketing" 
              value={expenses.marketing} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Equipment/Furniture</label>
            <input 
              type="number" 
              name="equipment" 
              value={expenses.equipment} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Licenses/Permits</label>
            <input 
              type="number" 
              name="licenses" 
              value={expenses.licenses} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Insurance</label>
            <input 
              type="number" 
              name="insurance" 
              value={expenses.insurance} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Miscellaneous</label>
            <input 
              type="number" 
              name="miscellaneous" 
              value={expenses.miscellaneous} 
              onChange={handleExpenseChange} 
              className="input-field"
              placeholder="₹"
            />
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-lg font-semibold">Total Estimated Startup Costs:</p>
          <p className="text-3xl font-bold text-blue-600">₹{totalExpenses.toLocaleString()}</p>
        </div>
      </motion.section>
      
      {/* Government Scheme Finder */}
      <motion.section 
        className="bg-white p-6 rounded-xl shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Government Scheme Finder</h2>
        <p className="mb-4 text-gray-700">Find government schemes and subsidies that match your profile:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Type</label>
            <select 
              name="businessType" 
              value={finder.businessType} 
              onChange={handleFinderChange} 
              className="input-field"
            >
              <option value="">Select Business Type</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="service">Service</option>
              <option value="retail">Retail</option>
              <option value="agriculture">Agriculture</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age Group</label>
            <select 
              name="age" 
              value={finder.age} 
              onChange={handleFinderChange} 
              className="input-field"
            >
              <option value="">Select Age Group</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-50">36-50</option>
              <option value="50+">50+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Gender</label>
            <select 
              name="gender" 
              value={finder.gender} 
              onChange={handleFinderChange} 
              className="input-field"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <select 
              name="location" 
              value={finder.location} 
              onChange={handleFinderChange} 
              className="input-field"
            >
              <option value="">Select Location</option>
              <option value="urban">Urban</option>
              <option value="rural">Rural</option>
              <option value="semi-urban">Semi-Urban</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select 
              name="category" 
              value={finder.category} 
              onChange={handleFinderChange} 
              className="input-field"
            >
              <option value="">Select Category</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Investment Amount</label>
            <select 
              name="investmentAmount" 
              value={finder.investmentAmount} 
              onChange={handleFinderChange} 
              className="input-field"
            >
              <option value="">Select Investment Range</option>
              <option value="below1lakh">Below ₹1 Lakh</option>
              <option value="1-5lakh">₹1 Lakh - ₹5 Lakhs</option>
              <option value="5-25lakh">₹5 Lakhs - ₹25 Lakhs</option>
              <option value="above25lakh">Above ₹25 Lakhs</option>
            </select>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <button className="btn-primary">Find Matching Schemes</button>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Recommended Schemes</h3>
          
          <div className="space-y-4">
            {recommendations.map((scheme, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-blue-700">{scheme.name}</h4>
                <p className="text-gray-700">{scheme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};