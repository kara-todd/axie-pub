import React, { createContext, useContext, useState, useCallback } from 'react';
import _get from 'lodash.get';

import _getArray from 'utis/get-array';

import useAxieQuery from 'hooks/useAxieQuery';
import useFilterCriteria from 'hooks/useFilterCriteria';

const AxieListContext = createContext();

const useFilters = (axies) => {
  const [filters, setFilters] = useState({});

  const addFilter = (key, fn) => setFilters({ ...filters, [key]: fn });
  const removeFilter = (key) => {
    const { [key]: omit, ...rest } = filters;
    setFilters(rest);
  };

  const applyFilters = (axie) =>
    Object.values(filters)
      .filter((filter) => typeof filter === 'function')
      .every((filter) => filter(axie));

  return {
    list: filters.length ? axies.filter(applyFilters) : axies,
    addFilter,
    removeFilter,
  };
};

export const AxieListProvider = ({ children }) => {
  const [enableGenes, setEnableGenes] = useState(true);
  const criteria = useFilterCriteria();
  const queryData = useAxieQuery(_get(criteria, 'criteria', {}));
  const filters = useFilters(_getArray(queryData, 'axies'));

  console.log('filters', filters);

  return (
    <AxieListContext.Provider
      value={{
        enableGenes,
        setEnableGenes,
        ...filters,
        ...criteria,
        ...queryData,
      }}
    >
      {children}
    </AxieListContext.Provider>
  );
};

const useAxieList = () => useContext(AxieListContext);

export default useAxieList;
