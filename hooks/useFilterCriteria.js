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
  [key]: getArray(state, key).filter(
    (item) => item !== value && item !== `!${value}`
  ),
});

const invertCriteria = (state, { key, value }) => ({
  ...state,
  [key]: getArray(state, key).map((item) => {
    if (item === value) {
      return `!${value}`;
    }

    if (item === `!${value}`) {
      return `${value}`;
    }

    return item;
  }),
});

const setCount = (state, { key, value }) => ({
  ...state,
  [key]: !value || value.includes('any') || !value.length ? null : value,
});

const setRange = (state, { key, value }) => ({
  ...state,
  [key]: value,
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
  invert: validate([keyIsValid], invertCriteria),
  setRange: validate([keyIsValid, valueIsArray], setRange),
  setCount: validate([keyIsValid], setCount),
};

// Cute but hard to read.
// Maybe worth it if there are a lot of handlers down-the-line.

// const dispatchers = (dispatch) =>
//   Object.keys(handlers).reduce(
//     (keys, handler) => ({
//       ...keys,
//       [handler]: (type) => (key) => (value) => dispatch({ type, key, value }),
//     }),
//     {}
//   );

const reducer = (state, action) => {
  const handler = get(handlers, action.type);
  return handler ? handler(state, action) : state;
};

const useFilterCriteria = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    criteria: state,
    add: (key) => (value) => dispatch({ type: 'add', key, value }),
    remove: (key) => (value) => dispatch({ type: 'remove', key, value }),
    invert: (key) => (value) => dispatch({ type: 'invert', key, value }),
    setRange: (key) => (value) => dispatch({ type: 'setRange', key, value }),
    setCount: (key) => (value) => dispatch({ type: 'setCount', key, value }),
  };
};

export default useFilterCriteria;
