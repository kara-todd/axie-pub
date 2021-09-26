import { useState } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

const slots = ['ears', 'eyes', 'horn', 'mouth', 'back', 'tail'];

const allGenesMatch = (axie, slot, partId) => {
  const genes = [
    _get(axie, `geneCalc.${slot}.d.partId`),
    _get(axie, `geneCalc.${slot}.r1.partId`),
    _get(axie, `geneCalc.${slot}.r2.partId`),
  ];
  return genes.every((gene) => gene === partId);
};

const getValidParts = (parts, slot) =>
  parts.filter((id) => id.includes(`${slot}-`));

// const checkGenes = (axie, slot, criteria) => {
//   const validParts = getValidParts(_get(criteria, 'parts'), slot);
//   return validParts.length ? allGenesMatch(axie, slot, validParts) : true;
// };

// const filterFullGene = (criteria) => (axie) =>
//   parts.reduce(
//     (isValid, slot) => isValid && checkGenes(axie, slot, criteria),
//     true
//   );

const noFilter = (axie) => axie;

const useFilterByGene = (validParts) => {
  const [matchR1, setMatchR1] = useState(false);
  const [matchR2, setMatchR2] = useState(false);

  const enableFilter = validParts.length && (matchR1 || matchR2);

  const filterByGenes = (axie) => {
    const validR1 = matchR1 ? false : true;
    const validR2 = matchR2 ? false : true;
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
