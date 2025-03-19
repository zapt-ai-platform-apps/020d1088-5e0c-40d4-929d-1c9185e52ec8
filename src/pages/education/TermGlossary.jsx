import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { glossaryTerms } from '@/modules/education/glossaryTerms';

export default function TermGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTerms = glossaryTerms
    .filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.term.localeCompare(b.term));
  
  // Group terms by first letter
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});
  
  // Get unique first letters for alphabet navigation
  const alphabet = Object.keys(groupedTerms).sort();
  
  return (
    <div>
      <PageHeader 
        title="Insurance Term Glossary"
        description="A comprehensive guide to protection insurance terminology to help you understand your options"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search terms or definitions"
                className="input pl-10 py-3 w-full"
              />
            </div>
          </div>
          
          {/* Alphabet navigation */}
          {filteredTerms.length > 0 && (
            <div className="mb-8 flex flex-wrap justify-center space-x-1 space-y-1">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 font-medium"
                >
                  {letter}
                </a>
              ))}
            </div>
          )}
          
          {/* Terms list */}
          {filteredTerms.length > 0 ? (
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {alphabet.map((letter) => (
                <div key={letter} id={letter}>
                  <h2 className="text-2xl font-bold text-primary mb-4">{letter}</h2>
                  <div className="space-y-6">
                    {groupedTerms[letter].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-lg shadow-sm p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900">{item.term}</h3>
                        <p className="mt-2 text-gray-700">{item.definition}</p>
                        {item.example && (
                          <div className="mt-3 text-sm text-gray-600 italic">
                            <span className="font-medium">Example:</span> {item.example}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No terms match your search. Try a different keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}