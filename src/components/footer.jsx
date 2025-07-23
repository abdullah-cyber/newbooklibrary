import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto shadow-sm">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Awesome Books. All rights reserved.</p>
        <small>
          Built with ❤️ by Your Name
        </small>
      </div>
    </footer>
  );
};
