import React from 'react';

const Button = ({ disabled, className, ...props }) => (
  <button
    className={[
      'px-5 py-2 relative rounded transition border text-white border-gray-200',
      disabled
        ? `opacity-25 cursor-not-allowed`
        : `focus:outline-none active:border-gray-300 active:bg-gray-600 hover:bg-gray-400 hover:border-gray-100`,
      className,
    ].join(' ')}
    disabled={disabled}
    {...props}
  />
);

export default Button;
