import React from 'react';

import _get from 'lodash.get';

const Input = ({
  className,
  id,
  label,
  value,
  onChange,
  placeholder,
  ...props
}) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-400">
      {label}
    </label>
    <input
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(_get(e, 'target.value'))}
      className="px-3 py-2 w-full border transition border-gray-600 bg-gray-900 text-white placeholder-gray-600"
      {...props}
    />
  </div>
);

export default Input;
