import React from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

const Select = ({
  className,
  inputClass,
  options,
  id,
  label,
  value,
  onChange,
}) => (
  <div className={className}>
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
      className={[
        'transition',
        'border border-gray-600',
        'px-3 py-2',
        'bg-gray-900',
        'text-white placeholder-gray-600',
        inputClass,
      ]
        .filter((f) => f)
        .join(' ')}
      onChange={(e) => {
        onChange(e.target.value);
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
