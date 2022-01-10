import React from 'react';

import FilterByClass from 'components/filters/FilterByClass';
import FilterByGenes from 'components/filters/FilterByGenes';
import FilterByTrait from 'components/filters/FilterByTrait';
import FilterByFeature from 'components/filters/FilterByFeature';
import FilterByRange from 'components/filters/FilterByRange';

import Select from 'components/ui/Select';
import Input from 'components/ui/Input';

const AxieFilters = () => (
  <>
    <h2 className="text-lg font-bold mb-4">Filters</h2>

    <div className="relative z-20">
      <FilterByClass />
      <FilterByTrait />
    </div>

    <section className="border-b border-gray-800 mb-4 pb-4 grid grid-cols-2 gap-y-4">
      <FilterByFeature label="Pureness" name="pureness" />
      <FilterByFeature label="Japanese" name="numJapan" />
      <FilterByFeature label="Mystic" name="numMystic" />
      <FilterByFeature label="Christmas" name="numXmas" />
    </section>

    <section className="border-b border-gray-800 mb-4 pb-4">
      <h3 className="text-gray-500 uppercase font-bold text-xs mb-4">Breeds</h3>
      <FilterByRange
        name="breedCount"
        Input={
          <Select
            className="w-full"
            inputClass={'w-full'}
            options={[0, 1, 2, 3, 4, 5, 6, 7]}
          />
        }
      />
    </section>

    <section className="border-b border-gray-800 mb-4 pb-4">
      <h3 className="text-gray-500 uppercase font-bold text-xs mb-4">
        Genetic Purity
      </h3>
      <div className="flex">
        <FilterByRange
          className={'w-full'}
          name="purity"
          Input={<Input className="w-full" type="number" min="0" max="100" />}
        />
      </div>
    </section>

    <FilterByGenes />
  </>
);

export default AxieFilters;
