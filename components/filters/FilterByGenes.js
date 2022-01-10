import React from 'react';
import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import ToggleButton from 'components/ui/ToggleButton';

import useFilterByGene from 'hooks/useFilterByGene';

const FilterByGenes = () => {
  const { allowed, matchR1, matchR2, setMatchR1, setMatchR2 } =
    useFilterByGene();

  return (
    <section>
      <h3 className="text-gray-500 uppercase font-bold text-xs mb-4">
        Filter by Genes
      </h3>
      {allowed ? (
        <>
          <ToggleButton
            label="Match r1 Gene"
            checked={!!matchR1}
            onChange={(value) => setMatchR1(value)}
            className="mb-4"
          />
          <ToggleButton
            label="Match r2 Gene"
            checked={!!matchR2}
            onChange={(value) => setMatchR2(value)}
            className="mb-4"
          />
        </>
      ) : (
        <p className="text-xs text-gray-500">
          You must at least one part to match.
        </p>
      )}
    </section>
  );
};

export default FilterByGenes;
