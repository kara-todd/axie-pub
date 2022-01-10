import React from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import useAxieList from 'hooks/useAxieList';

const FilterByRange = ({ Input, name, className }) => {
  const { criteria, setRange } = useAxieList();
  const [min, max] = _get(criteria, name, []);

  return (
    <div className={`flex ${className}`}>
      {React.cloneElement(Input, {
        id: `min-${name}`,
        label: 'Min',
        value: min,
        onChange: (value) =>
          setRange(name)([value, max].map((v) => parseInt(v, 10))),
      })}
      <div className="w-8" />
      {React.cloneElement(Input, {
        id: `max-${name}`,
        label: 'Max',
        value: max,
        onChange: (value) =>
          setRange(name)([min, value].map((v) => parseInt(v, 10))),
      })}
    </div>
  );
};

export default FilterByRange;
