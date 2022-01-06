import React, { createContext } from 'react';
import _get from 'lodash.get';
import { useQuery, gql } from '@apollo/client';

import _getArray from 'utis/get-array';

const AxieListContext = createContext();

const AXIE_LIST_QUERY = gql`
  query GetAxieBriefListGetAxieBriefList(
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
      filterStuckAuctions: true
    ) {
      total
      results {
        id
        genes
        newGenes
        name
        class
        breedCount
        image
        title
        stats {
          hp
          morale
          skill
          speed
        }
        auction {
          currentPrice
          currentPriceUSD
          __typename
        }
        __typename
      }
    }
  }
`;

const useAxieList = (criteria) => {
  const { data, loading, error, fetchMore } = useQuery(AXIE_LIST_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      from: 0,
      size: 100,
      sort: 'PriceAsc',
      auctionType: 'Sale',
      owner: null,
      criteria,
    },
  });

  const axies = _getArray(data, 'axies.results');

  return {
    loading,
    error,
    loadMore: async () =>
      await fetchMore({
        variables: {
          from: axies.length,
        },
      }),
    axies,
    total: parseInt(_get(data, 'axies.total'), 10),
  };
};

export const AxieListProvder = () => {
  const [criteria, setCriteria] = useState({});
  const queryData = useAxieList(criteria);
  const [list, setList] = useState(_get(queryData, 'axies'));

  return (
    <AxieListContext.Provider
      value={{ criteria, setCriteria, list, setList, ...queryData }}
    >
      {children}
    </AxieListContext.Provider>
  );
};

export default useAxieList;
