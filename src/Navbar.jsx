import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 text-gray-900 align-middle bg-gray-100 text-l">
      {/* Logo */}
      <a
        href="./"
        className="flex items-center py-6 mx-6 font-bold transition-colors duration-300 hover:text-gray-600"
      >
        <span className="mr-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </span>
        Tailwind-app
      </a>
      {/* Primary */}
      <div className="flex border-collapse">
        <a
          href="#"
          className="inline-block px-6 py-6 transition-colors duration-300 transform -skew-x-12 border-l border-r border-yellow-800 hover:text-gray-900 hover:bg-yellow-400"
        >
          <span className="inline-block transform skew-x-12">Features</span>
        </a>
        <a
          href="#"
          className="px-6 py-6 transition-colors duration-300 transform -skew-x-12 border-r border-yellow-800 hover:text-gray-900 hover:bg-yellow-400"
        >
          <span className="inline-block transform skew-x-12">Pricing</span>
        </a>
      </div>
      {/* Secondary */}
      <div className="flex">
        <a
          href="#"
          className="px-6 py-6 transition-colors duration-300 transform -skew-x-12 border-l border-r border-yellow-800 hover:text-gray-900 hover:bg-yellow-400"
        >
          <span className="inline-block transform skew-x-12">Sign In</span>
        </a>
        <a
          href="#"
          className="px-6 py-6 transition-colors duration-300 transform -skew-x-12 border-r border-yellow-800 hover:text-gray-900 hover:bg-yellow-400"
        >
          <span className="inline-block transform skew-x-12">Sign Up</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
