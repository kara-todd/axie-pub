import React, { useEffect } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import FilterByClass from './FilterByClass';
import FilterByPart from './FilterByPart';
import Select from './ui/Select';
import Input from './ui/Input';

import useFilterCriteria from 'hooks/useFilterCriteria';

import tw from 'twin.macro';

const AxieFilters = ({ criteria, setCriteria }) => {
  const [state, dispatch] = useFilterCriteria(criteria);

  useEffect(() => {
    if (typeof setCriteria === 'function') {
      setCriteria(state);
    }
  }, [state, setCriteria]);

  const SelectFeatureCount = ({ label, name }) => (
    <Select
      options={['any', 1, 2, 3, 4, 5, 6]}
      label={label}
      id={name}
      value={_get(state, `${name}[0]`)}
      onChange={(value) => dispatch({ type: 'setCount', value, key: name })}
    />
  );

  const MinMaxRange = ({ Input, name }) => {
    const [min, max] = _get(state, name, []);
    const setRange = (value) =>
      dispatch({ type: 'setRange', value, key: name });

    return (
      <div tw="flex">
        {React.cloneElement(Input, {
          id: `min-${name}`,
          label: 'Min',
          value: min,
          onChange: (value) => setRange([value, max].map(parseInt)),
        })}
        <div tw="w-8" />
        {React.cloneElement(Input, {
          id: `max-${name}`,
          label: 'Max',
          value: max,
          onChange: (value) => setRange([min, value].map(parseInt)),
        })}
      </div>
    );
  };

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
        <MinMaxRange
          name="breedCount"
          Input={<Select options={[0, 1, 2, 3, 4, 5, 6, 7]} />}
        />
      </section>

      <section tw="border-b border-gray-800 mb-4 pb-4">
        {/* <Select
          options={['any', 1, 2, 3, 4, 5, 6]}
          label={'Pureness'}
          id="pureness"
          value={valueOrAny(_get(state, 'pureness[0]'))}
          onChange={(value) => dispatch({ type: 'pureness', value })}
        /> */}

        <SelectFeatureCount label="Pureness" name="pureness" />
        <SelectFeatureCount label="Japanese" name="numJapan" />
        <SelectFeatureCount label="Mystic" name="mystic" />
        <SelectFeatureCount label="Mystic" name="numMystic" />
      </section>

      <section tw="border-b border-gray-800 mb-4 pb-4">
        <h3 tw="text-gray-500 uppercase font-bold text-xs mb-4">
          Genetic Purity
        </h3>
        <div tw="flex">
          <MinMaxRange
            name="purity"
            Input={<Input tw="w-20" type="number" min="0" max="100" />}
          />
        </div>
      </section>
    </>
  );
};

export default AxieFilters;
