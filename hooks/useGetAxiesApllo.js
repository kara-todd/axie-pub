import { gql, useQuery } from "@apollo/client";
import _get from 'lodash.get';

const { AxieGene } = require('agp-npm/dist/axie-gene');

const GET_AXIE_BRIEFLIST = gql`
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

const variables = {
  from: cursor * size,
  size: size,
  sort: 'PriceAsc',
  auctionType: 'Sale',
  owner: null,
  criteria: {
    region: null,
    parts: null,
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
