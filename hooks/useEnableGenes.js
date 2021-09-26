import React, { useEffect, useState } from 'react';

import ToggleButton from 'components/ui/ToggleButton';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import tw from 'twin.macro';

const { AxieGene } = require('agp-npm/dist/axie-gene');

const useEnableGenes = (axieList) => {
  const [enableGenes, setEnableGenes] = useState(true);

  return {
    enableGenes,
    setEnableGenes,
    addGenes: enableFilter ? filterByGenes : noFilter,
  };
};

export default useFilerByGene;
