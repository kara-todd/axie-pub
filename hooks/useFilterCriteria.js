import { useEffect, useReducer, useState } from 'react';
import { useRouter } from 'next/router';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';
import _isEqual from 'lodash.isequal';
import _merge from 'lodash.merge';

const initialState = {
  region: null,
  parts: [],
  bodyShapes: null,
  classes: [],
  stages: [4],
  numMystic: null,
  pureness: [],
  title: null,
  breedable: null,
  breedCount: [0, 7],
  hp: [],
  skill: [],
  speed: [],
  morale: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        [action.key]: [..._getArray(state, action.key), action.value],
      };
    case 'remove':
      return {
        ...state,
        [action.key]: _getArray(state, action.key).filter(
          (item) => item !== action.value
        ),
      };
    case 'maxBreed':
      return {
        ...state,
        breedCount: [_get(state, 'breedCount[0]'), action.value],
      };
    case 'minBreed':
      return {
        ...state,
        breedCount: [action.value, _get(state, 'breedCount[1]')],
      };
    case 'reinit':
      return {
        ...initialState,
        ...action.state,
      };

    default:
      throw new Error();
  }
};

const objectDiff = (a, b) => {
  if (_isEqual(a, b)) {
    return {};
  }

  return Object.entries(a).reduce((diff, [key, value]) => {
    if (_get(b, key, false) && !_isEqual(value, b[key])) {
      return { ...diff, [key]: b[key] };
    } else {
      return diff;
    }
  }, {});
};

const useQueryCriteria = () => {
  const router = useRouter();
  const qs = _get(router, 'query.criteria');
  const isValid = typeof qs === 'string' && qs.length;
  const criteria = isValid ? JSON.parse(qs) : {};

  return criteria;
};

const useFilterCriteria = () => {
  const router = useRouter();
  const [firstLoad, setFirstLoad] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const alteredState = objectDiff(initialState, state);
  const qs = _get(router, 'query.criteria');
  const stateQS = JSON.stringify(alteredState);
  const pathname = router.pathname;
  const replace = router.replace;

  useEffect(() => {
    const isValid = typeof qs === 'string' && qs.length;
    if (isValid) {
      try {
        const criteria = isValid ? JSON.parse(qs) : {};
        dispatch({ type: 'reinit', state: criteria });
      } catch (e) {
        console.error(e);
      }
      setFirstLoad(false);
    }
  }, [qs, dispatch, firstLoad, setFirstLoad]);

  useEffect(() => {
    if (stateQS !== qs && !firstLoad) {
      replace({
        pathname,
        query: {
          criteria: stateQS,
        },
      });
    }
  }, [stateQS, qs, replace, pathname, dispatch, firstLoad]);

  return [state, dispatch];
};

export default useFilterCriteria;
