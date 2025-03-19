import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    contactMethod: '',
    message: '',
    assessmentConsent: false,
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+\- ]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Phone number is invalid';
    }
    
    if (!formData.preferredDate) errors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) errors.preferredTime = 'Preferred time is required';
    if (!formData.contactMethod) errors.contactMethod = 'Contact method is required';
    
    return errors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call to submit the form
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        contactMethod: '',
        message: '',
        assessmentConsent: false,
      });
    } catch (error) {
      console.error('Error submitting appointment request:', error);
      setFormErrors({
        submit: 'There was an error submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get today's date in YYYY-MM-DD format for min date in date picker
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate max date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];
  
  return (
    <div>
      <PageHeader 
        title="Book a Consultation"
        description="Schedule a personalized consultation with a Lifepoint protection specialist"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900">Appointment Request Sent</h2>
              <p className="mt-4 text-gray-600">
                Thank you for your interest in speaking with a Lifepoint protection specialist. 
                We'll confirm your appointment shortly via your preferred contact method.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Book Your Consultation</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`input w-full ${formErrors.firstName ? 'border-red-500' : ''}`}
                        placeholder="Enter your first name"
                      />
                      {formErrors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`input w-full ${formErrors.lastName ? 'border-red-500' : ''}`}
                        placeholder="Enter your last name"
                      />
                      {formErrors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input w-full ${formErrors.email ? 'border-red-500' : ''}`}
                        placeholder="Enter your email"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input w-full ${formErrors.phone ? 'border-red-500' : ''}`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date*
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={today}
                        max={maxDateStr}
                        className={`input w-full ${formErrors.preferredDate ? 'border-red-500' : ''}`}
                      />
                      {formErrors.preferredDate && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.preferredDate}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time*
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className={`select w-full ${formErrors.preferredTime ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 5pm)</option>
                        <option value="evening">Evening (5pm - 7pm)</option>
                      </select>
                      {formErrors.preferredTime && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.preferredTime}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Contact Method*
                    </label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {['Phone', 'Email', 'Video Call'].map((method) => (
                        <div key={method} className="flex items-center">
                          <input
                            id={`method-${method}`}
                            name="contactMethod"
                            type="radio"
                            value={method.toLowerCase()}
                            checked={formData.contactMethod === method.toLowerCase()}
                            onChange={handleChange}
                            className="radio"
                          />
                          <label htmlFor={`method-${method}`} className="ml-2 text-sm text-gray-700">
                            {method}
                          </label>
                        </div>
                      ))}
                    </div>
                    {formErrors.contactMethod && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.contactMethod}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your protection insurance needs or any specific questions you have"
                      className="input w-full"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="assessmentConsent"
                          name="assessmentConsent"
                          type="checkbox"
                          checked={formData.assessmentConsent}
                          onChange={handleChange}
                          className="checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="assessmentConsent" className="text-gray-600">
                          I've completed an assessment and consent to share my results with my protection specialist
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {formErrors.submit && (
                    <div className="mb-6 p-4 bg-red-50 rounded-md">
                      <p className="text-sm text-red-600">{formErrors.submit}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary cursor-pointer flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Book Consultation'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
          
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">What to Expect</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>We'll confirm your appointment time within 24 hours</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your initial consultation will last approximately 30-45 minutes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Our specialist will discuss your protection needs and recommend suitable options</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>There's no obligation to proceed with any recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}