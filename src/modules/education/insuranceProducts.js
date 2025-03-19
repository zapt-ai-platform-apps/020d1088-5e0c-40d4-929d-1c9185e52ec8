export const insuranceProducts = [
  {
    id: 'life-insurance',
    category: 'family',
    name: 'Life Insurance',
    description: 'Provides a tax-free lump sum payment to your beneficiaries if you die during the term of the policy.',
    keyFeatures: [
      'Provides financial security for your dependents',
      'Can help pay off debts like mortgages',
      'Tax-free payout to beneficiaries',
      'Can be term-based or whole-of-life'
    ],
    suitableFor: [
      'People with financial dependents',
      'Mortgage holders',
      'Those with significant debts',
      'Business owners with personal guarantees'
    ],
    caseStudy: {
      scenario: 'John, 35, has a young family with two children and a mortgage of £250,000. He took out a decreasing term life insurance policy that would pay off his mortgage if he died before it was fully repaid.',
      outcome: 'After John sadly passed away unexpectedly at age 42, the policy paid out £210,000 (the remaining mortgage balance), allowing his family to stay in their home without the financial burden of mortgage payments.'
    }
  },
  {
    id: 'income-protection',
    category: 'family',
    name: 'Income Protection',
    description: 'Provides regular monthly payments to replace part of your income if you\'re unable to work due to illness or injury.',
    keyFeatures: [
      'Replaces a percentage of your income (typically 50-70%)',
      'Payments continue until you return to work, retire, or the policy ends',
      'Different waiting periods (deferred periods) available',
      'Can cover most illnesses and injuries that prevent you from working'
    ],
    suitableFor: [
      'Self-employed individuals',
      'Those with limited sick pay from employers',
      'Primary household earners',
      'People with ongoing financial commitments'
    ],
    caseStudy: {
      scenario: 'Sarah, a self-employed consultant, took out income protection that would pay 60% of her income after a 3-month deferred period if she couldn\'t work due to illness or injury.',
      outcome: 'When Sarah developed severe back problems requiring surgery and a 10-month recovery period, her income protection provided £2,500 monthly payments, enabling her to cover essential expenses and focus on recovery without financial stress.'
    }
  },
  {
    id: 'critical-illness',
    category: 'family',
    name: 'Critical Illness Cover',
    description: 'Pays a tax-free lump sum if you\'re diagnosed with one of the specific critical illnesses covered by the policy.',
    keyFeatures: [
      'One-time lump sum payment upon diagnosis',
      'Covers specific serious illnesses (typically cancer, heart attack, stroke)',
      'Can be standalone or combined with life insurance',
      'Use the payout however you need (medical costs, home modifications, etc.)'
    ],
    suitableFor: [
      'Those with family history of serious illness',
      'People who want financial protection beyond what state benefits provide',
      'Mortgage holders',
      'Parents with dependent children'
    ],
    caseStudy: {
      scenario: 'Emma, 45, added critical illness cover to her life insurance policy. The combined policy provided £150,000 of coverage for both death and specified critical illnesses.',
      outcome: 'When Emma was diagnosed with breast cancer, her critical illness policy paid out the full £150,000. This allowed her to take extended time off work for treatment, pay for private therapy not covered by the NHS, and make mortgage payments without financial worry during her recovery.'
    }
  },
  {
    id: 'mortgage-protection',
    category: 'family',
    name: 'Mortgage Protection Insurance',
    description: 'Designed specifically to cover your mortgage payments if you die or can\'t work due to critical illness.',
    keyFeatures: [
      'Can be decreasing term (for repayment mortgages) or level term (for interest-only mortgages)',
      'Ensures your mortgage is paid off or payments are maintained',
      'Often cheaper than standard life insurance as the payout decreases over time',
      'Can include critical illness coverage'
    ],
    suitableFor: [
      'New homeowners',
      'Those remortgaging',
      'People with dependent family members',
      'Those with limited savings to cover mortgage payments'
    ],
    caseStudy: {
      scenario: 'Mark and Lisa took out a decreasing term mortgage protection policy when they bought their first home with a £300,000 mortgage over 25 years.',
      outcome: 'Ten years later, when Mark suffered a severe stroke covered under the critical illness element of their policy, the insurance paid off the remaining £200,000 mortgage balance. This allowed the family to keep their home without mortgage payments while adjusting to their new circumstances.'
    }
  },
  {
    id: 'key-person',
    category: 'business',
    name: 'Key Person Insurance',
    description: 'Protects businesses against the financial impact of losing a key person through death or serious illness.',
    keyFeatures: [
      'Provides a lump sum to the business if a key person dies or suffers a critical illness',
      'Helps cover lost profits, recruitment costs, or business loans',
      'Can include life insurance and/or critical illness cover',
      'Policy owned and paid for by the business'
    ],
    suitableFor: [
      'Businesses dependent on specific individuals for success',
      'Small and medium-sized enterprises (SMEs)',
      'Companies with key revenue generators or specialists',
      'Businesses with significant outstanding loans'
    ],
    caseStudy: {
      scenario: 'A software development company took out key person insurance on their lead developer, who was responsible for their core product maintenance and development.',
      outcome: 'When the developer was diagnosed with a serious illness and had to leave the company, the policy paid out £250,000. This allowed the company to hire temporary contractors, fund the recruitment of a replacement, and maintain business continuity during the transition period.'
    }
  },
  {
    id: 'partnership-protection',
    category: 'business',
    name: 'Shareholder/Partnership Protection',
    description: 'Ensures business continuity by providing funds for remaining partners/shareholders to buy the shares of a deceased or critically ill partner/shareholder.',
    keyFeatures: [
      'Ensures ownership stays with remaining partners/shareholders',
      'Provides fair value to the deceased partner\'s estate or the critically ill partner',
      'Usually structured with cross-option agreements',
      'Can include life insurance and/or critical illness cover'
    ],
    suitableFor: [
      'Business partnerships',
      'Companies with multiple shareholders',
      'Family businesses with succession concerns',
      'Businesses where ownership is critical to operations'
    ],
    caseStudy: {
      scenario: 'Three partners in an accounting firm set up partnership protection insurance with a cross-option agreement. Each partner was insured for the value of their 33% share (£300,000).',
      outcome: 'When one partner passed away unexpectedly, the insurance provided the remaining partners with £300,000 to buy the deceased partner\'s share from his estate. This allowed the business to continue operating smoothly while ensuring the partner\'s family received fair value for his share of the business.'
    }
  },
  {
    id: 'business-loan',
    category: 'business',
    name: 'Business Loan Protection',
    description: 'Covers business loans in the event of the death or critical illness of a business owner or key person who guaranteed the loan.',
    keyFeatures: [
      'Pays out a lump sum to repay specific business loans',
      'Prevents personal guarantees from being called in',
      'Can be level or decreasing term',
      'Provides security for both the business and the guarantor\'s family'
    ],
    suitableFor: [
      'Business owners with personal guarantees on loans',
      'Companies with significant business debt',
      'Businesses with commercial mortgages',
      'Start-ups with founder-guaranteed financing'
    ],
    caseStudy: {
      scenario: 'A manufacturing company took out a £500,000 business loan to purchase new equipment, with the owner providing a personal guarantee. They also took out business loan protection insurance to cover the loan amount.',
      outcome: 'When the owner passed away three years later, the policy paid the outstanding loan balance of £425,000 directly to the lender. This prevented the lender from claiming against the owner\'s estate via the personal guarantee, protecting both the business assets and the owner\'s family.'
    }
  },
  {
    id: 'relevant-life',
    category: 'business',
    name: 'Relevant Life Policy',
    description: 'A tax-efficient way for businesses to provide death-in-service benefits for employees (including directors).',
    keyFeatures: [
      'Provides a tax-free lump sum to the employee\'s beneficiaries',
      'Premiums are tax-deductible business expense',
      'No employer or employee National Insurance contributions',
      'Not counted as a benefit in kind'
    ],
    suitableFor: [
      'Small businesses that can\'t offer a group life scheme',
      'Company directors wanting tax-efficient life cover',
      'Businesses looking to enhance employee benefits',
      'High-earning employees affected by pension lifetime allowance'
    ],
    caseStudy: {
      scenario: 'A small digital agency with 8 employees set up relevant life policies for each team member, including the director, with benefit amounts based on 4x each person\'s salary.',
      outcome: 'When one of the employees passed away, their family received a tax-free lump sum of £140,000 (4x their £35,000 salary). The company had benefited from tax relief on the premiums, and the employee\'s family received significantly more than would have been possible through a personally-funded policy for the same cost.'
    }
  }
];