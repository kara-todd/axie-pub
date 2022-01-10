import React, { useState } from 'react';
import _get from 'lodash.get';

import _getArray from 'utis/get-array';

import AxieCard from 'components/AxieCard';
import AxieFilters from 'components/AxieFilters';
import Button from 'components/ui/Button';
import Credits from 'components/Credits';
import Pagination from 'components/ui/Pagination';

import useAxieList, { AxieListProvider } from 'hooks/useAxieList';
import usePagination from 'hooks/usePagination';

const AxieList = () => {
  const [criteria, setCriteria] = useState({});
  const { axies, loading, total, loadMore } = useAxieList(criteria);
  const { items: list, pagination } = usePagination(axies, 25);

  return (
    <div className="flex h-[calc(100vh-50px)]">
      <section className="flex flex-col h-full p-5 w-[300px] border-r border-b border-gray-800 overflow-y-auto">
        <AxieFilters setCriteria={setCriteria} />

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
            {!loading && (
              <span className="text-xs mt-2 text-gray-500">
                {total} total matches
              </span>
            )}
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
          {(!loading || !!list.length) && (
            <div className="grid gap-6 grid-cols-auto-fill-cards">
              {list.map(AxieCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AxieListWithProvider = () => (
  <AxieListProvider>
    <AxieList />
  </AxieListProvider>
);

export default AxieListWithProvider;
