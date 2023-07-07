'use client'; // Error components must be Client Components

import type { ReactNode } from 'react';
// import React, { useState } from 'react';

type ErrorBoundaryProps = {
  children?: ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  // const [hasError, setHasError] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  // Fallback UI when an error occurs
  return (
    <div className='flex flex-col items-center justify-between p-3 font-mono'>
      <h2>Something went wrong!</h2>
      <button
        className='mt-3 rounded-md bg-black px-5 py-3 text-white'
        onClick={refreshPage}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
