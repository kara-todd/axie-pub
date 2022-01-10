import React from 'react';
import _getArray from 'utis/get-array';

import AxieIcon from 'components/axie-icon/AxieIcon';

import useAxieList from 'hooks/useAxieList';

export const axieClasses = [
  'Beast',
  'Aquatic',
  'Plant',
  'Bird',
  'Bug',
  'Reptile',
  'Dawn',
  'Mech',
  'Dusk',
];

const AxieClass = ({ value, idx }) => {
  const { criteria, remove, add } = useAxieList();
  const checked = _getArray(criteria, 'classes').includes(value);
  return (
    <label
      className={[
        'relative',
        'px-2 py-1',
        `mb-2`,
        (idx % 3) + 1 === 2 ? 'mx-2' : 'mx-0',
        checked ? 'bg-blue-600' : 'bg-gray-800',
        'flex items-center',
        'rounded',
        'cursor-pointer text-sm',
      ]
        .filter((f) => f)
        .join(' ')}
      key={value}
    >
      <input
        className="sr-only"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() =>
          checked ? remove('classes')(value) : add('classes')(value)
        }
      />

      <AxieIcon
        className="w-[15] h-[15]"
        cls={value}
        fill={checked ? 'currentColor' : undefined}
      />
      <span className="pl-1">{value}</span>
    </label>
  );
};

const FilterByClass = () => (
  <section className="mb-4">
    <h2 className="text-gray-500 uppercase font-bold text-xs">Class</h2>
    <div className="mt-2 w-full flex flex-wrap">
      {axieClasses.map((cls, idx) => (
        <AxieClass key={cls} idx={idx} value={cls} />
      ))}
    </div>
  </section>
);

export default FilterByClass;
