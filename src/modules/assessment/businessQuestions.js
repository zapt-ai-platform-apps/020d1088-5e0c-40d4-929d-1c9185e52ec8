export const businessQuestions = [
  {
    id: 'businessType',
    question: 'What type of business do you own or operate?',
    type: 'radio',
    options: [
      { value: 'sole-trader', label: 'Sole trader' },
      { value: 'partnership', label: 'Partnership' },
      { value: 'limited-company', label: 'Limited company' },
      { value: 'llp', label: 'Limited liability partnership (LLP)' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'businessSize',
    question: 'How many employees does your business have?',
    type: 'radio',
    options: [
      { value: 'just-me', label: 'Just me' },
      { value: '2-5', label: '2-5 employees' },
      { value: '6-20', label: '6-20 employees' },
      { value: '21-50', label: '21-50 employees' },
      { value: '50-plus', label: 'More than 50 employees' },
    ],
  },
  {
    id: 'businessAge',
    question: 'How long has your business been operating?',
    type: 'radio',
    options: [
      { value: 'startup', label: 'Less than 1 year' },
      { value: '1-3-years', label: '1-3 years' },
      { value: '4-10-years', label: '4-10 years' },
      { value: 'over-10-years', label: 'Over 10 years' },
    ],
  },
  {
    id: 'keyPersons',
    question: 'Does your business depend heavily on key individuals?',
    type: 'radio',
    options: [
      { value: 'just-me', label: 'Yes, just me' },
      { value: 'few-key-people', label: 'Yes, a few key people (including me)' },
      { value: 'management-team', label: 'Yes, our management team' },
      { value: 'no-dependence', label: 'No, the business isn\'t dependent on specific individuals' },
    ],
  },
  {
    id: 'businessDebts',
    question: 'Does your business have any loans or financial obligations?',
    type: 'checkbox',
    options: [
      { value: 'none', label: 'No business debt' },
      { value: 'business-loan', label: 'Business loan' },
      { value: 'commercial-mortgage', label: 'Commercial mortgage' },
      { value: 'asset-finance', label: 'Asset finance/leasing' },
      { value: 'personal-guarantees', label: 'Loans with personal guarantees' },
    ],
  },
  {
    id: 'successionPlan',
    question: 'Do you have a formal succession plan for your business?',
    type: 'radio',
    options: [
      { value: 'yes-documented', label: 'Yes, fully documented' },
      { value: 'informal', label: 'Yes, but it\'s informal' },
      { value: 'planning', label: 'No, but we\'re planning to create one' },
      { value: 'no-plan', label: 'No succession plan' },
    ],
  },
  {
    id: 'primaryBusinessConcern',
    question: 'What is your primary business protection concern?',
    type: 'radio',
    options: [
      { value: 'key-person', label: 'Protecting against the loss of a key person' },
      { value: 'business-continuity', label: 'Ensuring business continuity' },
      { value: 'ownership-transition', label: 'Smooth ownership transition' },
      { value: 'loan-protection', label: 'Protection for business loans' },
      { value: 'partners-shareholders', label: 'Protecting partners/shareholders' },
    ],
  },
];