import React, { useEffect, useState } from 'react';
import _get from 'lodash.get';
import { useQuery } from '@apollo/client';

import _getArray from 'utis/get-array';

import AxieCard from './AxieCard';
import AxieFilters from './AxieFilters';
import ToggleButton from 'components/ui/ToggleButton';
import RangeSlider from 'components/ui/RangeSlider';

import tw from 'twin.macro';
import * as S from 'components/AxieList.styles';

import useAxieList from 'hooks/useAxieList';
import useFilterByGene from 'hooks/useFilterByGene';
import usePagination from 'hooks/usePagination';

const { AxieGene } = require('agp-npm/dist/axie-gene');

const addGenes = (axie) => {
  const axieGene = new AxieGene(_get(axie, 'genes'));
  return {
    ...axie,
    geneCalc: axieGene.genes,
    cls: axieGene.cls,
    quality: axieGene.getGeneQuality(),
  };
};

const sortByQuality = (a, b) => _get(b, 'quality') - _get(a, 'quality');
const sortByPrice = (a, b) => _get(a, 'currentPrice') - _get(b, 'currentPrice');

const filterByQuality =
  ([min, max]) =>
  (axie) =>
    parseInt(_get(axie, 'quality'), 10) >= min;

const filterByPrice = (max, currency) => (axie) =>
  parseInt(_get(axie, `auction.${currency}`), 10) < max;

const allGenesMatch = (axie, part, validParts) => {
  const d = _get(axie, `geneCalc.${part}.d.partId`);
  const r1 = _get(axie, `geneCalc.${part}.r1.partId`);
  const r2 = _get(axie, `geneCalc.${part}.r2.partId`);

  return (
    validParts.includes(d) && validParts.includes(r1) && validParts.includes(r2)
  );
};

const checkGenes = (axie, part, criteria) => {
  const validParts = _getArray(criteria, 'parts').filter((partId) =>
    partId.includes(`${part}-`)
  );
  return validParts.length ? allGenesMatch(axie, part, validParts) : true;
};

const parts = ['ears', 'eyes', 'horn', 'mouth', 'back', 'tail'];
const filterFullGene = (criteria) => (axie) =>
  parts.reduce(
    (isValid, part) => isValid && checkGenes(axie, part, criteria),
    true
  );

const perPage = 25;

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

const PaginationBtn = ({ pg, label }) => (
  <StyledButton disabled={!pg} onClick={() => setPg(pg)} title={`Page ${pg}`}>
    {label}
  </StyledButton>
);

const Pagination = ({ start, end, prev, next, totalResults }) => (
  <div tw="flex w-full justify-center items-center mb-4 p-5">
    <PaginationBtn pg={prev} label="Prev" />
    <p tw="flex flex-col mx-6">
      <span>
        Showing: {start} - {end}
      </span>{' '}
      <span>{totalResults} total matches</span>
    </p>
    <PaginationBtn pg={next} label="Next" />
  </div>
);

const AxieList = () => {
  // const [pg, setPg] = useState(0);
  const [criteria, setCriteria] = useState({});
  const [enableGenes, setEnableGenes] = useState(true);
  const [matchR1, setMatchR1] = useState(false);
  const [matchR2, setMatchR2] = useState(false);

  // const [isLoadingMore, setLoadingMore] = useState(false);
  const { axies, loading, total, loadMore } = useAxieList(criteria);
  const { setPg, items: list, pagination } = usePagination(axies, 25);
  // const { data, loading, error, fetchMore, refetch } =
  //   useQuery(AXIE_LIST_QUERY);

  // const [maxPrice, setMaxPrice] = useState(800);
  const [minQuality, setMinQuality] = useState(0);

  // const total = parseInt(_get(data, 'axies.total'), 10);
  // const axies = _getArray(data, 'axies.results');
  // const currentAxies = axies.length;

  // const axieList = axies
  //   .map(addGenes)
  //   .filter(filterByQuality([minQuality, 100]))
  //   // .filter(filterByPrice(maxPrice, 'currentPriceUSD'))
  //   .filter((axie) =>
  //     enableGenes &&
  //     _getArray(criteria, 'parts').length > 0 &&
  //     (matchR1 || matchR2)
  //       ? filterFullGene(criteria)(axie)
  //       : axie
  //   )
  //   .sort(sortByPrice);

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
            label="Enable Genes"
            checked={!!enableGenes}
            onChange={(value) => setEnableGenes(value)}
            tw="mb-4"
          />

          {_getArray(criteria, 'parts').length > 0 && (
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
          )}

          <RangeSlider
            value={minQuality}
            onChange={(value) => setMinQuality(value)}
            formatLabel={(value) => `Min Quality ${value}%`}
            tw="mt-8"
          />
        </section>

        {!loading && (
          <>
            <p tw="mt-4 mb-4 pt-4 border-t border-gray-800">
              Loaded {axies.length} of {total} axies
            </p>
            <LoadMoreButton />
          </>
        )}

        {/* <div>
          <label>
            Max price
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(_get(e, 'target.value'))}
            />
          </label>
        </div> */}

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
