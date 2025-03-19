// Helper functions to analyze assessment responses and provide recommendations

// Family assessment recommendations
export function analyzeFamilyResponses(responses) {
  const recommendations = [];
  
  // Life insurance recommendation
  if (
    responses.dependents === 'children' || 
    responses.dependents === 'multiple' ||
    responses.maritalStatus === 'married' ||
    responses.maritalStatus === 'partnership' ||
    responses.mortgage === 'mortgage' ||
    responses.mortgage === 'both'
  ) {
    recommendations.push({
      product: 'Life Insurance',
      priority: 'High',
      reason: 'Provides financial protection for your dependents or to cover mortgage payments in case of your death.',
      details: 'Life insurance pays out a lump sum to your beneficiaries if you pass away during the term of the policy.'
    });
  }
  
  // Income protection recommendation
  if (
    responses.income !== 'under-30k' &&
    (responses.primaryConcern === 'income-replacement' || 
     responses.primaryConcern === 'family-financial-security')
  ) {
    recommendations.push({
      product: 'Income Protection',
      priority: 'Medium',
      reason: 'Replaces a portion of your income if you\'re unable to work due to illness or injury.',
      details: 'Income protection provides regular payments to replace part of your income if you can\'t work due to illness or injury.'
    });
  }
  
  // Critical illness recommendation
  if (
    responses.healthStatus === 'fair' || 
    responses.healthStatus === 'poor' ||
    responses.primaryConcern === 'income-replacement'
  ) {
    recommendations.push({
      product: 'Critical Illness Cover',
      priority: 'Medium',
      reason: 'Provides a lump sum payment if you\'re diagnosed with a specified serious illness.',
      details: 'Critical illness cover pays out a tax-free lump sum if you\'re diagnosed with one of the specified critical illnesses covered by the policy.'
    });
  }
  
  // Mortgage protection recommendation
  if (
    responses.mortgage === 'mortgage' || 
    responses.mortgage === 'both'
  ) {
    recommendations.push({
      product: 'Mortgage Protection Insurance',
      priority: 'High',
      reason: 'Ensures your mortgage can be paid off in case of death or critical illness.',
      details: 'Mortgage protection insurance is designed specifically to cover your mortgage payments if you die or can\'t work due to critical illness.'
    });
  }
  
  return recommendations;
}

// Business assessment recommendations
export function analyzeBusinessResponses(responses) {
  const recommendations = [];
  
  // Key Person Insurance
  if (
    responses.keyPersons === 'just-me' || 
    responses.keyPersons === 'few-key-people' ||
    responses.primaryBusinessConcern === 'key-person'
  ) {
    recommendations.push({
      product: 'Key Person Insurance',
      priority: 'High',
      reason: 'Protects your business against the financial impact of losing a key person through death or illness.',
      details: 'Key person insurance provides a lump sum to the business if a key person dies or suffers a critical illness, helping the business to recover from the financial impact.'
    });
  }
  
  // Shareholder/Partnership Protection
  if (
    (responses.businessType === 'partnership' || 
     responses.businessType === 'limited-company' ||
     responses.businessType === 'llp') &&
    (responses.keyPersons === 'few-key-people' || 
     responses.keyPersons === 'management-team' ||
     responses.primaryBusinessConcern === 'ownership-transition' ||
     responses.primaryBusinessConcern === 'partners-shareholders')
  ) {
    recommendations.push({
      product: 'Shareholder/Partnership Protection',
      priority: 'High',
      reason: 'Ensures business continuity by providing funds for remaining partners/shareholders to buy the shares of a deceased or critically ill partner/shareholder.',
      details: 'This protection ensures that if a business owner dies or becomes critically ill, the remaining owners can purchase their share of the business, ensuring continuity and control.'
    });
  }
  
  // Business Loan Protection
  if (
    responses.businessDebts.includes('business-loan') ||
    responses.businessDebts.includes('commercial-mortgage') ||
    responses.businessDebts.includes('personal-guarantees') ||
    responses.primaryBusinessConcern === 'loan-protection'
  ) {
    recommendations.push({
      product: 'Business Loan Protection',
      priority: 'Medium',
      reason: 'Covers business loans in the event of the death or critical illness of a business owner or key person who guaranteed the loan.',
      details: 'This insurance pays out a lump sum that can be used to repay business loans if the key person or business owner dies or suffers a critical illness.'
    });
  }
  
  // Relevant Life Policy
  if (
    (responses.businessType === 'limited-company' || 
     responses.businessType === 'llp') &&
    responses.businessSize !== 'just-me'
  ) {
    recommendations.push({
      product: 'Relevant Life Policy',
      priority: 'Medium',
      reason: 'A tax-efficient way for your business to provide death-in-service benefits for employees.',
      details: 'A relevant life policy allows your company to provide death-in-service benefits for employees (including directors) in a tax-efficient manner.'
    });
  }
  
  // Business Continuity Insurance
  if (
    responses.primaryBusinessConcern === 'business-continuity' ||
    responses.successionPlan === 'no-plan'
  ) {
    recommendations.push({
      product: 'Business Continuity Insurance',
      priority: 'Medium',
      reason: 'Helps ensure your business can continue operating after a significant loss or disruption.',
      details: 'This insurance provides funds to help your business continue operating if a key person dies or becomes critically ill, covering expenses like hiring temporary staff or implementing continuity plans.'
    });
  }
  
  return recommendations;
}