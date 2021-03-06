import React from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

const Select = ({ className, options, id, label, value, onChange }) => (
  <div className={`col-span-6 sm:col-span-3 ${className}`}>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-400 mb-1"
    >
      {label}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      className="px-3 py-2 border transition border-gray-600 bg-gray-900 text-white placeholder-gray-600"
      onChange={(e) => {
        const value =
          e.target.value === 'any' ? 'any' : parseInt(e.target.value, 10);
        onChange(value);
      }}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
