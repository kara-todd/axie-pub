import React, { useState } from 'react';
import _get from 'lodash.get';

import _getArray from 'utis/get-array';

import AxieCard from 'components/AxieCard';
import AxieFilters from 'components/AxieFilters';
import Button from 'components/ui/Button';
import Credits from 'components/Credits';
import Pagination from 'components/ui/Pagination';
import ToggleButton from 'components/ui/ToggleButton';

import useAxieList from 'hooks/useAxieList';
import useFilterByGene from 'hooks/useFilterByGene';
import usePagination from 'hooks/usePagination';

// const sortByPrice = (a, b) => _get(a, 'currentPrice') - _get(b, 'currentPrice');
// const filterByPrice = (max, currency) => (axie) => parseInt(_get(axie, `auction.${currency}`), 10) < max;

const AxieList = () => {
  const [criteria, setCriteria] = useState({});
  const { axies, loading, total, loadMore } = useAxieList(criteria);
  const { filterByGenes, matchR1, matchR2, setMatchR1, setMatchR2 } =
    useFilterByGene(_get(criteria, 'parts'));
  const [enableGenes, setEnableGenes] = useState(true);
  const { items: list, pagination } = usePagination(
    axies.filter(filterByGenes),
    25
  );

  return (
    <div className="flex h-[calc(100vh-50px)]">
      <section className="flex flex-col h-full p-5 w-72 border-r border-b border-gray-800 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        <AxieFilters setCriteria={setCriteria} />

        <section>
          <h3 className="text-gray-500 uppercase font-bold text-xs mb-4">
            Genes
          </h3>
          <ToggleButton
            label="Show Genes"
            checked={!!enableGenes}
            onChange={(value) => setEnableGenes(value)}
            className="mb-4"
          />

          <h3 className="text-gray-500 uppercase font-bold text-xs mt-8 mb-4">
            Filter by Genes
          </h3>
          {_getArray(criteria, 'parts').length > 0 ? (
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
              You must select parts to filter by genes.
            </p>
          )}
        </section>

        {!loading && (
          <div className="mt-4 mb-4 py-4 border-t border-gray-800">
            <p className="pb-4 text-center">
              Loaded {axies.length} of {total} axies
            </p>
            <Button disabled={loading} onClick={loadMore} className="w-full">
              {loading ? `Loading...` : `Load More`}
            </Button>
          </div>
        )}

        <Credits className="mt-auto" />
      </section>

      <div className="flex flex-col flex-1">
        <Pagination {...pagination}>
          <span>
            <span className="text-xs mt-2 text-gray-500">
              {total} total matches
            </span>
            <button
              disabled={loading}
              onClick={loadMore}
              className="text-xs border-b border-white/20 ml-2"
            >
              {loading ? `Loading...` : `load next 100`}
            </button>
          </span>
        </Pagination>
        <div className="overflow-y-auto p-5">
          {(!loading || list.length) && (
            <div className="grid gap-6 grid-cols-auto-fill-cards">
              {list.map(AxieCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AxieList;
