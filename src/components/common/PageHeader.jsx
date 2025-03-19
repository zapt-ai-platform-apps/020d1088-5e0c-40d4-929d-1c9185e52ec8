import React from 'react';

export function PageHeader({ title, description }) {
  return (
    <div className="bg-gradient-to-r from-accent2 to-accent1 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {description && (
          <p className="mt-4 text-lg text-white/90 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}