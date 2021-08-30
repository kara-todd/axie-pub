import { useReducer } from 'react';

import _get from 'lodash.get';
import _getArray from 'utis/get-array';

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

    default:
      throw new Error();
  }
};

const useFilterCriteria = (state) => useReducer(reducer, initialState);

export default useFilterCriteria;
