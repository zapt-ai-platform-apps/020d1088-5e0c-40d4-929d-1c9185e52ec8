import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent2 to-accent1 opacity-90 z-10"></div>
        <div 
          className="relative h-[500px] bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?q=80&w=1600&auto=format&fit=crop')`,
            backgroundPosition: '50% 65%'
          }}
          data-image-request="happy family with two children at home, financial security concept"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 h-full flex items-center relative z-20">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Understand Your Protection Insurance Needs
              </h1>
              <p className="mt-6 text-xl text-white">
                Identify the right insurance coverage for you, your family, or your business with our 
                easy-to-use needs analyzer.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/assessment" className="btn bg-white text-accent1 hover:bg-gray-100 cursor-pointer">
                  Start Your Assessment
                </Link>
                <Link to="/products" className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 cursor-pointer">
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-accent2">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our protection insurance analyzer helps you understand what coverage you need 
              without complex calculations or insurance jargon.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Answer Simple Questions',
                description: 'Tell us about your current situation, financial responsibilities, and future plans.',
                icon: '📋',
                bgColor: 'bg-tertiary/20'
              },
              {
                title: 'Get Personalized Insights',
                description: 'Receive customized protection recommendations based on your unique circumstances.',
                icon: '🔍',
                bgColor: 'bg-secondary/30'
              },
              {
                title: 'Speak With an Expert',
                description: 'Book a consultation with a Lifepoint advisor to explore your options in detail.',
                icon: '📞',
                bgColor: 'bg-accent1/20'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-xl shadow-md p-6 text-center ${feature.bgColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-accent2">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessment Types */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-accent2">Protection For Every Need</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to protect your family or your business, we have assessment tools designed for your specific needs.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-64 bg-cover bg-center" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1470&auto=format&fit=crop')` 
              }} data-image-request="happy family with children playing outdoors, family protection concept"></div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold text-accent1">Family Protection</h3>
                <p className="mt-3 text-gray-600">
                  Ensure your loved ones are financially protected against unexpected events. 
                  Our family assessment helps identify the right coverage for your household.
                </p>
                <div className="mt-6">
                  <Link to="/assessment/family" className="btn bg-accent1 text-white hover:bg-accent1-light cursor-pointer inline-block">
                    Family Assessment
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-64 bg-cover bg-center" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop')` 
              }} data-image-request="professional business people in an office meeting, business protection concept"></div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold text-accent2">Business Protection</h3>
                <p className="mt-3 text-gray-600">
                  Protect your business against key person loss, ownership transitions, and other critical risks.
                  Our business assessment helps safeguard what you've built.
                </p>
                <div className="mt-6">
                  <Link to="/assessment/business" className="btn bg-accent2 text-white hover:bg-accent2-light cursor-pointer inline-block">
                    Business Assessment
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to understand your protection needs?</h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Start your assessment today and take the first step toward financial security.
          </p>
          <div className="mt-8">
            <Link to="/assessment" className="btn bg-white text-accent2 hover:bg-gray-100 text-lg px-8 py-4 cursor-pointer inline-block">
              Start Your Assessment Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}