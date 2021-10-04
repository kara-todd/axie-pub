import React, { useState } from 'react';
import _get from 'lodash.get';

import _getArray from 'utis/get-array';

import AxieCard from './AxieCard';
import AxieFilters from './AxieFilters';
import ToggleButton from 'components/ui/ToggleButton';

import tw from 'twin.macro';
import * as S from 'components/AxieList.styles';

import useAxieList from 'hooks/useAxieList';
import useFilterByGene from 'hooks/useFilterByGene';
import usePagination from 'hooks/usePagination';

const sortByQuality = (a, b) => _get(b, 'quality') - _get(a, 'quality');
const sortByPrice = (a, b) => _get(a, 'currentPrice') - _get(b, 'currentPrice');
const filterByPrice = (max, currency) => (axie) =>
  parseInt(_get(axie, `auction.${currency}`), 10) < max;

const StyledButton = ({ disabled, ...props }) => (
  <button
    tw={
      'px-5 py-2 relative rounded transition border text-white border-gray-200'
    }
    css={[
      disabled
        ? tw`opacity-25 cursor-not-allowed`
        : tw`focus:outline-none active:border-gray-300 active:bg-gray-600 hover:bg-gray-400 hover:border-gray-100`,
    ]}
    disabled={disabled}
    {...props}
  />
);

const PaginationBtn = ({ pg, label, onClick }) => (
  <StyledButton
    disabled={pg === undefined}
    onClick={onClick}
    title={`Page ${pg}`}
  >
    {label}
  </StyledButton>
);

const Pagination = ({ start, end, prev, next, totalResults, setPg }) => (
  <div tw="flex w-full justify-center items-center mb-4 p-5">
    <PaginationBtn pg={prev} onClick={() => setPg(prev)} label="Prev" />
    <p tw="flex flex-col mx-6">
      <span>
        Showing: {start} - {end}
      </span>{' '}
      <span>{totalResults} total matches</span>
    </p>
    <PaginationBtn pg={next} onClick={() => setPg(next)} label="Next" />
  </div>
);

const AxieList = () => {
  // const [pg, setPg] = useState(0);
  const [criteria, setCriteria] = useState({});
  const { axies, loading, total, loadMore } = useAxieList(criteria);
  const { filterByGenes, matchR1, matchR2, setMatchR1, setMatchR2 } =
    useFilterByGene(_get(criteria, 'parts'));
  const [enableGenes, setEnableGenes] = useState(true);
  const { items: list, pagination } = usePagination(
    axies.filter(filterByGenes),
    25
  );
  // const [minQuality, setMinQuality] = useState(0);

  const LoadMoreButton = () => (
    <StyledButton disabled={loading} onClick={loadMore}>
      {!loading && `Load More`}
      {loading && `Loading...`}
    </StyledButton>
  );

  return (
    <div tw="flex" style={{ height: 'calc(100vh - 50px)' }}>
      <section tw="flex flex-col h-full p-5 w-72 border-r border-b border-gray-800 overflow-y-auto">
        <h2 tw="text-lg font-bold mb-4">Filters</h2>

        <AxieFilters setCriteria={setCriteria} />

        <section>
          <h3 tw="text-gray-500 uppercase font-bold text-xs mb-4">Genes</h3>
          <ToggleButton
            label="Show Genes"
            checked={!!enableGenes}
            onChange={(value) => setEnableGenes(value)}
            tw="mb-4"
          />

          {_getArray(criteria, 'parts').length > 0 ? (
            <>
              <ToggleButton
                label="Match r1 Gene"
                checked={!!matchR1}
                onChange={(value) => setMatchR1(value)}
                tw="mb-4"
              />
              <ToggleButton
                label="Match r2 Gene"
                checked={!!matchR2}
                onChange={(value) => setMatchR2(value)}
                tw="mb-4"
              />
            </>
          ) : (
            <p tw="text-xs text-gray-500">
              You must select parts to filter by genes.
            </p>
          )}

          {/* <RangeSlider
            value={minQuality}
            onChange={(value) => setMinQuality(value)}
            formatLabel={(value) => `Min Quality ${value}%`}
            tw="mt-8"
          /> */}
        </section>

        {!loading && (
          <>
            <p tw="mt-4 mb-4 pt-4 border-t border-gray-800">
              Loaded {axies.length} of {total} axies
            </p>
            <LoadMoreButton />
          </>
        )}

        <p tw="mt-auto text-xs">
          Icons made by{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </section>

      <div tw="flex flex-col flex-1">
        <Pagination {...pagination} />
        <div tw="overflow-y-auto p-5">
          {!loading && <div css={S.cardGrid}>{list.map(AxieCard)}</div>}
        </div>
      </div>
    </div>
  );
};

export default AxieList;
