import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, text, first }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`px-6 py-6 transition-colors duration-300 transform -skew-x-12  border-r border-yellow-800 hover:text-gray-900 hover:bg-yellow-400 ${
        location.pathname === to ? 'bg-yellow-300' : ''
      } ${first ? 'border-l' : ''}`}
    >
      <span className="inline-block transform skew-x-12">{text}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 space-x-4 text-gray-900 align-middle bg-gray-100 text-l">
      {/* Logo */}
      <Link
        to="/"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </span>
        Tailwind-app
      </Link>
      {/* Primary */}
      <div className="flex">
        <NavItem to="/card" text="Cards" first />
        <NavItem to="/pricing" text="Pricing" />
      </div>
      {/* Secondary */}

      <div className="flex">
        <NavItem to="/signin" text="Sign In" first />
        <NavItem to="/signup" text="Sign up" />
      </div>
    </nav>
  );
};

export default Navbar;
