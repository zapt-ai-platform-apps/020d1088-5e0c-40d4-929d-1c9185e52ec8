import { describe, it, expect } from 'vitest';
import { analyzeFamilyResponses, analyzeBusinessResponses } from '../../modules/assessment/productRecommendations';

describe('Family protection recommendations', () => {
  it('recommends life insurance for families with dependents', () => {
    const responses = {
      dependents: 'children',
      maritalStatus: 'married',
      income: '50k-75k',
      mortgage: 'mortgage',
      existingCoverage: ['none'],
      healthStatus: 'good',
      primaryConcern: 'family-financial-security'
    };
    
    const recommendations = analyzeFamilyResponses(responses);
    
    // Check if life insurance is recommended
    expect(recommendations.some(rec => rec.product === 'Life Insurance')).toBe(true);
    
    // Verify priority is high
    const lifeInsurance = recommendations.find(rec => rec.product === 'Life Insurance');
    expect(lifeInsurance.priority).toBe('High');
  });
  
  it('recommends income protection for higher income individuals', () => {
    const responses = {
      dependents: 'none',
      maritalStatus: 'single',
      income: '75k-100k',
      mortgage: 'no-debt',
      existingCoverage: ['none'],
      healthStatus: 'excellent',
      primaryConcern: 'income-replacement'
    };
    
    const recommendations = analyzeFamilyResponses(responses);
    
    // Check if income protection is recommended
    expect(recommendations.some(rec => rec.product === 'Income Protection')).toBe(true);
  });
});

describe('Business protection recommendations', () => {
  it('recommends key person insurance for sole traders', () => {
    const responses = {
      businessType: 'sole-trader',
      businessSize: 'just-me',
      businessAge: '4-10-years',
      keyPersons: 'just-me',
      businessDebts: ['none'],
      successionPlan: 'no-plan',
      primaryBusinessConcern: 'business-continuity'
    };
    
    const recommendations = analyzeBusinessResponses(responses);
    
    // Check if key person insurance is recommended
    expect(recommendations.some(rec => rec.product === 'Key Person Insurance')).toBe(true);
  });
  
  it('recommends partnership protection for partnerships', () => {
    const responses = {
      businessType: 'partnership',
      businessSize: '2-5',
      businessAge: 'over-10-years',
      keyPersons: 'few-key-people',
      businessDebts: ['business-loan'],
      successionPlan: 'informal',
      primaryBusinessConcern: 'ownership-transition'
    };
    
    const recommendations = analyzeBusinessResponses(responses);
    
    // Check if partnership protection is recommended
    expect(recommendations.some(rec => rec.product === 'Shareholder/Partnership Protection')).toBe(true);
  });
});