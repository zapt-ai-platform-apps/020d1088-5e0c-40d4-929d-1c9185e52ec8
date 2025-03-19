import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@/components/common/PageHeader';
import { AssessmentProgress } from '@/components/assessment/AssessmentProgress';
import { QuestionCard } from '@/components/assessment/QuestionCard';
import { familyQuestions } from '@/modules/assessment/familyQuestions';

export default function FamilyAssessment() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = familyQuestions[currentQuestionIndex];
  
  // Handle radio button changes
  const handleRadioChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: e.target.value
    });
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const currentValues = answers[currentQuestion.id] || [];
    
    // If the checkbox is being checked
    if (e.target.checked) {
      // If selecting "none", clear other selections
      if (value === 'none') {
        setAnswers({
          ...answers,
          [currentQuestion.id]: ['none']
        });
      } else {
        // Remove 'none' if it was previously selected
        const newValues = currentValues.filter(val => val !== 'none');
        setAnswers({
          ...answers,
          [currentQuestion.id]: [...newValues, value]
        });
      }
    } else {
      // If unchecking a value, remove it from the array
      setAnswers({
        ...answers,
        [currentQuestion.id]: currentValues.filter(val => val !== value)
      });
    }
  };
  
  // Check if an option is checked for checkbox question
  const isChecked = (value) => {
    const currentValues = answers[currentQuestion.id] || [];
    return currentValues.includes(value);
  };
  
  // Navigate to next question or results
  const handleNext = () => {
    if (currentQuestionIndex < familyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Save answers to sessionStorage
      sessionStorage.setItem('familyAssessmentAnswers', JSON.stringify(answers));
      navigate('/assessment/results', { state: { assessmentType: 'family', answers } });
    }
  };
  
  // Navigate to previous question or back to assessment start
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate('/assessment');
    }
  };
  
  // Check if next button should be disabled
  const isNextDisabled = () => {
    const currentAnswer = answers[currentQuestion.id];
    
    if (!currentAnswer) return true;
    
    if (currentQuestion.type === 'checkbox') {
      return currentAnswer.length === 0;
    }
    
    return false;
  };
  
  return (
    <div>
      <PageHeader 
        title="Family Protection Assessment"
        description="Help us understand your family protection insurance needs by answering a few questions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <AssessmentProgress 
              currentStep={currentQuestionIndex + 1} 
              totalSteps={familyQuestions.length} 
            />
          </div>
          
          <QuestionCard
            question={currentQuestion.question}
            onNext={handleNext}
            onBack={handleBack}
            isNextDisabled={isNextDisabled()}
          >
            {currentQuestion.type === 'radio' && (
              <div className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={option.value}
                        name={currentQuestion.id}
                        type="radio"
                        value={option.value}
                        checked={answers[currentQuestion.id] === option.value}
                        onChange={handleRadioChange}
                        className="radio"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={option.value} className="font-medium text-gray-700 cursor-pointer">
                        {option.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {currentQuestion.type === 'checkbox' && (
              <div className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={option.value}
                        name={currentQuestion.id}
                        type="checkbox"
                        value={option.value}
                        checked={isChecked(option.value)}
                        onChange={handleCheckboxChange}
                        className="checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={option.value} className="font-medium text-gray-700 cursor-pointer">
                        {option.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </QuestionCard>
        </div>
      </div>
    </div>
  );
}