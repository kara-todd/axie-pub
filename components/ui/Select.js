import React from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import tw from 'twin.macro';

const Select = ({ options, id, label, value, onChange, multiple }) => (
  <div tw="col-span-6 sm:col-span-3">
    <label htmlFor={id} tw="block text-sm font-medium text-gray-400">
      {label}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      tw="px-3 py-2 border transition border-gray-600 bg-gray-900 text-white placeholder-gray-600"
      onChange={(e) => {
        const value =
          e.target.value === 'any' ? 'any' : parseInt(e.target.value, 10);
        onChange(value);
      }}
      multiple={multiple}
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
