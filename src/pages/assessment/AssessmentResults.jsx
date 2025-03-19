import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { analyzeFamilyResponses, analyzeBusinessResponses } from '@/modules/assessment/productRecommendations';

export default function AssessmentResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  const [assessmentType, setAssessmentType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // If we have answers from the route state
    if (location.state?.assessmentType && location.state?.answers) {
      const { assessmentType, answers } = location.state;
      setAssessmentType(assessmentType);
      
      // Generate recommendations based on assessment type
      if (assessmentType === 'family') {
        setRecommendations(analyzeFamilyResponses(answers));
      } else if (assessmentType === 'business') {
        setRecommendations(analyzeBusinessResponses(answers));
      }
      
      setIsLoading(false);
    } 
    // If we don't have answers from route state, try to get from sessionStorage
    else {
      const familyAnswers = sessionStorage.getItem('familyAssessmentAnswers');
      const businessAnswers = sessionStorage.getItem('businessAssessmentAnswers');
      
      if (familyAnswers) {
        setAssessmentType('family');
        setRecommendations(analyzeFamilyResponses(JSON.parse(familyAnswers)));
        setIsLoading(false);
      } else if (businessAnswers) {
        setAssessmentType('business');
        setRecommendations(analyzeBusinessResponses(JSON.parse(businessAnswers)));
        setIsLoading(false);
      } else {
        // If no answers found, redirect to assessment start
        navigate('/assessment');
      }
    }
  }, [location.state, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Analyzing your responses...</p>
        </div>
      </div>
    );
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div>
      <PageHeader 
        title={`${assessmentType === 'family' ? 'Family' : 'Business'} Protection Recommendations`}
        description="Based on your responses, here are the protection insurance products that may be suitable for your needs"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Your Personalized Recommendations</h2>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {recommendations.length > 0 ? (
                recommendations.map((recommendation, index) => (
                  <motion.div 
                    key={index}
                    className="border border-gray-200 rounded-lg p-5"
                    variants={itemVariants}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{recommendation.product}</h3>
                      <span className={`badge ${recommendation.priority === 'High' ? 'badge-primary' : 'badge-secondary'}`}>
                        {recommendation.priority} Priority
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">{recommendation.reason}</p>
                    <p className="mt-2 text-sm text-gray-600">{recommendation.details}</p>
                  </motion.div>
                ))
              ) : (
                <motion.p 
                  className="text-gray-600 text-center p-4"
                  variants={itemVariants}
                >
                  No specific recommendations could be generated based on your responses. 
                  Please contact a Lifepoint advisor for personalized guidance.
                </motion.p>
              )}
            </motion.div>
            
            <div className="mt-8 p-5 bg-tertiary/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Important Note</h3>
              <p className="mt-2 text-gray-700">
                These recommendations are based on the information you've provided and are intended as general guidance only. 
                For personalized advice tailored to your specific circumstances, please speak with a Lifepoint protection specialist.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Next Steps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Learn More</h3>
                <p className="mt-2 text-gray-600">
                  Explore our product guides to better understand the protection options recommended for you.
                </p>
                <div className="mt-4">
                  <Link to="/products" className="btn-primary cursor-pointer inline-block">
                    Product Explorer
                  </Link>
                </div>
              </div>
              
              <div className="p-5 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Speak With an Expert</h3>
                <p className="mt-2 text-gray-600">
                  Book a consultation with a Lifepoint protection specialist to discuss your needs in detail.
                </p>
                <div className="mt-4">
                  <Link to="/book-appointment" className="btn-primary cursor-pointer inline-block">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Want to explore protection options for {assessmentType === 'family' ? 'your business' : 'your family'} as well?
              </p>
              <div className="mt-4">
                <Link 
                  to={assessmentType === 'family' ? '/assessment/business' : '/assessment/family'} 
                  className="btn-outline cursor-pointer inline-block"
                >
                  Take the {assessmentType === 'family' ? 'Business' : 'Family'} Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}