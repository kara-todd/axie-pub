import { useState } from 'react';
import _get from 'lodash.get';

import _getArray from 'utis/get-array';

const getPagination = (pg, items, perPage) => {
  const total = Math.ceil(items / perPage);
  const next = Math.min(pg + 1, total);
  const prev = Math.max(0, pg - 1);

  return {
    pg,
    start: Math.max(1, pg * perPage),
    end: Math.min(items, next * perPage),
    totalResults: items,
    next: next > total ? next : undefined,
    prev: prev > 0 ? prev : undefined,
    total,
  };
};

const usePagination = (list, perPage) => {
  const [pg, setPg] = useState(0);
  const items = Array.isArray(list) ? list : [];

  return {
    setPg,
    items: items.slice(perPage * pg, perPage * (pg + 1)),
    pagination: getPagination(pg, items.length, perPage),
  };
};

export default usePagination;
