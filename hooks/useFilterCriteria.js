import { useCallback } from 'react';
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
    case 'minBreed':
      return {
        ...state,
        breedCount: [action.value, _get(state, 'breedCount[1]')],
      };
    case 'maxBreed':
      return {
        ...state,
        breedCount: [_get(state, 'breedCount[0]', action.value)],
      };
    case 'pureness':
      return {
        ...state,
        pureness: [action.value].filter((value) => value !== 'any'),
      };
    case 'reinit':
      return {
        ...initialState,
        ...action.state,
      };

    default:
      return state;
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

// const useQueryString = (state, dispatch) => {
//   const router = useRouter();
//   const alteredState = objectDiff(initialState, state);
//   const qs = _get(router, 'query.criteria', JSON.stringify({}));
//   const stateQS = JSON.stringify(alteredState);
//   const pathname = router.pathname;
//   const replace = router.replace;

//   const pushUrl = useCallback(
//     (query) => {
//       replace({ pathname, query });
//     },
//     [replace, pathname]
//   );

//   useEffect(() => {
//     if (qs !== stateQS) {
//       try {
//         const hasKeys = Object.keys(JSON.parse(stateQS)).length;
//         pushUrl(hasKeys ? { criteria: stateQS } : undefined);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }, [stateQS, qs, pushUrl]);
// };

const useFilterCriteria = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // useQueryString(state, dispatch);
  return [state, dispatch];
};

export default useFilterCriteria;
