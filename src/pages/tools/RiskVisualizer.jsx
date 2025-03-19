import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/common/PageHeader';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function RiskVisualizer() {
  const [age, setAge] = useState(35);
  const [income, setIncome] = useState(45000);
  const [dependents, setDependents] = useState(1);
  const [mortgage, setMortgage] = useState(200000);
  const [savings, setSavings] = useState(15000);
  const [chartData, setChartData] = useState(null);
  const [protectionGapData, setProtectionGapData] = useState(null);
  
  // Update chart data when inputs change
  useEffect(() => {
    updateCharts();
  }, [age, income, dependents, mortgage, savings]);
  
  const updateCharts = () => {
    // Calculate financial impact over time
    const yearsToRetirement = 68 - age;
    const labels = Array.from({ length: yearsToRetirement }, (_, i) => `Age ${age + i}`);
    
    // Calculate cumulative income loss (adjusted for inflation at 2%)
    const cumulativeIncomeLoss = labels.map((_, i) => {
      const years = i + 1;
      return Math.round(income * years * (1 - Math.pow(0.98, years)) / 0.02);
    });
    
    // Calculate expenses projection (mortgage payments + living expenses for dependents)
    const averageYearsToRaiseDependents = 18;
    const annualDependentCost = 10000;
    const expensesProjection = labels.map((_, i) => {
      const years = i + 1;
      // Mortgage expenses (assuming 25-year term and linear repayment for simplicity)
      const mortgageYearsRemaining = Math.max(0, 25 - (years));
      const mortgageRatio = mortgageYearsRemaining / 25;
      
      // Dependent expenses (assuming they become independent at age 18)
      const dependentYearsRemaining = Math.max(0, averageYearsToRaiseDependents - years);
      const dependentRatio = dependentYearsRemaining / averageYearsToRaiseDependents;
      
      return Math.round(mortgage * mortgageRatio + dependents * annualDependentCost * dependentRatio * years);
    });
    
    // Calculate protection gap (income loss + expenses - savings)
    const protectionGap = cumulativeIncomeLoss.map((income, i) => {
      return Math.max(0, income + expensesProjection[i] - savings);
    });
    
    // Line chart data
    setChartData({
      labels,
      datasets: [
        {
          label: 'Cumulative Income Loss',
          data: cumulativeIncomeLoss,
          borderColor: '#651B60',
          backgroundColor: 'rgba(101, 27, 96, 0.1)',
          fill: true,
        },
        {
          label: 'Projected Expenses',
          data: expensesProjection,
          borderColor: '#8BB1C6',
          backgroundColor: 'rgba(139, 177, 198, 0.1)',
          fill: true,
        },
        {
          label: 'Protection Gap',
          data: protectionGap,
          borderColor: '#D2CDDC',
          backgroundColor: 'rgba(210, 205, 220, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
        },
      ],
    });
    
    // Calculate insurance coverage needs based on 10-year timeframe
    const tenYearIndex = Math.min(9, protectionGap.length - 1);
    const incomeProtectionNeeded = Math.round(cumulativeIncomeLoss[tenYearIndex] * 0.7); // 70% of income
    const mortgageProtectionNeeded = mortgage;
    const criticalIllnessNeeded = Math.round(income * 2.5); // 2.5 times annual income
    const lifeInsuranceNeeded = Math.round(protectionGap[tenYearIndex]);
    
    // Doughnut chart data for protection gap
    setProtectionGapData({
      labels: ['Income Protection', 'Mortgage Protection', 'Critical Illness', 'Life Insurance'],
      datasets: [
        {
          data: [incomeProtectionNeeded, mortgageProtectionNeeded, criticalIllnessNeeded, lifeInsuranceNeeded],
          backgroundColor: ['#651B60', '#8BB1C6', '#D2CDDC', '#9b4d96'],
          borderColor: ['#fff', '#fff', '#fff', '#fff'],
          borderWidth: 2,
        },
      ],
    });
  };
  
  return (
    <div>
      <PageHeader 
        title="Risk Assessment Visualizer"
        description="See how different life events could impact your financial future and identify protection gaps"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Personal Risk Profile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Your Age</label>
              <input
                type="number"
                id="age"
                min="18"
                max="65"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 35)}
                className="input w-full"
              />
            </div>
            
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">Annual Income (£)</label>
              <input
                type="number"
                id="income"
                min="0"
                step="1000"
                value={income}
                onChange={(e) => setIncome(parseInt(e.target.value) || 45000)}
                className="input w-full"
              />
            </div>
            
            <div>
              <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mb-1">Number of Dependents</label>
              <input
                type="number"
                id="dependents"
                min="0"
                max="10"
                value={dependents}
                onChange={(e) => setDependents(parseInt(e.target.value) || 1)}
                className="input w-full"
              />
            </div>
            
            <div>
              <label htmlFor="mortgage" className="block text-sm font-medium text-gray-700 mb-1">Mortgage/Debt (£)</label>
              <input
                type="number"
                id="mortgage"
                min="0"
                step="10000"
                value={mortgage}
                onChange={(e) => setMortgage(parseInt(e.target.value) || 200000)}
                className="input w-full"
              />
            </div>
            
            <div>
              <label htmlFor="savings" className="block text-sm font-medium text-gray-700 mb-1">Emergency Savings (£)</label>
              <input
                type="number"
                id="savings"
                min="0"
                step="1000"
                value={savings}
                onChange={(e) => setSavings(parseInt(e.target.value) || 15000)}
                className="input w-full"
              />
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-gray-600">
              Adjust the values above to see how different scenarios could affect your financial future and protection needs.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {chartData && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Financial Impact Over Time</h3>
              <div className="h-80">
                <Line 
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        title: {
                          display: true,
                          text: 'Amount (£)',
                        }
                      },
                      x: {
                        title: {
                          display: true,
                          text: 'Years',
                        }
                      }
                    },
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                              label += ': ';
                            }
                            if (context.parsed.y !== null) {
                              label += new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(context.parsed.y);
                            }
                            return label;
                          }
                        }
                      },
                      legend: {
                        position: 'bottom',
                      }
                    }
                  }}
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  This chart shows the potential financial impact over time due to loss of income,
                  projected expenses, and the resulting protection gap you may face.
                </p>
              </div>
            </div>
          )}
          
          {protectionGapData && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Recommended Coverage Types</h3>
              <div className="h-80 flex items-center justify-center">
                <Doughnut 
                  data={protectionGapData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            let label = context.label || '';
                            if (label) {
                              label += ': ';
                            }
                            if (context.raw !== null) {
                              label += new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(context.raw);
                            }
                            return label;
                          }
                        }
                      },
                      legend: {
                        position: 'bottom',
                      }
                    }
                  }}
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  This chart shows the recommended distribution of protection insurance coverage
                  based on your personal situation and financial needs.
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-primary">Take the Next Step</h3>
              <p className="mt-2 text-gray-600">
                Now that you understand your protection needs, take our detailed assessment
                or book a consultation with a protection specialist.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <Link to="/assessment" className="btn-outline cursor-pointer text-center">
                Take Assessment
              </Link>
              <Link to="/book-appointment" className="btn-primary cursor-pointer text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}