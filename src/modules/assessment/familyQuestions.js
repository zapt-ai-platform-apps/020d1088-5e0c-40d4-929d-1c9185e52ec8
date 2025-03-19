export const familyQuestions = [
  {
    id: 'maritalStatus',
    question: 'What is your marital status?',
    type: 'radio',
    options: [
      { value: 'single', label: 'Single' },
      { value: 'married', label: 'Married' },
      { value: 'partnership', label: 'Civil Partnership' },
      { value: 'divorced', label: 'Divorced' },
      { value: 'widowed', label: 'Widowed' },
    ],
  },
  {
    id: 'dependents',
    question: 'Do you have any dependents?',
    type: 'radio',
    options: [
      { value: 'none', label: 'No dependents' },
      { value: 'children', label: 'Yes, children under 18' },
      { value: 'adult-children', label: 'Yes, adult children' },
      { value: 'parents', label: 'Yes, parents or other family members' },
      { value: 'multiple', label: 'Yes, multiple categories' },
    ],
  },
  {
    id: 'income',
    question: 'What is your annual household income?',
    type: 'radio',
    options: [
      { value: 'under-30k', label: 'Under £30,000' },
      { value: '30k-50k', label: '£30,000 - £50,000' },
      { value: '50k-75k', label: '£50,000 - £75,000' },
      { value: '75k-100k', label: '£75,000 - £100,000' },
      { value: '100k-plus', label: 'Over £100,000' },
    ],
  },
  {
    id: 'mortgage',
    question: 'Do you have a mortgage or other significant loans?',
    type: 'radio',
    options: [
      { value: 'no-debt', label: 'No mortgage or significant debt' },
      { value: 'mortgage', label: 'Yes, I have a mortgage' },
      { value: 'other-loans', label: 'Yes, I have other significant loans' },
      { value: 'both', label: 'Yes, I have both a mortgage and other loans' },
    ],
  },
  {
    id: 'existingCoverage',
    question: 'Do you have any existing life or protection insurance?',
    type: 'checkbox',
    options: [
      { value: 'none', label: 'No existing coverage' },
      { value: 'life', label: 'Life insurance' },
      { value: 'critical-illness', label: 'Critical illness cover' },
      { value: 'income-protection', label: 'Income protection' },
      { value: 'other', label: 'Other protection policies' },
    ],
  },
  {
    id: 'healthStatus',
    question: 'How would you describe your general health?',
    type: 'radio',
    options: [
      { value: 'excellent', label: 'Excellent' },
      { value: 'good', label: 'Good' },
      { value: 'fair', label: 'Fair' },
      { value: 'poor', label: 'Poor' },
    ],
  },
  {
    id: 'primaryConcern',
    question: 'What is your primary concern regarding protection insurance?',
    type: 'radio',
    options: [
      { value: 'family-financial-security', label: 'Ensuring my family is financially secure if I\'m unable to work' },
      { value: 'mortgage-payment', label: 'Making sure my mortgage can be paid off' },
      { value: 'income-replacement', label: 'Replacing my income if I become ill or injured' },
      { value: 'funeral-expenses', label: 'Covering funeral and end-of-life expenses' },
      { value: 'legacy', label: 'Leaving a financial legacy' },
    ],
  },
];