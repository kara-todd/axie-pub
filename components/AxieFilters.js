import React, { useEffect } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import FilterByClass from './FilterByClass';
import FilterByPart from './FilterByPart';
import RangeSlider from 'components/ui/RangeSlider';

import useFilterCriteria from 'hooks/useFilterCriteria';

import tw from 'twin.macro';

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
        {/* <RangeSlider
          value={_get(state, 'breedCount[0]')}
          min={0}
          max={7}
          label={'Min Breeds'}
          onChange={(value) => dispatch({ type: 'minBreed', value })}
          tw="mt-8"
        /> */}

        <RangeSlider
          value={_get(state, 'breedCount[1]')}
          min={0}
          max={7}
          label={'Max Breeds'}
          onChange={(value) => dispatch({ type: 'maxBreed', value })}
          tw="mt-8"
        />
      </section>
    </>
  );
};

export default AxieFilters;
