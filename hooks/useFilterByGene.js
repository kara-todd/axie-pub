import { useState, useEffect, useCallback } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import { parseGenes } from 'hooks/useGenes';
import useAxieList from 'hooks/useAxieList';

const slots = ['ears', 'eyes', 'horn', 'mouth', 'back', 'tail'];

const checkSlot = ({ slot, parts, genes, gene }) => {
  const selected = parts.filter((name) => name.includes(`${slot}-`));
  return Array.isArray(selected) && selected.length
    ? selected.includes(_get(genes, `parts.${slot}.${gene}.partId`))
    : true;
};

const useFilterByGene = () => {
  const [matchR1, setMatchR1] = useState(false);
  const [matchR2, setMatchR2] = useState(false);
  const { criteria, addFilter, removeFilter } = useAxieList();

  const parts = _getArray(criteria, 'parts').filter(
    (partId) => !/^!/.test(partId)
  );
  const allowed = Array.isArray(parts) && parts.length;

  const filterR1 = allowed && matchR1;
  const filterR2 = allowed && matchR2;

  useEffect(() => {
    if (filterR1) {
      console.log(
        'add filterR1',
        addFilter('r1', () => true)
      );
    }
  }, [filterR1, addFilter, removeFilter]);

  return {
    allowed,
    matchR1,
    matchR2,
    setMatchR1,
    setMatchR2,
  };
};

export default useFilterByGene;
