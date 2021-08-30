import React from 'react';
import tw from 'twin.macro';

import AxieIcon from 'components/axie-icon/AxieIcon';

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

const FilterByClass = ({ selected, onAdd, onRemove }) => (
  <section tw="mb-4">
    <h2 tw="text-gray-500 uppercase font-bold text-xs">Class</h2>
    <div tw="mt-2 flex w-full flex-wrap">
      {axieClasses.map((cls) => (
        <label
          tw="mb-2 w-2/4 flex items-center relative cursor-pointer"
          key={cls}
        >
          <input
            tw="w-5 h-5 mr-2"
            type="checkbox"
            value={cls}
            checked={selected.includes(cls)}
            onChange={() =>
              selected.includes(cls) ? onRemove(cls) : onAdd(cls)
            }
          />

          <AxieIcon tw="w-5 h-5 mr-2" cls={cls} />
          {cls}
        </label>
      ))}
    </div>
  </section>
);

export default FilterByClass;
