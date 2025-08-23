import React from 'react'

const Button = ({ linkto, onClick, text, className = "" }) => {
  const baseClasses =
    "cursor-pointer inline-block text-center text-xs sm:text-sm md:text-base " +
    "px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 whitespace-nowrap " +
    "rounded-md font-bold bg-yellow-300 hover:scale-95 transition-all duration-200 " +
    className;

  if (linkto) {
    return (
      <a href={linkto} className={baseClasses}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {text}
    </button>
  );
};

export default Button;
