import { useReducer } from 'react';

import get from 'lodash.get';
import getArray from 'utis/get-array';

const initialState = {
  region: null,
  parts: null,
  bodyShapes: null,
  classes: null,
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
  purity: [0, 100],
  numJapan: null,
  numXmas: null,
};

const addCriteria = (state, { key, value }) => ({
  ...state,
  [key]: [...getArray(state, key), value],
});

const removeCriteria = (state, { key, value }) => ({
  ...state,
  [key]: getArray(state, key).filter((item) => item !== value),
});

const setCount = (state, { key, value }) => ({
  ...state,
  [key]: !value || value.includes('any') || !value.length ? null : value,
});

const setRange = (state, { key, value }) => ({
  ...state,
  [key]: value.filter((value) => value !== 'any'),
});

const valueIsArray = ({ value }) => Array.isArray(value);
const keyIsValid = ({ key }) => key in initialState;

// Check all validations evaluate to true.
// If true, call the handler.
// If false, return the original state.
const validate = (checks, handler) => (state, action) => {
  const isValid = checks.reduce(
    (valid, validation) => valid && !!validation(action),
    true
  );
  return isValid ? handler(state, action) : state;
};

const handlers = {
  add: validate([keyIsValid], addCriteria),
  remove: validate([keyIsValid], removeCriteria),
  setRange: validate([keyIsValid, valueIsArray], setRange),
  setCount: validate([keyIsValid], setCount),
};

const reducer = (state, action) =>
  get(handlers, action.type, () => state)(state, action);

const useFilterCriteria = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

export default useFilterCriteria;
