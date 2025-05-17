
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Use Link for client-side routing

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text section-padding">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-aesthetic-blue">404</h1>
        <p className="text-2xl mb-6">Oops! Page not found.</p>
        <p className="mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link 
            to="/" 
            className="px-6 py-3 bg-aesthetic-blue text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 dark:hover:bg-sky-400 transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
