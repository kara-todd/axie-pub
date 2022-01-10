import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import _groupBy from 'lodash.groupby';
import _get from 'lodash.get';
import _getArray from 'utis/get-array';
import bodyParts from 'data/card-parts.json';

import { alphabetize } from 'components/AxieTrait';
import AxieTraitIcon from 'components/AxieTraitIcon';

const partSearchText = (part) =>
  [_get(part, 'name'), _get(part, 'cardName'), _get(part, 'partId')]
    .join(' ')
    .toLowerCase();

const validSearch = (search) => typeof search === 'string' && search.lenth;

const filteredPartList = (search) =>
  validSearch(search)
    ? bodyParts.filter((part) =>
        partSearchText(part).includes(search.toLowerCase())
      )
    : bodyParts;

const SlotFilter = ({ filter, onClick, type }) => {
  const selected = filter.includes(type);
  const value = selected ? filter.filter((v) => v !== type) : [...filter, type];

  return (
    <button
      className={`flex items-center justify-center cursor-pointer  border ${
        selected
          ? 'border-solid border-blue-500'
          : 'border-dashed border-gray-700'
      }`}
      key={type}
      title={type}
      aria-pressed={selected}
      onClick={() => onClick(value)}
    >
      <div className="saturate-0">
        <AxieTraitIcon part={type} />
      </div>
    </button>
  );
};

const AxieTraitSelector = ({ TraitOption }) => {
  const ref = useRef(null);
  const [search, setSearch] = useState(false);
  const [showList, setShowList] = useState(false);
  const list = filteredPartList(search);
  const slots = Object.entries(_groupBy(list, 'type'));
  const [filter, setFilter] = useState([]);

  useClickAway(ref, () => {
    setShowList(false);
  });

  const filterTraits = (trait) =>
    !!filter.length ? filter.includes(_get(trait, 'type')) : trait;

  return (
    <div className="w-full mt-2 relative" ref={ref}>
      <input
        className="px-3 py-2 w-full border transition border-gray-600 bg-gray-900 text-white placeholder-gray-600"
        placeholder="Search parts and abilities"
        value={search || ''}
        onChange={(e) => setSearch(_get(e, 'target.value'))}
        onFocus={() => setShowList(true)}
      />
      {showList && (
        <div className="transition-opacity absolute top-full left-0 right-0 bg-gray-900 border-gray-600">
          <div className="w-full">
            <div className="px-2 grid grid-cols-6 gap-2 py-4 bg-gray-900 ">
              {slots.map(([type]) => (
                <SlotFilter
                  key={type}
                  type={type}
                  filter={filter}
                  onClick={(value) => setFilter(value)}
                />
              ))}
            </div>
            <div className="overflow-y-auto w-full h-80">
              <ul className="p-0 list-none m-0">
                {list
                  .sort(alphabetize)
                  .filter(filterTraits)
                  .map((trait) => (
                    <TraitOption key={_get(trait, 'partId')} {...trait} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AxieTraitSelector;
