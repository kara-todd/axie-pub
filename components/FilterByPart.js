import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import _groupBy from 'lodash.groupby';
import _get from 'lodash.get';
import bodyParts from 'data/card-parts.json';

import AxieIconPart from 'components/axie-icon/AxieIconPart';

const CloseIcon = ({ className }) => (
  <svg width="12" height="12" viewBox="0 0 16 16" className={className}>
    <path
      fill="currentColor"
      d="M11.033 8l4.548-4.549a1.43 1.43 0 000-2.021L14.571.419a1.43 1.43 0 00-2.022 0L8 4.967 3.451.42a1.43 1.43 0 00-2.021 0L.419 1.429a1.43 1.43 0 000 2.022L4.967 8 .42 12.549a1.43 1.43 0 000 2.021l1.01 1.011a1.43 1.43 0 002.022 0L8 11.033l4.549 4.548a1.43 1.43 0 002.021 0l1.011-1.01a1.43 1.43 0 000-2.022L11.033 8z"
    ></path>
  </svg>
);

const BodyPart = ({
  partId,
  name,
  cardName,
  onClick,
  class: cls,
  type,
  remove,
}) => (
  <button
    className="flex items-center justify-start w-full cursor-pointer p-2 pl-0"
    onClick={onClick}
    title={partId}
  >
    <AxieIconPart part={type} className="mr-2" cls={cls} />
    <span className="flex flex-col items-start">
      <span className="text-white text-sm font-bold">{name || '???'}</span>
      <span className="text-gray-400 text-sm">{cardName || '-'}</span>
    </span>
    {remove && <CloseIcon className="ml-auto" />}
  </button>
);

const PartList = ({ parts, onClick, remove }) => (
  <ul className="p-0 list-none m-0">
    {parts.map((part) => (
      <li key={_get(part, 'partId')}>
        <BodyPart {...part} onClick={() => onClick(part)} remove={remove} />
      </li>
    ))}
  </ul>
);

const filteredPartList = (search) => {
  if (!search) {
    return bodyParts;
  }

  return bodyParts.filter((part) => {
    const text = `${_get(part, 'name')} ${_get(part, 'cardName')} ${_get(
      part,
      'partId'
    )}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });
};

const FilterByPart = ({ selected, onAdd, onRemove }) => {
  const ref = useRef(null);
  const [search, setSearch] = useState(false);
  const [showList, setShowList] = useState(false);
  const list = filteredPartList(search);

  const addPart = ({ partId }) => {
    setShowList(false);
    onAdd(partId);
  };

  const removePart = ({ partId }) => {
    onRemove(partId);
  };

  useClickAway(ref, () => {
    setShowList(false);
  });

  return (
    <section className="mb-4">
      <h2 className="text-gray-500 uppercase font-bold text-xs">Parts</h2>
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
            <div className="overflow-y-auto w-full h-80">
              {Object.entries(_groupBy(list, 'type')).map(([type, parts]) => (
                <section className="px-3 pb-4" key={type}>
                  <h3 className="mt-4 uppercase text-xs text-gray-500 font-bold leading-tight">
                    {type}
                  </h3>
                  <PartList parts={parts} onClick={addPart} />
                </section>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="py-2 my-2 border-b border-gray-800">
        <PartList
          parts={bodyParts.filter((part) =>
            selected.includes(_get(part, 'partId'))
          )}
          onClick={removePart}
          remove
        />
      </div>
    </section>
  );
};

export default FilterByPart;
