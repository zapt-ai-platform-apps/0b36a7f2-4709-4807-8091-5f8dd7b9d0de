import React from 'react';
import { motion } from 'framer-motion';

export const LocalBusinessesPage = () => {
  const successStories = [
    {
      name: "Zoho Corporation",
      founder: "Sridhar Vembu",
      type: "Software and IT Services",
      description: "Started in Chennai, Zoho has grown into a global company offering SaaS products to businesses worldwide.",
      lessons: [
        "Focus on building quality products",
        "Bootstrap growth instead of relying heavily on external funding",
        "Invest in employee development and retention",
        "Build products that solve real customer problems"
      ],
      imageUrl: "PLACEHOLDER",
      imageRequest: "Zoho Corporation office in Chennai with modern design"
    },
    {
      name: "CavinKare",
      founder: "C.K. Ranganathan",
      type: "FMCG",
      description: "Started with a single sachet of shampoo, CavinKare has grown into a major FMCG company with diverse product lines.",
      lessons: [
        "Innovation in packaging (introduced shampoo sachets)",
        "Understanding local market needs",
        "Starting small but thinking big",
        "Strong distribution network"
      ],
      imageUrl: "PLACEHOLDER",
      imageRequest: "CavinKare products display in a Tamil Nadu store"
    },
    {
      name: "Chai Kings",
      founder: "Jahabar Sadique",
      type: "Food and Beverage",
      description: "A Chennai-based chai chain that has expanded to multiple locations across Tamil Nadu.",
      lessons: [
        "Standardization of a traditional product",
        "Effective branding in a competitive market",
        "Strategic location selection",
        "Consistent quality across outlets"
      ],
      imageUrl: "PLACEHOLDER",
      imageRequest: "Chai Kings cafe in Chennai with customers enjoying tea"
    },
    {
      name: "WayCool Foods",
      founder: "Karthik Jayaraman and Sanjay Dasari",
      type: "AgriTech",
      description: "Founded in Chennai, WayCool is revolutionizing the agricultural supply chain in South India.",
      lessons: [
        "Solving supply chain inefficiencies",
        "Technology integration in traditional sectors",
        "Building direct relationships with farmers",
        "Creating value for all stakeholders"
      ],
      imageUrl: "PLACEHOLDER",
      imageRequest: "WayCool Foods distribution center with fresh produce"
    }
  ];

  const emergingSectors = [
    {
      sector: "AgriTech",
      description: "Revolutionizing agriculture through technology",
      opportunities: [
        "Smart farming solutions",
        "Supply chain optimization",
        "Direct farm-to-consumer platforms",
        "Agricultural data analytics"
      ]
    },
    {
      sector: "FinTech",
      description: "Financial technology solutions for businesses and consumers",
      opportunities: [
        "Digital payment solutions",
        "Micro-lending platforms",
        "Insurance technology",
        "Personal finance management tools"
      ]
    },
    {
      sector: "EdTech",
      description: "Technology solutions for education and skill development",
      opportunities: [
        "Vernacular learning platforms",
        "Skill development apps",
        "Test preparation solutions",
        "Educational content creation"
      ]
    },
    {
      sector: "Healthcare and Wellness",
      description: "Innovative healthcare solutions and wellness products",
      opportunities: [
        "Telemedicine services",
        "Healthcare logistics",
        "Mental health platforms",
        "Preventive healthcare solutions"
      ]
    },
    {
      sector: "Sustainable and Eco-friendly Products",
      description: "Environmentally conscious products and services",
      opportunities: [
        "Eco-friendly packaging",
        "Sustainable fashion",
        "Upcycled products",
        "Waste management solutions"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Success Stories from Tamil Nadu</h1>
        <p className="text-lg text-gray-600">
          Learn from successful entrepreneurs who started their journey in Tamil Nadu
        </p>
      </motion.div>
      
      <section className="space-y-12">
        {successStories.map((story, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={story.imageUrl} 
                  alt={story.name} 
                  className="h-64 w-full object-cover"
                  data-image-request={story.imageRequest}
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">{story.name}</h2>
                <p className="text-blue-600 font-medium">Founded by: {story.founder}</p>
                <p className="text-gray-600 font-medium mb-4">Industry: {story.type}</p>
                <p className="text-gray-700 mb-4">{story.description}</p>
                
                <h3 className="text-lg font-semibold mb-2">Key Lessons:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {story.lessons.map((lesson, i) => (
                    <li key={i}>{lesson}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      
      <section className="bg-blue-50 p-6 rounded-xl">
        <motion.h2 
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Emerging Business Sectors in Tamil Nadu
        </motion.h2>
        
        <div className="space-y-6">
          {emergingSectors.map((sector, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{sector.sector}</h3>
              <p className="text-gray-700 mb-3">{sector.description}</p>
              
              <h4 className="text-lg font-semibold mb-2">Opportunities:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {sector.opportunities.map((opportunity, i) => (
                  <li key={i}>{opportunity}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="p-6 bg-gray-50 rounded-xl">
        <motion.h2 
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Key Business Hubs in Tamil Nadu
        </motion.h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Chennai</h3>
            <p className="text-gray-700">
              The capital city is a major IT, automotive, and manufacturing hub. It's home to numerous startups, 
              tech parks, and business districts like Guindy Industrial Estate, Ambattur Industrial Estate, and 
              IT corridors along OMR and Porur.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Coimbatore</h3>
            <p className="text-gray-700">
              Known as the "Manchester of South India" for its textile industry, Coimbatore is also a hub for 
              engineering, manufacturing, and emerging tech startups, especially in areas like Peelamedu and SIDCO Industrial Estate.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Madurai</h3>
            <p className="text-gray-700">
              A center for textile production, granite processing, and food processing industries. It's also 
              seeing growth in IT and healthcare sectors with emerging startup ecosystems.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Trichy</h3>
            <p className="text-gray-700">
              Known for engineering, fabrication industries, and its strategic location making it a good 
              distribution hub. The BHEL township and surrounding areas have significant industrial activity.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Salem</h3>
            <p className="text-gray-700">
              A center for steel production, textile, and agricultural processing. The Salem Steel Plant 
              and surrounding industrial areas offer opportunities for manufacturing businesses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};