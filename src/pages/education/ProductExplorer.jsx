import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { insuranceProducts } from '@/modules/education/insuranceProducts';

export default function ProductExplorer() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProductId, setActiveProductId] = useState(null);
  
  const filteredProducts = activeCategory === 'all' 
    ? insuranceProducts 
    : insuranceProducts.filter(product => product.category === activeCategory);
  
  const activeProduct = insuranceProducts.find(product => product.id === activeProductId);
  
  return (
    <div>
      <PageHeader 
        title="Insurance Product Explorer"
        description="Learn about different types of protection insurance and how they work"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap -mb-px">
            {['all', 'family', 'business'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-4 px-6 font-medium text-sm border-b-2 focus:outline-none ${
                  activeCategory === category
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category === 'all' ? 'All Products' : category === 'family' ? 'Family Protection' : 'Business Protection'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 bg-primary text-white">
                <h2 className="text-xl font-semibold">Protection Products</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProductId(product.id)}
                    className={`w-full px-4 py-4 text-left transition-colors duration-150 ${
                      activeProductId === product.id ? 'bg-primary/5 text-primary' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{product.name}</span>
                      <span className="badge badge-secondary text-xs">
                        {product.category === 'family' ? 'Family' : 'Business'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="lg:col-span-2">
            {activeProduct ? (
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden"
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-primary">{activeProduct.name}</h2>
                  <p className="mt-4 text-gray-700">{activeProduct.description}</p>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                    <ul className="mt-4 space-y-2">
                      {activeProduct.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900">Suitable For</h3>
                    <ul className="mt-4 space-y-2">
                      {activeProduct.suitableFor.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 p-5 bg-tertiary/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary">Real-Life Example</h3>
                    <p className="mt-2 text-gray-700">{activeProduct.caseStudy.scenario}</p>
                    <p className="mt-4 text-gray-700 font-medium">{activeProduct.caseStudy.outcome}</p>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Link to="/assessment" className="btn-outline cursor-pointer">
                      Take Assessment
                    </Link>
                    <Link to="/book-appointment" className="btn-primary cursor-pointer">
                      Discuss With an Advisor
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900">Select a product to see details</h3>
                <p className="mt-2 text-gray-600">
                  Click on any product from the list to view detailed information about it.
                </p>
              </div>
            )}
            
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Not Sure Which Product You Need?</h3>
                  <p className="text-gray-600">Take our needs assessment to get personalized recommendations.</p>
                </div>
              </div>
              <div className="mt-4 text-right">
                <Link to="/assessment" className="text-primary hover:text-primary-dark font-medium">
                  Take Assessment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}