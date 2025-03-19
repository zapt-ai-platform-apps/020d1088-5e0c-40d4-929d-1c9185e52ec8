import React from 'react';
import { motion } from 'framer-motion';

export function QuestionCard({ 
  question, 
  children, 
  onNext, 
  onBack, 
  isNextDisabled = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-3xl"
    >
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-gray-900">{question}</h3>
        <div className="mt-6 space-y-6">
          {children}
        </div>
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="btn-outline cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled}
            className="btn-primary cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}