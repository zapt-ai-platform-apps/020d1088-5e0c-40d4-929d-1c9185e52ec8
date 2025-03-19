import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';

export default function AssessmentStart() {
  return (
    <div>
      <PageHeader 
        title="Protection Needs Assessment"
        description="Answer a few questions to help us understand your protection insurance needs"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-accent2">Choose Your Assessment Path</h2>
            <p className="mt-2 text-lg text-gray-600">
              We offer specialized assessments for both personal/family protection and business protection needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1470&auto=format&fit=crop')` 
              }} data-image-request="family with children at home, family security concept"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-accent1">Family Protection</h3>
                <p className="mt-2 text-gray-600">
                  For individuals and families looking to protect their loved ones and financial future.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Life insurance
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Income protection
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Critical illness cover
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/assessment/family" className="btn bg-accent1 text-white hover:bg-accent1-light w-full text-center cursor-pointer">
                    Start Family Assessment
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop')` 
              }} data-image-request="business office with professionals, business protection concept"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-accent2">Business Protection</h3>
                <p className="mt-2 text-gray-600">
                  For business owners looking to protect their company, partners, and employees.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent2 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Key person insurance
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent2 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Shareholder/partnership protection
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-accent2 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Business loan protection
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/assessment/business" className="btn bg-accent2 text-white hover:bg-accent2-light w-full text-center cursor-pointer">
                    Start Business Assessment
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Not sure which assessment to take? You can complete both to get a comprehensive view of your protection needs.
            </p>
            <p className="mt-4 text-gray-600">
              Learn more about <Link to="/products" className="text-accent1 hover:text-accent1-dark font-medium">protection insurance products</Link> before starting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}