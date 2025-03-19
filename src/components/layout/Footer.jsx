import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-auto"
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64"
                alt="Lifepoint"
              />
              <span className="font-display text-accent2 text-xl font-semibold">Lifepoint</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Protection Insurance Needs Analyzer by Lifepoint Lifecare
            </p>
            <div className="mt-6">
              <a href="https://lifepointlifecare.co.uk" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent1 hover:text-accent1-dark">
                Visit our website
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/assessment" className="text-sm text-gray-600 hover:text-accent1">
                  Protection Needs Assessment
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-accent1">
                  Insurance Product Explorer
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-sm text-gray-600 hover:text-accent1">
                  Insurance Term Glossary
                </Link>
              </li>
              <li>
                <Link to="/visualizer" className="text-sm text-gray-600 hover:text-accent1">
                  Risk Assessment Visualizer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/book-appointment" className="text-sm text-gray-600 hover:text-accent1">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <a href="mailto:contact@lifepointlifecare.co.uk" className="text-sm text-gray-600 hover:text-accent1">
                  Email Us
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Lifepoint Lifecare. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}