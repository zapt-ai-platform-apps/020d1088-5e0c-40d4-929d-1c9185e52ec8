import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-primary cursor-pointer inline-block">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}