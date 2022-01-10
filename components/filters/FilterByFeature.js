import React from 'react';

import _get from 'lodash.get';

import Select from 'components/ui/Select';
import useAxieList from 'hooks/useAxieList';

const FilterbyFeature = ({ className, label, name, options }) => {
  const { criteria, setCount } = useAxieList();

  return (
    <Select
      className={className}
      options={options}
      label={label}
      id={name}
      value={_get(criteria, `${name}[0]`)}
      onChange={(value) => setCount(name)([value])}
    />
  );
};

FilterbyFeature.defaultProps = {
  options: ['any', 1, 2, 3, 4, 5, 6],
};

export default FilterbyFeature;
