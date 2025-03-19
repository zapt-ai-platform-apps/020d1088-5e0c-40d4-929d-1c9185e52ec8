import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AssessmentProgress } from '@/components/assessment/AssessmentProgress';

describe('AssessmentProgress component', () => {
  it('renders the correct step information', () => {
    render(<AssessmentProgress currentStep={3} totalSteps={7} />);
    
    expect(screen.getByText('Step 3 of 7')).toBeInTheDocument();
    expect(screen.getByText('43%')).toBeInTheDocument();
  });
  
  it('calculates the correct percentage', () => {
    render(<AssessmentProgress currentStep={2} totalSteps={5} />);
    expect(screen.getByText('40%')).toBeInTheDocument();
  });
  
  it('handles first step correctly', () => {
    render(<AssessmentProgress currentStep={1} totalSteps={10} />);
    expect(screen.getByText('Step 1 of 10')).toBeInTheDocument();
    expect(screen.getByText('10%')).toBeInTheDocument();
  });
  
  it('handles last step correctly', () => {
    render(<AssessmentProgress currentStep={8} totalSteps={8} />);
    expect(screen.getByText('Step 8 of 8')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});