import React from 'react';
import _get from 'lodash.get';
import _getArray from 'utis/get-array';

import Button from 'components/ui/Button';

const PagerBtn = ({ pg, label, onClick }) => (
  <Button disabled={pg === undefined} onClick={onClick} title={`Page ${pg}`}>
    {label}
  </Button>
);

const Pagination = ({
  children,
  start,
  end,
  prev,
  next,
  totalResults,
  setPg,
}) => (
  <div className="flex w-full justify-center items-center mb-4 p-5">
    <PagerBtn pg={prev} onClick={() => setPg(prev)} label="Prev" />
    <p className="flex flex-col text-center mx-6">
      <span>
        Showing: {start} - {end} of {totalResults}
      </span>{' '}
      {children}
    </p>
    <PagerBtn pg={next} onClick={() => setPg(next)} label="Next" />
  </div>
);

export default Pagination;
