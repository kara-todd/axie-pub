import { useState } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import { geneSlotsMap, geneTraitBits, geneMap } from 'utis/axie-gene';

import partsMap from 'data/gene-map.json';
import cardParts from 'data/card-parts.json';

const { AxieGene } = require('agp-npm/dist/axie-gene');

// const slots = ['eyes', 'ears', 'back', 'mouth', 'horn', 'tail'];

const getGeneBitType = () => 256;
// const getSlotBitType = () => 256;

const getGeneBinary = (genesHex) => {
  return Array.from(genesHex.replace('0x', ''))
    .map((c) => parseInt(c, 16).toString(2).padStart(4, '0'))
    .join('')
    .padStart(getGeneBitType(genesHex), '0');
};

// const getGeneBits = (binary, key, bitmap) => {
//   const [start, stop] = _get(bitmap, key);
//   return binary.slice(start, stop);
// };

const getGeneBits = (binary, key, bitMap) => {
  const [start, end] = _get(bitMap, key);
  return binary.slice(start, end);
};

const getGeneBitsByType = (binary, type) => {
  const bitType = getGeneBitType(binary);
  const [start, end] = _get(geneTraitBits, `${bitType}`).find(
    ({ gene }) => gene === type
  ).bits;
  return binary.slice(start, end);
};

const getClassName = (binary) => _get(geneMap, `class.${binary}`, 'unknown');
const getRegionName = (binary) => _get(geneMap, `region.${binary}`, 'global');

const getAxieClass = (geneBinary) =>
  getClassName(getGeneBitsByType(geneBinary, 'cls'));
const getRegion = (geneBinary) =>
  getRegionName(getGeneBitsByType(geneBinary, 'region'));

const getVariant = (mystic, geneBinary) => {
  if (mystic === '11') {
    return 'mystic';
  }

  if (mystic === '10') {
    return 'xmas';
  }

  return getRegion(geneBinary);
};

const getCardData = (allele, slot, geneBinary, bitMap) => {
  const mystic = getGeneBits(geneBinary, 'mystic', bitMap);
  const variant = getVariant(mystic, geneBinary);
  const cls = getGeneBits(geneBinary, `${allele}.class`, bitMap);
  const part = getGeneBits(geneBinary, `${allele}.part`, bitMap);
  const name = _get(
    partsMap,
    `${getClassName(cls)}.${slot}.${part}.${variant}`
  );
  const cardStats = cardParts.find((card) => card.name === name);

  return {
    ...cardStats,
    partName: name,
    bits: `${cls} ${part}`,
    cls: _get(cardStats, 'class'),
    mystic: mystic === '11',
  };
};

export const parseGenes = (genesHex) => {
  const bitType = getGeneBitType(genesHex);
  const geneBinary = getGeneBinary(genesHex);

  const parts = Object.entries(geneSlotsMap[bitType]).reduce(
    (genes, [slot, bitMap]) => ({
      ...genes,
      [slot]: {
        d: getCardData('d', slot, geneBinary, bitMap),
        r1: getCardData('r1', slot, geneBinary, bitMap),
        r2: getCardData('r2', slot, geneBinary, bitMap),
      },
      // d: [...genes.d, getCardData('r1', slot, geneBinary, bitMap).partId],
      // r1: [...genes.r1, getCardData('r1', slot, geneBinary, bitMap).partId],
      // r2: [...genes.r2, getCardData('r2', slot, geneBinary, bitMap).partId],
    }),
    {}
  );

  return {
    cls: getAxieClass(geneBinary),
    region: getRegion(geneBinary),
    parts,
  };
};

export const addGenes = ({ genes, ...axie }) => {
  const axieGene = new AxieGene(_get(axie, 'genes'));

  return {
    ...axie,
    geneBinary: genes,
    genes: parseGenes(axie),
    geneCalc: axieGene.genes,
    quality: axieGene.getGeneQuality(),
  };
};

const useGenes = () => {
  const [enableGenes, setEnableGenes] = useState(true);

  return {
    enableGenes,
    setEnableGenes,
    addGenes,
  };
};

export default useGenes;
