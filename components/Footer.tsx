import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Technocenter QA Hub. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Last Updated: December 2025 | @Dennis | V.1.0
        </p>
      </div>
    </footer>
  );
};