import { useState } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import { parseGenes } from 'hooks/useGenes';

const slots = ['ears', 'eyes', 'horn', 'mouth', 'back', 'tail'];

const checkSlot = ({ slot, validParts, genes, gene }) => {
  const selected = validParts.filter((name) => name.includes(`${slot}-`));
  const hasSelected = Array.isArray(selected) && selected.length;
  return hasSelected
    ? selected.includes(_get(genes, `parts.${slot}.${gene}.partId`))
    : true;
};

const checkGene = ({ validParts, genes, gene }) =>
  slots.reduce(
    (isValid, slot) => isValid && checkSlot({ slot, validParts, genes, gene }),
    true
  );

const noFilter = () => true;

const useFilterByGene = (validParts) => {
  const [matchR1, setMatchR1] = useState(false);
  const [matchR2, setMatchR2] = useState(false);

  const enableFilter =
    Array.isArray(validParts) && validParts.length && (matchR1 || matchR2);

  const filterByGenes = (axie) => {
    const genes = parseGenes(_get(axie, 'genes'));
    const validR1 = matchR1
      ? checkGene({ validParts, genes, gene: 'r1' })
      : true;
    const validR2 = matchR2
      ? checkGene({ validParts, genes, gene: 'r2' })
      : true;
    return validR1 && validR2;
  };

  return {
    filterByGenes: enableFilter ? filterByGenes : noFilter,
    matchR1,
    matchR2,
    setMatchR1,
    setMatchR2,
  };
};

export default useFilterByGene;
