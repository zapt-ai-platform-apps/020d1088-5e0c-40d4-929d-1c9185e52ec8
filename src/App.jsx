import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ZaptBadge } from '@/components/common/ZaptBadge';

// Page components
import Home from '@/pages/Home';
import AssessmentStart from '@/pages/assessment/AssessmentStart';
import FamilyAssessment from '@/pages/assessment/FamilyAssessment';
import BusinessAssessment from '@/pages/assessment/BusinessAssessment';
import AssessmentResults from '@/pages/assessment/AssessmentResults';
import ProductExplorer from '@/pages/education/ProductExplorer';
import TermGlossary from '@/pages/education/TermGlossary';
import RiskVisualizer from '@/pages/tools/RiskVisualizer';
import BookAppointment from '@/pages/tools/BookAppointment';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Assessment Flow */}
          <Route path="/assessment" element={<AssessmentStart />} />
          <Route path="/assessment/family" element={<FamilyAssessment />} />
          <Route path="/assessment/business" element={<BusinessAssessment />} />
          <Route path="/assessment/results" element={<AssessmentResults />} />
          
          {/* Education Pages */}
          <Route path="/products" element={<ProductExplorer />} />
          <Route path="/glossary" element={<TermGlossary />} />
          
          {/* Tools */}
          <Route path="/visualizer" element={<RiskVisualizer />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ZaptBadge />
    </div>
  );
}