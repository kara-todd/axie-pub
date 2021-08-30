import { request } from 'graphql-request';
import { useQuery } from 'react-query';
import _get from 'lodash.get';

const { AxieGene } = require('agp-npm/dist/axie-gene');

const GET_AXIE_BRIEFLIST = /* GraphQL */ `
  query GetAxieBriefList(
    $auctionType: AuctionType
    $criteria: AxieSearchCriteria
    $from: Int
    $sort: SortBy
    $size: Int
    $owner: String
  ) {
    axies(
      from: $from
      size: $size
      sort: $sort
      owner: $owner
      auctionType: $auctionType
      criteria: $criteria
    ) {
      total
      results {
        id
        genes
        newGenes
        auction {
          currentPrice
          currentPriceUSD
          __typename
        }
        breedCount
        stage
        owner
        __typename
      }
    }
  }
`;

const fetchAxiePage = async ({ cursor = 0, size }) =>
  await request(
    'https://axieinfinity.com/graphql-server-v2/graphql?r=axie.pub',
    GET_AXIE_BRIEFLIST,
    {
      from: cursor * size,
      size: size,
      sort: 'PriceAsc',
      auctionType: 'Sale',
      owner: null,
      criteria: {
        region: null,
        parts: ['back-ronin', 'horn-imp'],
        bodyShapes: null,
        classes: null,
        stages: null,
        numMystic: null,
        pureness: [6],
        title: null,
        breedable: null,
        breedCount: [0],
        hp: [],
        skill: [],
        speed: [],
        morale: [],
      },
    }
  );

const _getArray = (data, key) =>
  Array.isArray(_get(data, key)) ? _get(data, key) : [];

const fetchAxies = async () => {
  const size = 100;
  const data = await fetchAxiePage({ cursor: 0, size });
  let axies = _getArray(data, 'axies.results');

  const total = _get(data, 'axies.total');

  for (let pg = 1; pg * size < total; pg++) {
    const pageData = await fetchAxiePage({ cursor: pg, size });
    axies = [...axies, _getArray(pageData, 'axies.results')];
  }

  return {
    total,
    axies,
  };
};

const addGenes = (axie) => {
  const axieGene = new AxieGene(_get(axie, 'genes'));
  return {
    ...axie,
    // geneCalc: axieGene.genes,
    cls: axieGene.cls,
    quality: axieGene.getGeneQuality(),
  };
};

const useGetAxies = () => {
  const { data, isLoading, error } = useQuery('getAxies', fetchAxies);

  return {
    loading: isLoading,
    axies: _getArray(data, 'axies').map(addGenes),
    // status,
    error,
  };
};

export default useGetAxies;
