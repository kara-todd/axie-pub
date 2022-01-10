import React, { useMemo } from 'react';
import _groupBy from 'lodash.groupby';
import _get from 'lodash.get';

import AxieTraitIcon from 'components/AxieTraitIcon';

import traits from 'data/card-parts.json';
import abilities from 'data/card-abilities.json';

export const alphabetize = (a, b) => a.name.localeCompare(b.name);

const useTraitInfo = (partId) => {
  const { trait, ability } = useMemo(
    () => ({
      trait: traits.find(({ partId: id }) => id === partId) || {},
      ability: {},
      // ability: abilities.find(({ id }) => id === partId) || {},
    }),
    [partId]
  );

  return {
    name: _get(trait, 'name', '???'),
    cardName: _get(trait, 'cardName', '-'),
    cls: _get(trait, 'class'),
    type: _get(trait, 'type'),
    description: _get(ability, 'description'),
    attack: _get(ability, 'defaultAttack'),
    defense: _get(ability, 'defaultDefense'),
    energy: _get(ability, 'defaultEnergy'),
  };
};

const AxieTrait = ({ partId }) => {
  const { name, cardName, cls, type, description, attack, defense, energy } =
    useTraitInfo(partId);

  return (
    <>
      <AxieTraitIcon part={type} className="mr-2" cls={cls} />
      <span className="flex flex-col items-start">
        <span className="text-white text-sm font-bold">{name}</span>
        <span className="text-gray-400 text-sm">{cardName}</span>
        {description && (
          <>
            <span className="flex">
              <abbr title="energy">{energy}</abbr>
              <abbr title="attack">{attack}</abbr>
              <abbr title="defense">{defense}</abbr>
            </span>
            <span>{description}</span>
          </>
        )}
      </span>
    </>
  );
};

export default AxieTrait;
