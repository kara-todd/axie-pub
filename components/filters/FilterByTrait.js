import React from 'react';

import _getArray from 'utis/get-array';

import AxieTrait from 'components/AxieTrait';
import AxieTraitSelector from 'components/AxieTraitSelector';
import IconMinus from 'components/ui/IconMinus';
import IconPlus from 'components/ui/IconPlus';
import IconTrash from 'components/ui/IconTrash';

import useAxieList from 'hooks/useAxieList';

const FilterByTrait = () => {
  const { criteria, add, remove, invert } = useAxieList();

  const TraitOption = ({ partId }) => {
    const selected = _getArray(criteria, 'parts').includes(partId);

    return (
      <li
        tabIndex={0}
        role="option"
        aria-selected={selected}
        className={`flex items-center justify-start w-full cursor-pointer p-2 ${
          selected ? 'bg-gray-700' : ''
        }`}
        onClick={() =>
          selected ? remove('parts')(partId) : add('parts')(partId)
        }
        title={partId}
      >
        <AxieTrait partId={partId} />
      </li>
    );
  };

  return (
    <section className="mb-4">
      <h2 className="text-gray-500 uppercase font-bold text-xs">Parts</h2>
      <AxieTraitSelector TraitOption={TraitOption} />
      <div className="py-2 my-2 border-b border-gray-800">
        <ul className="p-0 list-none m-0" role="group">
          {_getArray(criteria, 'parts')
            .map((partId) => partId.replace(/^!/, ''))
            .map((partId) => (
              <li
                className="flex items-center justify-start mb-2"
                key={partId}
                tabIndex={0}
              >
                <AxieTrait partId={partId} />
                <button
                  className="text-gray-600 ml-auto mr-2"
                  onClick={() => invert('parts')(partId)}
                >
                  {_getArray(criteria, 'parts').includes(`!${partId}`) ? (
                    <IconMinus
                      title={'Does not have trait'}
                      className={'w-5 h-5 text-red-800'}
                    />
                  ) : (
                    <IconPlus
                      title={'Has trait'}
                      className={'w-5 h-5 text-green-800'}
                    />
                  )}
                </button>
                <button
                  onClick={() => remove('parts')(partId)}
                  title="Remove"
                  className="text-gray-500"
                >
                  <IconTrash className={'w-5 h-5'} />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterByTrait;
