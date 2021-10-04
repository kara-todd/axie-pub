import React, { useEffect } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import FilterByClass from './FilterByClass';
import FilterByPart from './FilterByPart';

import useFilterCriteria from 'hooks/useFilterCriteria';

import tw from 'twin.macro';

const Select = ({ options, id, label, value, onChange }) => (
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
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const AxieFilters = ({ criteria, setCriteria }) => {
  const [state, dispatch] = useFilterCriteria(criteria);

  useEffect(() => {
    if (typeof setCriteria === 'function') {
      setCriteria(state);
    }
  }, [state, setCriteria]);

  return (
    <>
      <div tw="relative z-20">
        <FilterByClass
          selected={_getArray(state, 'classes')}
          onAdd={(value) => dispatch({ type: 'add', key: 'classes', value })}
          onRemove={(value) =>
            dispatch({ type: 'remove', key: 'classes', value })
          }
        />
        <FilterByPart
          selected={_getArray(state, 'parts')}
          onAdd={(value) => {
            dispatch({ type: 'add', key: 'parts', value });
          }}
          onRemove={(value) => {
            dispatch({ type: 'remove', key: 'parts', value });
          }}
        />
      </div>

      <section tw="border-b border-gray-800 mb-4 pb-4">
        <h3 tw="text-gray-500 uppercase font-bold text-xs mb-4">Breeds</h3>
        <div tw="flex">
          <Select
            options={[0, 1, 2, 3, 4, 5, 6, 7]}
            label={'Min'}
            id="minBreed"
            value={_get(state, 'breedCount[0]')}
            onChange={(value) => dispatch({ type: 'minBreed', value })}
          />
          <div tw="w-8" />
          <Select
            options={[0, 1, 2, 3, 4, 5, 6, 7]}
            label={'Max'}
            id="maxBreed"
            value={_get(state, 'breedCount[1]')}
            onChange={(value) => dispatch({ type: 'maxBreed', value })}
          />
        </div>
      </section>

      <section tw="border-b border-gray-800 mb-4 pb-4">
        <Select
          options={['any', 1, 2, 3, 4, 5, 6]}
          label={'Pureness'}
          id="pureness"
          value={
            !!_get(state, 'pureness[0]') ? _get(state, 'pureness[0]') : 'any'
          }
          onChange={(value) => dispatch({ type: 'pureness', value })}
        />
      </section>
    </>
  );
};

export default AxieFilters;
